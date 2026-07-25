import React, { useEffect, useState } from 'react';
import {
  FaCloud,
  FaCode,
  FaCubes,
  FaDatabase,
  FaInfoCircle,
  FaShieldAlt,
  FaTerminal,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function getCategoryIcon(category) {
  const icons = {
    coding: FaCode,
    cloud: FaCloud,
    security: FaShieldAlt,
    data: FaDatabase,
    language: FaTerminal,
    framework: FaCubes,
  };

  const Icon = icons[category] || FaInfoCircle;
  return (
    <span className="category-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

function storageKey(itemType, id) {
  return `tech-roadmaps:${itemType}:${id}`;
}

function readCompletedIds(items, itemType) {
  if (typeof window === 'undefined') {
    return new Set();
  }

  return new Set(
    items
      .filter((item) => window.localStorage.getItem(storageKey(itemType, item.id)) === 'true')
      .map((item) => item.id),
  );
}

function PageHeader({ title, subtitle }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default function CatalogPage({
  title,
  subtitle,
  infoTitle,
  infoText,
  guideText,
  items,
  itemType,
  itemPath,
  searchPlaceholder,
  categories,
  stats,
}) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [completedIds, setCompletedIds] = useState(() => readCompletedIds(items, itemType));

  useEffect(() => {
    setCompletedIds(readCompletedIds(items, itemType));
  }, [items, itemType]);

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const haystack = `${item.title} ${item.blurb} ${item.description}`.toLowerCase();
    const matchesSearch = haystack.includes(searchText.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completedCount = completedIds.size;

  function toggleCompletion(id) {
    const nextCompleted = new Set(completedIds);
    const key = storageKey(itemType, id);
    const isCompleted = nextCompleted.has(id);

    if (isCompleted) {
      nextCompleted.delete(id);
      window.localStorage.removeItem(key);
    } else {
      nextCompleted.add(id);
      window.localStorage.setItem(key, 'true');
    }

    setCompletedIds(nextCompleted);
  }

  return (
    <>
      <PageHeader subtitle={subtitle} title={title} />

      <section className="search-filter" aria-label={`${title} search and filters`}>
        <label className="sr-only" htmlFor={`${itemType}-search`}>
          Search {title}
        </label>
        <input
          id={`${itemType}-search`}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder={searchPlaceholder}
          type="text"
          value={searchText}
        />

        <label className="sr-only" htmlFor={`${itemType}-filter`}>
          Filter {title}
        </label>
        <select
          className="filterselect"
          id={`${itemType}-filter`}
          onChange={(event) => setSelectedCategory(event.target.value)}
          value={selectedCategory}
        >
          <option value="all">All Categories</option>
          {Object.entries(categories).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </section>

      <div className="completion-counter">
        Completed: {completedCount} / {items.length}
      </div>

      <section className="roadmap-grid" aria-label={title}>
        {filteredItems.map((item) => {
          const isCompleted = completedIds.has(item.id);
          const detailLabel = itemType === 'roadmap' ? 'View roadmap' : 'Learn more';

          return (
            <article
              className={`glass-card roadmap-card${isCompleted ? ' completed' : ''}`}
              key={item.id}
            >
              <div className="roadmap-card__top">
                <span className="role-tag">
                  {getCategoryIcon(item.category)}
                  {categories[item.category]}
                </span>
                <button
                  aria-label={isCompleted ? `Mark ${item.title} as incomplete` : `Mark ${item.title} as complete`}
                  aria-pressed={isCompleted}
                  className={`completion-toggle${isCompleted ? ' is-complete' : ''}`}
                  onClick={() => toggleCompletion(item.id)}
                  type="button"
                >
                  {isCompleted ? 'Completed' : 'Mark complete'}
                </button>
              </div>

              <div className="roadmap-card__content">
                <h2>{item.title}</h2>
                <p>{item.blurb}</p>
              </div>

              <div className="roadmap-card__actions">
                <Link className="text-link" to={`${itemPath}/${item.id}`}>
                  {detailLabel}
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      {filteredItems.length === 0 ? (
        <section className="info-section">
          <h2>No matches</h2>
          <p>Try a different search term or widen the category filter.</p>
        </section>
      ) : null}

      <section className="info-section">
        <h2>{infoTitle}</h2>
        <p>{infoText}</p>
      </section>

      <section className="guide-section">
        <h2>How to Use</h2>
        <p>{guideText}</p>
      </section>

      {stats ? (
        <section className="stats-section">
          <h2>Learning Snapshot</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className={`stat-number ${stat.tone}`}>{stat.value}</p>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
