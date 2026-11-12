import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import CertificationFolder from '../components/catalog/CertificationFolder.jsx';
import {
  certificationCategories,
  certificationProviders,
  loadCertificationCatalog,
} from '../data/certifications.js';
import { careers } from '../data/careersData.js';
import { roadmapsData } from '../data/roadmapsData.js';
import { filterCertifications, uniqueValues } from '../utils/contentUtils.js';
import { getCertificationsByRoadmapId } from '../utils/certificationUtils.js';
import { usePageMeta } from '../utils/pageMeta.js';

const emptyFilters = {
  search: '',
  provider: 'all',
  category: 'all',
  difficulty: 'all',
  costType: 'all',
  credentialType: 'all',
  careerPath: 'all',
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
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const requestedCareer = searchParams.get('career');
  const requestedRoadmap = searchParams.get('roadmap');
  const initialCareerPath =
    requestedRoadmap ??
    careers.find((career) => career.id === requestedCareer)?.roadmapId ??
    'all';
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState(() => ({
    ...emptyFilters,
    careerPath: roadmapsData.some((roadmap) => roadmap.id === initialCareerPath)
      ? initialCareerPath
      : 'all',
  }));
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

  const filteredItems = useMemo(() => {
    const pathItems = filters.careerPath === 'all'
      ? items
      : getCertificationsByRoadmapId(filters.careerPath, items.length);
    return filterCertifications(pathItems, filters);
  }, [items, filters]);
  const providers = useMemo(() => uniqueValues(items, 'provider'), [items]);
  const costTypes = useMemo(() => uniqueValues(items, 'costType'), [items]);
  const credentialTypes = useMemo(() => uniqueValues(items, 'credentialType'), [items]);
  const activeFilterCount = Object.entries(filters).filter(([key, value]) => (
    value !== emptyFilters[key]
  )).length;
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
        <p>
          Compare industry certifications, professional certificates, courses, and learning programmes.
          Check each provider page for current fees, enrolment dates, and regional availability.
        </p>
      </header>

      {/* {status === 'ready' ? (
        <section className="catalog-statistics" aria-label="Catalog overview">
          <div><strong>{items.length}</strong><span>catalog opportunities</span></div>
          <div><strong>{providers.length}</strong><span>providers</span></div>
          <div><strong>{items.filter((item) => item.costType === 'Free').length}</strong><span>listed as free</span></div>
          <p>Free learning does not necessarily mean a proctored certification exam is free.</p>
        </section>
      ) : null} */}

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
          <span>Technology category</span>
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
        <label>
          <span>Credential type</span>
          <select
            onChange={(event) => updateFilter('credentialType', event.target.value)}
            value={filters.credentialType}
          >
            <option value="all">All credential types</option>
            {credentialTypes.map((credentialType) => (
              <option key={credentialType} value={credentialType}>{credentialType}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Career path</span>
          <select
            onChange={(event) => updateFilter('careerPath', event.target.value)}
            value={filters.careerPath}
          >
            <option value="all">All career paths</option>
            {roadmapsData.map((roadmap) => (
              <option key={roadmap.id} value={roadmap.id}>{roadmap.title}</option>
            ))}
          </select>
        </label>
      </section>

      {activeFilterCount ? (
        <button className="button-link button-link--secondary certification-filter-reset" onClick={() => setFilters(emptyFilters)} type="button">
          Clear {activeFilterCount === 1 ? 'filter' : 'filters'}
        </button>
      ) : null}

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
                  returnTo={`${location.pathname}${location.search}`}
                />
              ))}
            </section>
          ) : (
            <section className="roadmap-section empty-state">
              <h2 className="section-title">No opportunities found</h2>
              <p>Try a different search term or clear one of the filters.</p>
              <button className="button-link button-reset" onClick={() => setFilters(emptyFilters)} type="button">
                Clear all filters
              </button>
            </section>
          )}
        </>
      ) : null}
    </>
  );
}
