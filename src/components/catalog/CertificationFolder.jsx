import React from 'react';
import { certificationCategories } from '../../data/certifications.js';
import { isSafeHttpsUrl } from '../../utils/contentUtils.js';
import { Icon } from '../ui/Icon.jsx';
import ProviderIcon from './ProviderIcon.jsx';

function optionLabel(count) {
  return `${count} ${count === 1 ? 'option' : 'options'}`;
}

export default function CertificationFolder({ certifications, provider, providerDetails }) {
  const categories = [...new Set(certifications.map((item) => item.category))]
    .map((category) => certificationCategories[category])
    .filter(Boolean)
    .slice(0, 3);
  const websiteIsSafe = isSafeHttpsUrl(providerDetails?.website);

  return (
    <details className="certification-folder glass-card" name="certification-organisations">
      <summary className="certification-folder__summary">
        <span className="certification-folder__identity">
          <span className="provider-logo" aria-hidden="true">
            <ProviderIcon
              iconKey={providerDetails?.icon}
              logoUrl={providerDetails?.logoUrl}
              provider={provider}
            />
          </span>
          <span className="certification-folder__name">{provider}</span>
        </span>

        <span className="certification-folder__summary-meta">
          <span>{optionLabel(certifications.length)}</span>
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
                <Icon name="external" size={16} />
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
            Visit {provider}
          </a>
        ) : null}
      </div>
    </details>
  );
}
