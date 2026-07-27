import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { languageCategories } from './languages.js';
import { roadmapCategories } from './roadmaps.js';
import { isSafeHttpsUrl } from './contentUtils.js';
import { getDetailItem, languageContent, roadmapContent } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';
import {
  getRoadmapConnections,
  getTechnologyConnections,
} from './technologyConnections.js';

function renderSectionEntry(entry) {
  if (isSafeHttpsUrl(entry.href)) {
    return (
      <a href={entry.href} rel="noopener noreferrer" target="_blank">
        {entry.text}
      </a>
    );
  }

  return entry.text;
}

export default function DetailView({ type }) {
  const { id } = useParams();
  const item = getDetailItem(type, id);
  const parentPath = type === 'roadmap' ? '/' : '/languages';
  const parentLabel = type === 'roadmap' ? 'Back to Roadmaps' : 'Back to Languages';
  const categoryLabelMap = type === 'roadmap' ? roadmapCategories : languageCategories;
  const connectedItems =
    type === 'roadmap'
      ? getTechnologyConnections(id, languageContent)
      : getRoadmapConnections(id, roadmapContent);

  usePageMeta(
    item ? `${item.title} - Tech Roadmaps` : 'Content Not Found - Tech Roadmaps',
    item?.description ??
      'The requested roadmap or technology entry could not be found in the current SPA.',
  );

  if (!item) {
    return (
      <section className="roadmap-section empty-state">
        <h1 className="section-title">Content Not Found</h1>
        <p>This route does not match any roadmap or technology currently loaded into the SPA.</p>
        <Link className="back-link" to={parentPath}>
          {parentLabel}
        </Link>
      </section>
    );
  }

  return (
    <>
      <header className="roadmap-header">
        <h1>{item.title}</h1>
        <p className="detail-summary">{item.description}</p>
        <span className="role-tag">{categoryLabelMap[item.category] ?? item.category}</span>
      </header>

      <section className="roadmap-section">
        <h2 className="section-title">Current Signals</h2>
        <ul className="content-list">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      {connectedItems.length ? (
        <section className="roadmap-section">
          <h2 className="section-title">
            {type === 'roadmap' ? 'Connected Technologies' : 'Career Paths Using This Technology'}
          </h2>
          <p className="section-copy connection-intro">
            {type === 'roadmap'
              ? 'Follow these connections to understand which technologies support this career and why they matter.'
              : 'These roadmaps use this technology as part of a broader career skill set.'}
          </p>
          <div className="technology-connection-grid">
            {connectedItems.map((connection) => {
              const target = type === 'roadmap' ? connection.technology : connection.roadmap;
              const targetPath = type === 'roadmap' ? '/languages' : '/roadmaps';
              return (
                <Link className="technology-connection" key={`${target.id}-${connection.connection?.stage ?? connection.stage}`} to={`${targetPath}/${target.id}`}>
                  <span className="eyebrow">{connection.connection?.stage ?? connection.stage}</span>
                  <strong>{target.title}</strong>
                  <span>{connection.connection?.reason ?? connection.reason}</span>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {item.sections.map((section) => (
        <section className="roadmap-section" key={section.title}>
          <h2 className="section-title">{section.title}</h2>

          {section.paragraphs.map((paragraph) => (
            <p className="section-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}

          {section.items.length ? (
            <ul className="content-list">
              {section.items.map((entry, index) => (
                <li key={`${section.title}-${index}`}>{renderSectionEntry(entry)}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {type === 'roadmap' ? (
        <section className="roadmap-section certification-callout">
          <div>
            <span className="eyebrow">Build proof of your knowledge</span>
            <h2>Explore additional certifications</h2>
            <p className="section-copy">
              Compare recognised credentials by provider, difficulty, cost, and career category.
            </p>
          </div>
          <Link className="button-link" to="/certifications">
            Browse certifications
          </Link>
        </section>
      ) : null}

      <div className="back-link-container">
        <Link className="back-link" to={parentPath}>
          {parentLabel}
        </Link>
      </div>
    </>
  );
}
