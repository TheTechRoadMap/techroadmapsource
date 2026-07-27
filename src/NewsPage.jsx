import React, { useEffect, useMemo, useState } from 'react';
import { filterNews, isSafeHttpsUrl, uniqueValues } from './contentUtils.js';
import { usePageMeta } from './pageMeta.js';
import TechNewsCard from './TechNewsCard.jsx';
import { loadTechNews, newsCategories } from './techNews.js';

function NewsPageSkeleton() {
  return (
    <div className="news-card glass-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton--media" />
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--line" />
    </div>
  );
}

export default function NewsPage() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    source: 'all',
    sort: 'newest',
  });

  usePageMeta(
    'Tech News - TechRoadMap',
    'Browse curated technology news from original publishers across AI, software, cloud, security, data, and careers.',
  );

  useEffect(() => {
    let active = true;
    loadTechNews()
      .then((articles) => {
        if (active) {
          setItems(articles.filter((article) => isSafeHttpsUrl(article.articleUrl)));
          setStatus('ready');
        }
      })
      .catch(() => {
        if (active) {
          setStatus('error');
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const filteredItems = useMemo(() => filterNews(items, filters), [filters, items]);
  const sources = useMemo(() => uniqueValues(items, 'source'), [items]);

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <header className="header">
        <span className="eyebrow">Curated external reading</span>
        <h1>Tech News</h1>
        <p>Explore developments shaping technology, then continue to the original publisher for the full story.</p>
      </header>

      <section className="search-filter news-filters" aria-label="News filters">
        <label>
          <span>Search</span>
          <input
            onChange={(event) => updateFilter('search', event.target.value)}
            placeholder="Search news..."
            type="text"
            value={filters.search}
          />
        </label>
        <label>
          <span>Category</span>
          <select onChange={(event) => updateFilter('category', event.target.value)} value={filters.category}>
            <option value="all">All categories</option>
            {newsCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Source</span>
          <select onChange={(event) => updateFilter('source', event.target.value)} value={filters.source}>
            <option value="all">All sources</option>
            {sources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Sort</span>
          <select onChange={(event) => updateFilter('sort', event.target.value)} value={filters.sort}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </section>

      {status === 'loading' ? (
        <section className="news-grid" aria-busy="true" aria-label="Loading news">
          {Array.from({ length: 6 }, (_, index) => (
            <NewsPageSkeleton key={index} />
          ))}
        </section>
      ) : null}

      {status === 'error' ? (
        <section className="roadmap-section empty-state">
          <h2 className="section-title">News unavailable</h2>
          <p>The news feed could not be loaded. Please try again later.</p>
        </section>
      ) : null}

      {status === 'ready' && filteredItems.length ? (
        <>
          <div className="results-summary" aria-live="polite">
            {filteredItems.length} article{filteredItems.length === 1 ? '' : 's'}
          </div>
          <section className="news-grid" aria-label="Technology news">
            {filteredItems.map((article) => (
              <TechNewsCard article={article} key={article.id} />
            ))}
          </section>
        </>
      ) : null}

      {status === 'ready' && !filteredItems.length ? (
        <section className="roadmap-section empty-state">
          <h2 className="section-title">No articles match</h2>
          <p>Try a different search term, category, or publication.</p>
        </section>
      ) : null}
    </>
  );
}
