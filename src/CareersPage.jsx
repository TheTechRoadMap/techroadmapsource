import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { careerCategories, careers } from './careersData.js';
import { usePageMeta } from './pageMeta.js';

function CareerIcon({ type, icon }) {
  if (icon) {
    return <span className="career-card__icon-text">{icon}</span>;
  }
  switch (type) {
    case 'code':
      return <span className="career-card__icon-text">&lt;/&gt;</span>;
    case 'shield':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'cloud':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'chart':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <line x1="18" x2="18" y1="20" y2="10" />
          <line x1="12" x2="12" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
      );
    case 'brain':
    case 'ai':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <rect height="12" rx="2" width="16" x="4" y="6" />
          <path d="M9 18v3M15 18v3M9 3v3M15 3v3M3 10h18M3 14h18" />
        </svg>
      );
    case 'network':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <rect height="6" rx="1" width="6" x="9" y="2" />
          <rect height="6" rx="1" width="6" x="2" y="16" />
          <rect height="6" rx="1" width="6" x="16" y="16" />
          <path d="M12 8v5M5 16v-3h14v3" />
        </svg>
      );
    case 'gear':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'palette':
      return (
        <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.67 0-.42-.16-.82-.44-1.12-.27-.3-.44-.72-.44-1.21 0-.92.75-1.67 1.67-1.67H17c2.76 0 5-2.24 5-5 0-4.42-4.03-8-10-8z" />
        </svg>
      );
    default:
      return <span className="career-card__icon-text">⚡</span>;
  }
}

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');

  usePageMeta(
    'Career Explorer - TechRoadMap',
    'Explore technology careers and find the path that fits you. Connect each career to roadmaps, skills, and resources.',
  );

  const filteredCareers = careers.filter((career) => {
    const matchesCategory =
      selectedCategory === 'all' || career.category === selectedCategory;
    const haystack = `${career.title} ${career.blurb} ${career.categoryLabel}`.toLowerCase();
    const matchesSearch = haystack.includes(searchText.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="career-explorer-page">
      <header className="career-explorer-header">
        <h1>Career Explorer</h1>
        <p>
          Explore technology careers and find the path that fits you. Each career connects to a roadmap, projects, certifications and resources.
        </p>
      </header>

      <section className="career-filter-bar">
        <div className="career-search-input-wrap">
          <svg className="career-search-icon" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
          </svg>
          <input
            aria-label="Search tech careers"
            className="career-search-input"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search tech careers..."
            type="text"
            value={searchText}
          />
        </div>

        <div className="career-category-pills">
          {careerCategories.map((cat) => (
            <button
              key={cat.id}
              className={`career-pill ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="career-grid">
        {filteredCareers.map((career) => (
          <article className="glass-card career-card" key={career.id}>
            <div className="career-card__icon-box">
              <CareerIcon icon={career.icon} type={career.iconType} />
            </div>

            <h2 className="career-card__title">{career.title}</h2>
            <p className="career-card__blurb">{career.blurb || career.summary}</p>

            <div className="career-card__tags">
              <span className="career-tag career-tag--category">
                {career.categoryLabel || career.category}
              </span>
              <span className="career-tag career-tag--demand">
                📈 {career.demand}
              </span>
              {career.workMode ? (
                <span className="career-tag career-tag--location">
                  📍 {career.workMode}
                </span>
              ) : null}
            </div>

            <div className="career-card__footer">
              <Link className="career-card__link" to={`/careers/${career.id}`}>
                Explore career
              </Link>
            </div>
          </article>
        ))}
      </section>

      {filteredCareers.length === 0 ? (
        <div className="career-empty-state">
          <h3>No careers found</h3>
          <p>Try searching for a different keyword or selecting another category.</p>
        </div>
      ) : null}
    </div>
  );
}
