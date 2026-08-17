import React, { useState } from 'react';
import { certificationCategories } from './certifications.js';
import { isSafeHttpsUrl } from './contentUtils.js';

function providerInitials(provider) {
  return provider
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

function optionLabel(count) {
  return `${count} ${count === 1 ? 'option' : 'options'}`;
}

export default function CertificationFolder({ certifications, provider, providerDetails }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const categories = [...new Set(certifications.map((item) => item.category))]
    .map((category) => certificationCategories[category])
    .filter(Boolean)
    .slice(0, 3);
  const websiteIsSafe = isSafeHttpsUrl(providerDetails?.website);
  const logoIsSafe = !logoFailed && isSafeHttpsUrl(providerDetails?.logoUrl);

  return (
    <details className="certification-folder glass-card" name="certification-organisations">
      <summary className="certification-folder__summary">
        <span className="certification-folder__identity">
          <span className={`provider-logo${logoIsSafe ? ' provider-logo--image' : ''}`} aria-hidden="true">
            {logoIsSafe ? (
              <img
                alt=""
                loading="lazy"
                onError={() => setLogoFailed(true)}
                src={providerDetails.logoUrl}
              />
            ) : providerInitials(provider)}
          </span>
          <span className="certification-folder__name">{provider}</span>
        </span>

        <span className="certification-folder__summary-meta">
          <span>{optionLabel(certifications.length)}</span>
          <span className="certification-folder__chevron" aria-hidden="true">⌄</span>
        </span>
      </summary>

      <div className="certification-folder__body">
        <div className="certification-folder__intro">
          <p>{providerDetails?.description ?? `Explore credentials and learning opportunities from ${provider}.`}</p>
          {categories.length ? (
            <div className="certification-folder__categories" aria-label="Available career categories">
              {categories.map((category) => <span key={category}>{category}</span>)}
            </div>
          ) : null}
        </div>

        <ul className="certification-folder__list">
          {certifications.map((certification) => (
            <li key={certification.id}>
              <a
                className="certification-folder__link"
                href={certification.officialUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>
                  <strong>{certification.name}</strong>
                  <small>
                    {certification.credentialType ?? 'Certification'}
                    {' · '}
                    {certification.difficulty}
                    {' · '}
                    {certification.costType}
                  </small>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>

        {websiteIsSafe ? (
          <a
            className="certification-folder__provider-link"
            href={providerDetails.website}
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit {provider} <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </details>
  );
}
