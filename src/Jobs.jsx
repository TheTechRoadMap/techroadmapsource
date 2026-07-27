import React from 'react';
import { isSafeHttpsUrl } from './contentUtils.js';
import { jobsContent } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';

export default function Jobs() {
  usePageMeta(
    'Tech Jobs in South Africa',
    'Find curated South African tech job board links for internships, junior roles, specialist paths, and work models.',
  );

  return (
    <>
      <header className="header">
        <h1>Tech Jobs in South Africa</h1>
        <p>Direct links to active job board searches across experience levels, specialties, and work models.</p>
      </header>

      <section className="info-section">
        <h2>Find Your Next Role</h2>
        <p>
          This page keeps the original job-board shortcuts, organized into a cleaner SPA view so you
          can jump straight to current listings without leaving the roadmap experience behind.
        </p>
      </section>

      {jobsContent.map((section) => (
        <section className="roadmap-section" key={section.title}>
          <h2 className="section-title">{section.title}</h2>
          <div className="jobs-grid">
            {section.columns.map((column) => (
              <article className="job-card" key={column.title}>
                <h3 className={`job-card__title job-card__title--${column.accent}`}>{column.title}</h3>
                <ul className="content-list">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      {isSafeHttpsUrl(link.href) ? (
                        <a href={link.href} rel="noopener noreferrer" target="_blank">
                          {link.label}
                        </a>
                      ) : (
                        link.label
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
