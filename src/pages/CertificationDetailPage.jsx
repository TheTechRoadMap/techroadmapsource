import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  certificationCategories,
  certificationProviders,
} from '../data/certifications.js';
import { roadmapsData } from '../data/roadmapsData.js';
import {
  getCertificationById,
  getRoadmapIdsForCareerPath,
} from '../utils/certificationUtils.js';
import { isSafeHttpsUrl } from '../utils/contentUtils.js';
import { usePageMeta } from '../utils/pageMeta.js';

export default function CertificationDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const certification = getCertificationById(id);
  const provider = certification ? certificationProviders[certification.provider] : null;
  const relatedRoadmapIds = certification
    ? new Set(certification.recommendedCareerPaths.flatMap(getRoadmapIdsForCareerPath))
    : new Set();
  const relatedRoadmaps = roadmapsData.filter((roadmap) => relatedRoadmapIds.has(roadmap.id));
  const backTo = location.state?.from ?? '/certifications';
  const isInternalBackLink = typeof backTo === 'string'
    && /^\/(careers|roadmaps|certifications)(\/|\?|$)/.test(backTo);

  usePageMeta(
    certification ? `${certification.name} - TechRoadMap` : 'Certification Not Found - TechRoadMap',
    certification?.description ?? 'The requested certification or programme could not be found.',
  );

  if (!certification) {
    return (
      <section className="roadmap-section empty-state">
        <h1 className="section-title">Certification not found</h1>
        <p>This certification or programme is not in the current TechRoadMap catalog.</p>
        <Link className="button-link" to="/certifications">Browse the catalog</Link>
      </section>
    );
  }

  return (
    <article className="certification-detail-page">
      <Link className="back-link" to={isInternalBackLink ? backTo : '/certifications'}>
        Back to {isInternalBackLink && backTo.startsWith('/careers/')
          ? 'career path'
          : isInternalBackLink && backTo.startsWith('/roadmaps/')
            ? 'roadmap'
            : 'certification catalog'}
      </Link>

      <header className="certification-detail-header glass-card">
        <span className="eyebrow">{certification.provider}</span>
        <h1>{certification.name}</h1>
        <p>{certification.description}</p>
        <div className="certification-detail-tags">
          <span className="cert-tag">{certification.credentialType}</span>
          <span className="cert-tag cert-tag--diff">{certification.difficulty}</span>
          <span className="cert-tag">{certification.costType}</span>
          {certification.category ? (
            <span className="cert-tag">{certificationCategories[certification.category]}</span>
          ) : null}
        </div>
        {isSafeHttpsUrl(certification.officialUrl) ? (
          <a
            className="hero-btn hero-btn--primary certification-detail-provider-link"
            href={certification.officialUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View official provider details
          </a>
        ) : null}
        <p className="certification-detail-provider-note">
          This provider link opens outside TechRoadMap. Check the provider page for current availability,
          prices, requirements, and regional access.
        </p>
      </header>

      <section className="certification-detail-grid">
        <div className="glass-card certification-detail-section">
          <h2>At a glance</h2>
          <dl className="certification-detail-facts">
            <div><dt>Provider</dt><dd>{certification.provider}</dd></div>
            <div><dt>Credential type</dt><dd>{certification.credentialType}</dd></div>
            <div><dt>Difficulty</dt><dd>{certification.difficulty}</dd></div>
            <div><dt>Cost</dt><dd>{certification.costType}</dd></div>
            {certification.duration ? <div><dt>Estimated duration</dt><dd>{certification.duration}</dd></div> : null}
            {certification.examCode ? <div><dt>Exam code</dt><dd>{certification.examCode}</dd></div> : null}
            {certification.examRequired !== undefined ? (
              <div><dt>Exam</dt><dd>{certification.examRequired ? 'Required' : 'Not required'}</dd></div>
            ) : null}
            {certification.validityPeriod ? <div><dt>Validity</dt><dd>{certification.validityPeriod}</dd></div> : null}
            {certification.prerequisites ? <div><dt>Prerequisites</dt><dd>{certification.prerequisites}</dd></div> : null}
          </dl>
          {certification.skills.length ? (
            <>
              <h3>Skills covered</h3>
              <ul className="certification-detail-skills">
                {certification.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </>
          ) : null}
        </div>

        <aside className="glass-card certification-detail-section">
          <h2>Related roadmaps</h2>
          {relatedRoadmaps.length ? (
            <ul className="certification-detail-roadmaps">
              {relatedRoadmaps.map((roadmap) => (
                <li key={roadmap.id}>
                  <Link to={`/roadmaps/${roadmap.id}`}>{roadmap.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>This catalog item has not been mapped to a roadmap yet.</p>
          )}
          {provider?.website && isSafeHttpsUrl(provider.website) ? (
            <a href={provider.website} rel="noopener noreferrer" target="_blank">
              More from {certification.provider}
            </a>
          ) : null}
        </aside>
      </section>

      {certification.verificationStatus !== 'verified' ? (
        <p className="certification-detail-review-note" role="note">
          Catalog details need review. Confirm the current credential status directly with the provider before enrolling.
        </p>
      ) : certification.lastVerified ? (
        <p className="certification-detail-review-note" role="note">
          Provider information last checked {certification.lastVerified}. Availability and terms may change.
        </p>
      ) : null}
    </article>
  );
}
