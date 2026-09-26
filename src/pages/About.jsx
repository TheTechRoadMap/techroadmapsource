import React, { useCallback, useEffect, useState } from 'react';
import { aboutContent, missionSlides } from '../data/siteContent.js';
import { usePageMeta } from '../utils/pageMeta.js';
import { Icon, SocialIcon } from '../components/ui/Icon.jsx';

const teamIconMap = {
  FaBullhorn: 'megaphone',
  FaCode: 'code',
  FaRocket: 'rocket',
  FaUser: 'user',
  FaVial: 'flask',
};

function renderSocialIcon(label) {
  return <SocialIcon label={label} />;
}

function MissionSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Autoplay every 6 seconds unless user hovers or interacts
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const activeSlide = slides[currentIndex];

  return (
    <section
      aria-label="Our Mission Carousel"
      className="mission-slider-card"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex="0"
    >
      {/* Background Nature Layers with Smooth Cross-fade */}
      <div className="mission-bg-wrapper">
        {slides.map((slide, idx) => (
          <div
            aria-hidden="true"
            className={`mission-bg-layer ${idx === currentIndex ? 'is-active' : ''}`}
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="mission-bg-overlay" />
      </div>

      {/* Foreground Content */}
      <div className="mission-content-container">
        <div className="mission-text-block" key={activeSlide.id}>
          <h2 className="mission-title">{activeSlide.title}</h2>
          <blockquote className="mission-quote">{activeSlide.quote}</blockquote>
          <p className="mission-desc">{activeSlide.description}</p>
        </div>

        {/* Controls: Counter, Navigation Dots, Prev / Next Buttons */}
        <div className="mission-controls-row">
          <div className="mission-counter">
            <span className="current-num">0{currentIndex + 1}</span>
            <span className="separator">/</span>
            <span className="total-num">0{total}</span>
          </div>

          <div aria-label="Choose mission slide" className="mission-dots-nav" role="tablist">
            {slides.map((slide, idx) => (
              <button
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                aria-selected={idx === currentIndex}
                className={`mission-dot-btn ${idx === currentIndex ? 'is-active' : ''}`}
                key={slide.id}
                onClick={() => goToSlide(idx)}
                role="tab"
                type="button"
              />
            ))}
          </div>

          <div className="mission-arrow-group">
            <button
              aria-label="Previous mission message"
              className="mission-arrow-btn"
              onClick={prevSlide}
              type="button"
            >
              <Icon name="back" />
            </button>
            <button
              aria-label="Next mission message"
              className="mission-arrow-btn"
              onClick={nextSlide}
              type="button"
            >
              <Icon name="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  usePageMeta(
    'About TechRoadMap',
    'Learn about the Tech Roadmaps mission, the team behind the platform, and how to get in touch.',
  );

  const slides = aboutContent.missionSlides || missionSlides;

  return (
    <>
      <header className="header">
        <h1>About TechRoadMap</h1>
        <p>Learn more about the mission behind this platform, the people shaping it, and the best ways to connect.</p>
      </header>

      <MissionSlider slides={slides} />

      <section className="team-card">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {aboutContent.team.map((member) => (
            <article className="team-member" key={member.name}>
              <div className={`member-badge member-badge--${member.accent}`}>
                <span className="member-avatar" aria-hidden="true">
                  <Icon name={teamIconMap[member.avatar] ?? 'user'} size={24} />
                </span>
              </div>
              <div className="member-meta">
                <h3>{member.name}</h3>
                <span className={`role-tag role-tag--${member.accent}`}>{member.role}</span>
              </div>
              <p>{member.description}</p>
              {member.contactEmail ? (
                <ul className="contact-list">
                  <li>
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${member.contactEmail}`}>{member.contactEmail}</a>
                  </li>
                </ul>
              ) : null}
              <div className="team-social">
                {member.links.map((link) => (
                  <a
                    aria-label={link.label}
                    href={link.href}
                    key={link.href}
                    rel="noopener noreferrer"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {renderSocialIcon(link.label)}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-card">
        <h2>Connect with Us</h2>
        <p>
          Questions, suggestions, and collaboration requests are welcome. Use the links below to reach the team, follow the brand, or explore the broader community.
        </p>

        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${aboutContent.contactEmail}`}>{aboutContent.contactEmail}</a>
          </li>
        </ul>

        <div className="social-links">
          {aboutContent.socialLinks.map((link) => (
            <a
              aria-label={link.label}
              href={link.href}
              key={link.href}
              rel="noopener noreferrer"
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {renderSocialIcon(link.label)}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
