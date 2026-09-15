import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { roadmapCategories, roadmapsData } from './roadmapsData.js';
import { usePageMeta } from './pageMeta.js';

export default function RoadmapsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');

  usePageMeta(
    'Roadmap Explorer - TechRoadMap',
    'Explore step-by-step career roadmaps in technology. Discover structured learning paths, recommended books, YouTube videos, and certifications.',
  );

  const filteredRoadmaps = roadmapsData.filter((roadmap) => {
    const matchesCategory =
      selectedCategory === 'all' || roadmap.category === selectedCategory;
    const haystack = `${roadmap.title} ${roadmap.blurb} ${roadmap.categoryLabel}`.toLowerCase();
    const matchesSearch = haystack.includes(searchText.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="roadmaps-page">
      <header className="roadmaps-header">
        <h1>Roadmaps Explorer</h1>
        <p>
          Structured step-by-step learning paths for technology careers. Each roadmap breaks down essential skills into 10 clear steps with curated books, YouTube videos, and certifications.
        </p>
      </header>

      <section className="roadmap-filter-bar">
        <div className="roadmap-search">
          <input
            aria-label="Search roadmaps"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search roadmaps by title, skill, or keyword..."
            type="search"
            value={searchText}
          />
        </div>

        <div className="roadmap-category-pills">
          {roadmapCategories.map((cat) => (
            <button
              key={cat.id}
              className={`roadmap-pill ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="roadmap-grid">
        {filteredRoadmaps.map((roadmap) => (
          <article className="glass-card roadmap-catalog-card" key={roadmap.id}>
            <div className="roadmap-card__top">
              <span className="roadmap-tag roadmap-tag--category">
                {roadmap.categoryLabel}
              </span>
              <span className="roadmap-tag roadmap-tag--steps">
                {roadmap.stepCount} steps
              </span>
            </div>

            <h2 className="roadmap-card__title">{roadmap.title}</h2>
            <p className="roadmap-card__blurb">{roadmap.blurb}</p>

            <div className="roadmap-card__steps-preview">
              {roadmap.steps.slice(0, 4).map((step, idx) => (
                <span className="step-pill" key={step.number}>
                  <strong>{idx + 1}.</strong> {step.title}
                </span>
              ))}
              {roadmap.steps.length > 4 ? (
                <span className="step-pill step-pill--more">
                  +{roadmap.steps.length - 4} more
                </span>
              ) : null}
            </div>

            <div className="roadmap-card__footer">
              <Link className="roadmap-card__link" to={`/roadmaps/${roadmap.id}`}>
                View Roadmap
              </Link>
            </div>
          </article>
        ))}
      </section>

      {filteredRoadmaps.length === 0 ? (
        <div className="roadmap-empty-state">
          <h3>No roadmaps found</h3>
          <p>Try searching for a different keyword or selecting another category.</p>
        </div>
      ) : null}
    </div>
  );
}
