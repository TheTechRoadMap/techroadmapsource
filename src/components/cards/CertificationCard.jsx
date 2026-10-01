import React from 'react';
import { certificationProviders } from '../../data/certifications.js';
import { isSafeHttpsUrl } from '../../utils/contentUtils.js';
import ProviderIcon from '../catalog/ProviderIcon.jsx';

function shortDescription(description) {
  const text = String(description ?? '').trim();
  const firstSentence = text.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() ?? text;

  return firstSentence.length > 125
    ? `${firstSentence.slice(0, 122).trimEnd()}…`
    : firstSentence;
}

export default function CertificationCard({ certification }) {
  const hasOfficialUrl = isSafeHttpsUrl(certification.officialUrl);
  const providerDetails = certificationProviders[certification.provider];

  return (
    <article className="certification-card glass-card">
      <div className="certification-card__header">
        <div className="provider-logo" aria-hidden="true">
          <ProviderIcon
            iconKey={providerDetails?.icon}
            logoUrl={providerDetails?.logoUrl ?? certification.providerLogo}
            provider={certification.provider}
          />
        </div>
        <div>
          <span className="eyebrow">{certification.provider}</span>
          <h2>{certification.name}</h2>
        </div>
      </div>

      <p className="certification-card__description">
        {shortDescription(certification.description)}
      </p>

      {hasOfficialUrl ? (
        <a
          className="certification-card__link"
          href={certification.officialUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View certification details
        </a>
      ) : (
        <span className="certification-card__link is-disabled" aria-disabled="true">
          Certification link unavailable
        </span>
      )}
    </article>
  );
}
