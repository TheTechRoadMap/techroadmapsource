import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { languageCategories } from './languages.js';
import { roadmapCategories } from './roadmaps.js';
import { getDetailItem } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';

function renderSectionEntry(entry) {
  if (entry.href) {
    return (
      <a href={entry.href} rel="noreferrer" target="_blank">
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

      <div className="back-link-container">
        <Link className="back-link" to={parentPath}>
          {parentLabel}
        </Link>
      </div>
    </>
  );
}
