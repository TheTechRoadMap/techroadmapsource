import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import CertificationVideoCard from './CertificationVideoCard.jsx';
import { certificationCategories } from './certifications.js';
import { isSafeHttpsUrl, isSafeYouTubeUrl } from './contentUtils.js';

function providerInitials(provider) {
  return provider
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export default function CertificationCard({ certification, roadmaps, videos }) {
  const validVideos = useMemo(
    () => videos.filter((video) => video.certificationId === certification.id && isSafeYouTubeUrl(video.youtubeUrl)),
    [certification.id, videos],
  );
  const careerPaths = certification.recommendedCareerPaths
    .map((id) => roadmaps.find((roadmap) => roadmap.id === id))
    .filter(Boolean);
  const hasOfficialUrl = isSafeHttpsUrl(certification.officialUrl);

  return (
    <article className="certification-card glass-card">
      <div className="certification-card__header">
        <div className="provider-logo" aria-label={`${certification.provider} logo placeholder`} role="img">
          {providerInitials(certification.provider)}
        </div>
        <div>
          <span className="eyebrow">{certification.provider}</span>
          <h2>{certification.name}</h2>
        </div>
      </div>

      <p className="certification-card__description">{certification.description}</p>

      <div className="metadata-row" aria-label="Certification details">
        <span>{certificationCategories[certification.category] ?? certification.category}</span>
        <span>{certification.difficulty}</span>
        <span>{certification.duration}</span>
        <span>{certification.costType}</span>
      </div>

      <div>
        <h3 className="mini-heading">Skills gained</h3>
        <ul className="chip-list" aria-label={`Skills gained in ${certification.name}`}>
          {certification.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mini-heading">Recommended career paths</h3>
        <div className="connection-links">
          {careerPaths.map((roadmap) => (
            <Link key={roadmap.id} to={`/roadmaps/${roadmap.id}`}>
              {roadmap.title}
            </Link>
          ))}
        </div>
      </div>

      <details className="video-disclosure">
        <summary>Recommended videos ({validVideos.length})</summary>
        {validVideos.length ? (
          <div className="video-grid">
            {validVideos.map((video) => (
              <CertificationVideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="inline-state">No recommended videos are available for this certification yet.</p>
        )}
      </details>

      {hasOfficialUrl ? (
        <a className="button-link" href={certification.officialUrl} rel="noopener noreferrer" target="_blank">
          View certification
        </a>
      ) : (
        <span className="button-link is-disabled" aria-disabled="true">
          Certification link unavailable
        </span>
      )}
    </article>
  );
}
