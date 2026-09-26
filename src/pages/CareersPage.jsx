import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { careerCategories, careers } from '../data/careersData.js';
import { usePageMeta } from '../utils/pageMeta.js';
import { CareerIcon as CareerTypeIcon, Icon } from '../components/ui/Icon.jsx';

function CareerIcon({ type, icon }) {
  return <CareerTypeIcon type={type} />;
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
          <Icon className="career-search-icon" name="search" size={18} />
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
                <Icon name="chart" size={15} /> {career.demand}
              </span>
              {career.workMode ? (
                <span className="career-tag career-tag--location">
                  <Icon name="map" size={15} /> {career.workMode}
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
