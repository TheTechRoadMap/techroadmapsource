import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from './pageMeta.js';

export default function NotFound() {
  usePageMeta(
    'Page Not Found - Tech Roadmaps',
    'The requested page does not exist in the Tech Roadmaps SPA.',
  );

  return (
    <section className="roadmap-section empty-state">
      <h1 className="section-title">Page Not Found</h1>
      <p>The page you requested is not part of the current SPA route map.</p>
      <Link className="back-link" to="/">
        Return Home
      </Link>
    </section>
  );
}
