import React, { useEffect, useMemo, useState } from 'react';
import CertificationFolder from './CertificationFolder.jsx';
import {
  certificationCategories,
  certificationProviders,
  loadCertificationCatalog,
} from './certifications.js';
import { filterCertifications, uniqueValues } from './contentUtils.js';
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
    <div className="certification-folder glass-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton--circle" />
      <div className="skeleton skeleton--title" />
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
    'Browse recognised IT certifications and continue to each official provider for complete details.',
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
  const costTypes = useMemo(() => uniqueValues(items, 'costType'), [items]);
  const groupedProviders = useMemo(() => {
    const providerOrder = Object.keys(certificationProviders);
    const groups = new Map();

    filteredItems.forEach((certification) => {
      const group = groups.get(certification.provider) ?? [];
      group.push(certification);
      groups.set(certification.provider, group);
    });

    return [...groups.entries()].sort(([left], [right]) => {
      const leftIndex = providerOrder.indexOf(left);
      const rightIndex = providerOrder.indexOf(right);
      return (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex)
        - (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex)
        || left.localeCompare(right);
    });
  }, [filteredItems]);

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <header className="header">
        <span className="eyebrow">Credential explorer</span>
        <h1>Certifications &amp; Programmes</h1>
        <p>Open an organisation folder, choose an opportunity, then continue to its official website.</p>
      </header>

      <section className="search-filter certification-filters" aria-label="Certification filters">
        <label>
          <span>Search</span>
          <input
            onChange={(event) => updateFilter('search', event.target.value)}
            placeholder="Search organisations, credentials, and skills..."
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
            {costTypes.map((costType) => (
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
            {groupedProviders.length} {groupedProviders.length === 1 ? 'organisation' : 'organisations'}
            {' · '}
            {filteredItems.length} of {items.length} opportunities
          </div>
          {filteredItems.length ? (
            <section className="certification-grid" aria-label="Certification organisations">
              {groupedProviders.map(([provider, providerCertifications]) => (
                <CertificationFolder
                  certifications={providerCertifications}
                  key={provider}
                  provider={provider}
                  providerDetails={certificationProviders[provider]}
                />
              ))}
            </section>
          ) : (
            <section className="roadmap-section empty-state">
              <h2 className="section-title">No opportunities found</h2>
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
