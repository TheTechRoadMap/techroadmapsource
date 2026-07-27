import React, { useEffect, useMemo, useState } from 'react';
import CertificationCard from './CertificationCard.jsx';
import {
  certificationCategories,
  certificationVideos,
  loadCertificationCatalog,
} from './certifications.js';
import { filterCertifications, uniqueValues } from './contentUtils.js';
import { roadmapContent } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';

const initialFilters = {
  search: '',
  provider: 'all',
  category: 'all',
  difficulty: 'all',
  costType: 'all',
};

function CertificationSkeleton() {
  return (
    <div className="certification-card glass-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton--circle" />
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--line" />
      <div className="skeleton skeleton--line" />
      <div className="skeleton skeleton--button" />
    </div>
  );
}

export default function CertificationsPage() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [status, setStatus] = useState('loading');

  usePageMeta(
    'IT Certifications - TechRoadMap',
    'Find additional recognised IT certifications, related career paths, and recommended preparation videos.',
  );

  useEffect(() => {
    let active = true;
    loadCertificationCatalog()
      .then((catalog) => {
        if (active) {
          setItems(catalog);
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

  const filteredItems = useMemo(() => filterCertifications(items, filters), [items, filters]);
  const providers = useMemo(() => uniqueValues(items, 'provider'), [items]);

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <header className="header">
        <span className="eyebrow">Credential explorer</span>
        <h1>IT Certifications</h1>
        <p>Build job-ready skills with recognised certifications that complement the credentials already inside each roadmap.</p>
      </header>

      <section className="search-filter certification-filters" aria-label="Certification filters">
        <label>
          <span>Search</span>
          <input
            onChange={(event) => updateFilter('search', event.target.value)}
            placeholder="Search certifications and skills..."
            type="text"
            value={filters.search}
          />
        </label>
        <label>
          <span>Provider</span>
          <select onChange={(event) => updateFilter('provider', event.target.value)} value={filters.provider}>
            <option value="all">All providers</option>
            {providers.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Career category</span>
          <select onChange={(event) => updateFilter('category', event.target.value)} value={filters.category}>
            <option value="all">All categories</option>
            {Object.entries(certificationCategories).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Difficulty</span>
          <select onChange={(event) => updateFilter('difficulty', event.target.value)} value={filters.difficulty}>
            <option value="all">All levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <label>
          <span>Cost</span>
          <select onChange={(event) => updateFilter('costType', event.target.value)} value={filters.costType}>
            <option value="all">All cost types</option>
            {['Free', 'Paid', 'Financial Aid Available'].map((costType) => (
              <option key={costType} value={costType}>
                {costType}
              </option>
            ))}
          </select>
        </label>
      </section>

      {status === 'loading' ? (
        <section className="certification-grid" aria-label="Loading certifications" aria-busy="true">
          {Array.from({ length: 6 }, (_, index) => (
            <CertificationSkeleton key={index} />
          ))}
        </section>
      ) : null}

      {status === 'error' ? (
        <section className="roadmap-section empty-state">
          <h2 className="section-title">Certifications unavailable</h2>
          <p>The certification catalog could not be loaded. Please try again later.</p>
        </section>
      ) : null}

      {status === 'ready' ? (
        <>
          <div className="results-summary" aria-live="polite">
            Showing {filteredItems.length} of {items.length} additional certifications
          </div>
          {filteredItems.length ? (
            <section className="certification-grid" aria-label="Certification catalog">
              {filteredItems.map((certification) => (
                <CertificationCard
                  certification={certification}
                  key={certification.id}
                  roadmaps={roadmapContent}
                  videos={certificationVideos}
                />
              ))}
            </section>
          ) : (
            <section className="roadmap-section empty-state">
              <h2 className="section-title">No certifications found</h2>
              <p>Try a different search term or clear one of the filters.</p>
              <button className="button-link button-reset" onClick={() => setFilters(initialFilters)} type="button">
                Clear all filters
              </button>
            </section>
          )}
        </>
      ) : null}
    </>
  );
}
