import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  getCertificationsByCareerId,
  getCertificationsByRoadmapId,
} from '../../utils/certificationUtils.js';

export default function CertificationRecommendations({ careerId, roadmapId }) {
  const location = useLocation();
  const recommendations = careerId
    ? getCertificationsByCareerId(careerId)
    : getCertificationsByRoadmapId(roadmapId);
  const catalogQuery = careerId
    ? `career=${encodeURIComponent(careerId)}`
    : `roadmap=${encodeURIComponent(roadmapId)}`;

  return (
    <section className="career-section-block certification-recommendations">
      <div className="section-header-block">
        <h2>Recommended Certifications &amp; Programmes</h2>
        <p>Relevant credentials and learning opportunities from the TechRoadMap catalog.</p>
      </div>

      {recommendations.length ? (
        <div className="certification-recommendations-grid">
          {recommendations.map((certification) => (
            <article className="glass-card cert-recommendation-card" key={certification.id}>
              <div className="cert-rec-header">
                <span className="cert-provider-name">{certification.provider}</span>
              </div>
              <h3 className="cert-rec-title">
                <Link
                  state={{ from: `${location.pathname}${location.search}` }}
                  to={`/certifications/${encodeURIComponent(certification.id)}`}
                >
                  {certification.name}
                </Link>
              </h3>
              <p className="cert-rec-desc">{certification.description}</p>
              <div className="cert-rec-tags">
                <span className="cert-tag">{certification.credentialType}</span>
                <span className="cert-tag cert-tag--diff">{certification.difficulty}</span>
                <span className="cert-tag">{certification.costType}</span>
              </div>
              {certification.skills?.length ? (
                <p className="cert-rec-skills">
                  <strong>Skills:</strong> {certification.skills.join(', ')}
                </p>
              ) : null}
              <Link
                className="button-link button-link--secondary cert-view-btn"
                state={{ from: `${location.pathname}${location.search}` }}
                to={`/certifications/${encodeURIComponent(certification.id)}`}
              >
                View certification details
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="certification-recommendations__empty">
          No catalog recommendations are currently mapped to this path.
        </p>
      )}

      <Link className="button-link button-link--secondary" to={`/certifications?${catalogQuery}`}>
        View all relevant opportunities
      </Link>
    </section>
  );
}
