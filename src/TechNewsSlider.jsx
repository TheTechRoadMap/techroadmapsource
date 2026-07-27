import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { isSafeHttpsUrl } from './contentUtils.js';
import TechNewsCard from './TechNewsCard.jsx';
import { getNewsFeedLabel, useTechNews } from './useTechNews.js';

function NewsSkeleton() {
  return (
    <div className="news-card glass-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton--media" />
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--line" />
      <div className="skeleton skeleton--button" />
    </div>
  );
}

export default function TechNewsSlider() {
  const { articles: loadedArticles, feedMode, status } = useTechNews();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);
  const articles = loadedArticles.filter((item) => isSafeHttpsUrl(item.articleUrl));

  useEffect(() => {
    function updateVisibleCount() {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setVisibleCount(1);
      } else if (window.matchMedia('(max-width: 1023px)').matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, articles.length - visibleCount);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (requestedIndex) => {
      const nextIndex = requestedIndex > maxIndex ? 0 : requestedIndex < 0 ? maxIndex : requestedIndex;
      const viewport = viewportRef.current;
      const card = viewport?.querySelector(`[data-news-index="${nextIndex}"]`);
      if (viewport && card) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        viewport.scrollTo({
          left: card.offsetLeft,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      }
      setActiveIndex(nextIndex);
    },
    [maxIndex],
  );

  useEffect(() => {
    if (paused || status !== 'ready' || maxIndex === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => goTo(activeIndex + 1), 6000);
    return () => window.clearInterval(timer);
  }, [activeIndex, goTo, maxIndex, paused, status]);

  function handleScroll() {
    const viewport = viewportRef.current;
    const firstCard = viewport?.querySelector('[data-news-index="0"]');
    if (!viewport || !firstCard) {
      return;
    }
    const step = firstCard.offsetWidth + 16;
    setActiveIndex(Math.min(maxIndex, Math.max(0, Math.round(viewport.scrollLeft / step))));
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  }

  return (
    <section
      className="news-feature"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onFocus={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-heading-row">
        <div>
          <span className="eyebrow">Industry watch</span>
          <h2>Latest Tech News</h2>
          <p>Stay informed about developments shaping the technology industry.</p>
          <span className={`news-feed-status news-feed-status--${feedMode}`}>
            {getNewsFeedLabel(feedMode)}
          </span>
        </div>
        <div className="carousel-controls">
          <button aria-label="Previous news articles" disabled={maxIndex === 0} onClick={() => goTo(activeIndex - 1)} type="button">
            ←
          </button>
          <button aria-label="Next news articles" disabled={maxIndex === 0} onClick={() => goTo(activeIndex + 1)} type="button">
            →
          </button>
        </div>
      </div>

      {status === 'loading' ? (
        <div className="news-slider news-slider--loading" aria-busy="true" aria-label="Loading latest news">
          {Array.from({ length: 3 }, (_, index) => (
            <NewsSkeleton key={index} />
          ))}
        </div>
      ) : null}

      {status === 'error' || (status === 'ready' && !articles.length) ? (
        <div className="inline-state">Tech news is unavailable right now. Please check back later.</div>
      ) : null}

      {status === 'ready' && articles.length ? (
        <>
          <div
            aria-label="Latest technology news carousel"
            aria-roledescription="carousel"
            className="news-slider"
            onKeyDown={handleKeyDown}
            onPointerDown={() => setPaused(true)}
            onPointerUp={(event) => setPaused(event.pointerType === 'mouse')}
            onScroll={handleScroll}
            ref={viewportRef}
            role="region"
            tabIndex="0"
          >
            {articles.map((article, index) => (
              <div className="news-slide" data-news-index={index} key={article.id}>
                <TechNewsCard article={article} />
              </div>
            ))}
          </div>
          <div className="carousel-dots" aria-label="Choose news slide">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                aria-label={`Go to news slide ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={activeIndex === index ? 'is-active' : ''}
                key={index}
                onClick={() => goTo(index)}
                type="button"
              />
            ))}
          </div>
        </>
      ) : null}

      <div className="centered-action">
        <Link className="button-link button-link--secondary" to="/news">
          View all news
        </Link>
      </div>
    </section>
  );
}
