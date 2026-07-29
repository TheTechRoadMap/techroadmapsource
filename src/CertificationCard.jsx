import React from 'react';
import { isSafeHttpsUrl } from './contentUtils.js';

function providerInitials(provider) {
  return provider
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

function shortDescription(description) {
  const text = String(description ?? '').trim();
  const firstSentence = text.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() ?? text;

  return firstSentence.length > 125
    ? `${firstSentence.slice(0, 122).trimEnd()}…`
    : firstSentence;
}

export default function CertificationCard({ certification }) {
  const hasOfficialUrl = isSafeHttpsUrl(certification.officialUrl);

  return (
    <article className="certification-card glass-card">
      <div className="certification-card__header">
        <div className="provider-logo" aria-hidden="true">
          {providerInitials(certification.provider)}
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
          View certification details <span aria-hidden="true">→</span>
        </a>
      ) : (
        <span className="certification-card__link is-disabled" aria-disabled="true">
          Certification link unavailable
        </span>
      )}
    </article>
  );
}
