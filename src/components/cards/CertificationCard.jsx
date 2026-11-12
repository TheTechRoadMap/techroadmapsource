import React from 'react';
import { Link } from 'react-router-dom';
import { certificationProviders } from '../../data/certifications.js';
import ProviderIcon from '../catalog/ProviderIcon.jsx';

function shortDescription(description) {
  const text = String(description ?? '').trim();
  const firstSentence = text.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() ?? text;

  return firstSentence.length > 125
    ? `${firstSentence.slice(0, 122).trimEnd()}…`
    : firstSentence;
}

export default function CertificationCard({ certification }) {
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

      <Link
        className="certification-card__link"
        state={{ from: '/certifications' }}
        to={`/certifications/${encodeURIComponent(certification.id)}`}
      >
        View certification details
      </Link>
    </article>
  );
}
