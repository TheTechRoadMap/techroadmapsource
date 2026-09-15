import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCareerById } from './careersData.js';
import { certificationProviders, certifications, certificationVideos } from './certifications.js';
import { getYouTubeVideoId, isSafeHttpsUrl, isSafeYouTubeUrl } from './contentUtils.js';
import { usePageMeta } from './pageMeta.js';

function providerInitials(provider) {
  return provider
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export default function CareerDetailView() {
  const { id } = useParams();
  const career = getCareerById(id);

  usePageMeta(
    career ? `${career.title} - Career Explorer` : 'Career Not Found - TechRoadMap',
    career ? career.blurb : 'The requested career detail page could not be found.',
  );

  if (!career) {
    return (
      <section className="info-section empty-state">
        <h1 className="section-title">Career Not Found</h1>
        <p>The requested career path could not be found.</p>
        <Link className="button-link" to="/careers">
          Back to Career Explorer
        </Link>
      </section>
    );
  }

  // Filter certifications matching category or career path
  const recommendedCerts = certifications
    .filter((cert) => {
      const matchesCategory =
        cert.category === career.category ||
        (career.category === 'software' && cert.category === 'engineering');
      const matchesPath = cert.recommendedCareerPaths?.includes(career.id) || cert.recommendedCareerPaths?.includes(career.category);
      return matchesCategory || matchesPath;
    })
    .slice(0, 6);

  // Fallback to general certifications if fewer than 3
  const displayCerts = recommendedCerts.length >= 3 ? recommendedCerts : certifications.slice(0, 6);

  // Filter videos connected to display certs or general videos
  const certIdSet = new Set(displayCerts.map((c) => c.id));
  const recommendedVideosList = certificationVideos
    .filter((v) => certIdSet.has(v.certificationId) && isSafeYouTubeUrl(v.youtubeUrl))
    .slice(0, 4);

  return (
    <div className="career-detail-page">
      {/* Top Header Section */}
      <header className="career-detail-header">
        <Link className="back-to-careers" to="/careers">
          ← All Careers
        </Link>

        <div className="career-detail-header__top-row">
          <div className="career-detail-header__titles">
            <span className="career-category-badge">{career.categoryLabel}</span>
            <h1 className="career-detail-title">{career.title}</h1>
            <p className="career-detail-summary">{career.blurb}</p>
            <div className="career-detail-meta-pills">
              <span className="career-meta-pill">📈 Demand: {career.demand}</span>
              <span className="career-meta-pill">📍 {career.workMode}</span>
            </div>
          </div>

          <div className="career-detail-header__actions">
            <Link className="hero-btn hero-btn--primary" to={`/roadmaps/${career.roadmapId}`}>
              Start This Career Roadmap
            </Link>
          </div>
        </div>
      </header>

      {/* Top 3 Info Cards Grid */}
      <section className="career-info-grid">
        {/* Card 1: Salary */}
        <div className="glass-card career-info-card">
          <div className="career-info-card__header">
            <span className="info-card-icon">$</span>
            <h3>Salary (ZAR/year)</h3>
          </div>
          <div className="salary-tiers">
            <p><strong>Entry:</strong> {career.salary.entry}</p>
            <p><strong>Mid:</strong> {career.salary.mid}</p>
            <p><strong>Senior:</strong> {career.salary.senior}</p>
          </div>
        </div>

        {/* Card 2: Work Environments */}
        <div className="glass-card career-info-card">
          <div className="career-info-card__header">
            <span className="info-card-icon">💼</span>
            <h3>Work Environments</h3>
          </div>
          <div className="pill-cloud">
            {career.workEnvironments.map((env) => (
              <span className="env-pill" key={env}>
                {env}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3: Technologies */}
        <div className="glass-card career-info-card">
          <div className="career-info-card__header">
            <span className="info-card-icon">🥞</span>
            <h3>Technologies</h3>
          </div>
          <div className="pill-cloud">
            {career.technologies.map((tech) => (
              <span className="tech-pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Section: What They Do + Skills By Level */}
      <section className="career-middle-grid">
        {/* Left Column: What They Do */}
        <div className="glass-card career-detail-card">
          <h2>What they do</h2>
          <p className="what-they-do-desc">{career.whatTheyDo}</p>
          
          <h3>Typical responsibilities</h3>
          <ul className="responsibility-list">
            {career.responsibilities.map((resp) => (
              <li key={resp}>
                <span className="check-icon">✓</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Skills By Level */}
        <div className="glass-card career-detail-card">
          <h2>Skills by level</h2>
          
          <div className="skills-level-group">
            <h4 className="skill-level-heading skill-level-heading--beginner">BEGINNER</h4>
            <div className="pill-cloud">
              {career.skillsByLevel.beginner.map((skill) => (
                <span className="skill-pill skill-pill--beginner" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-level-group">
            <h4 className="skill-level-heading skill-level-heading--intermediate">INTERMEDIATE</h4>
            <div className="pill-cloud">
              {career.skillsByLevel.intermediate.map((skill) => (
                <span className="skill-pill skill-pill--intermediate" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-level-group">
            <h4 className="skill-level-heading skill-level-heading--advanced">ADVANCED</h4>
            <div className="pill-cloud">
              {career.skillsByLevel.advanced.map((skill) => (
                <span className="skill-pill skill-pill--advanced" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression Flow Card */}
      <section className="glass-card career-progression-card">
        <h2>Career progression</h2>
        <div className="progression-flow">
          {career.careerProgression.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="progression-pill">{step}</span>
              {idx < career.careerProgression.length - 1 ? (
                <span className="progression-arrow">➔</span>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Recommended Certifications Grid */}
      <section className="career-section-block">
        <div className="section-header-block">
          <h2>Recommended Certifications</h2>
          <p>Validate your skills with industry certifications</p>
        </div>

        <div className="certification-recommendations-grid">
          {displayCerts.map((cert) => {
            const providerInfo = certificationProviders[cert.provider];
            return (
              <div className="glass-card cert-recommendation-card" key={cert.id}>
                <div className="cert-rec-header">
                  <div className="provider-badge">
                    {providerInitials(cert.provider)}
                  </div>
                  <span className="cert-provider-name">{cert.provider}</span>
                </div>

                <h3 className="cert-rec-title">{cert.name}</h3>
                <p className="cert-rec-desc">{cert.description}</p>

                <div className="cert-rec-tags">
                  <span className="cert-tag">{cert.provider}</span>
                  <span className="cert-tag cert-tag--diff">{cert.difficulty}</span>
                  {cert.costType ? <span className="cert-tag">{cert.costType}</span> : null}
                </div>

                <div className="cert-rec-footer">
                  <span className="cert-duration">⏱️ {cert.duration}</span>
                  {isSafeHttpsUrl(cert.officialUrl) ? (
                    <a
                      className="hero-btn hero-btn--primary cert-view-btn"
                      href={cert.officialUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View Certification ↗
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommended Videos Grid */}
      {recommendedVideosList.length ? (
        <section className="career-section-block">
          <div className="section-header-block">
            <h2>Recommended Videos</h2>
            <p>Learn from curated YouTube resources</p>
          </div>

          <div className="video-recommendations-grid">
            {recommendedVideosList.map((video) => {
              const youtubeId = getYouTubeVideoId(video.youtubeUrl);
              const thumbnailUrl = youtubeId
                ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
                : null;

              return (
                <a
                  key={video.id}
                  className="glass-card video-recommendation-card"
                  href={video.youtubeUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="video-thumb-wrap">
                    {thumbnailUrl ? (
                      <img alt="" className="video-thumb-img" src={thumbnailUrl} />
                    ) : (
                      <div className="video-thumb-placeholder">▶</div>
                    )}
                    <span className="video-duration-badge">{video.duration}</span>
                  </div>
                  <div className="video-card-body">
                    <h4 className="video-title">{video.title}</h4>
                    <p className="video-channel">{video.channel}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}
