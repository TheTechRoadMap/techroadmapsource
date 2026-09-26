import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRoadmapById } from '../data/roadmapsData.js';
import { usePageMeta } from '../utils/pageMeta.js';
import { Icon, ResourceIcon } from '../components/ui/Icon.jsx';

export default function RoadmapDetailView() {
  const { id } = useParams();
  const roadmap = getRoadmapById(id);

  usePageMeta(
    roadmap ? `${roadmap.title} Roadmap - TechRoadMap` : 'Roadmap Not Found',
    roadmap?.blurb ?? 'Follow step-by-step guidance for tech careers.',
  );

  // Local storage key - starts clean at 0% completed for all roadmaps
  const storageKey = `roadmap_user_progress_clean_v3_${roadmap?.id || 'default'}`;

  const [completedSteps, setCompletedSteps] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeStepNumber, setActiveStepNumber] = useState(1);
  const [openResources, setOpenResources] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completedSteps));
    } catch {
      // ignore storage errors
    }
  }, [completedSteps, storageKey]);

  if (!roadmap) {
    return (
      <div className="roadmap-empty-state">
        <h2>Roadmap Not Found</h2>
        <p>The requested roadmap could not be found.</p>
        <Link className="btn-primary" to="/roadmaps">
          Back to All Roadmaps
        </Link>
      </div>
    );
  }

  const activeStep = roadmap.steps.find((s) => s.number === activeStepNumber) || roadmap.steps[0];
  const completionPercentage = Math.round((completedSteps.length / roadmap.steps.length) * 100);

  const toggleStepCompleted = (stepNum, e) => {
    if (e) e.stopPropagation();
    setCompletedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((n) => n !== stepNum) : [...prev, stepNum]
    );
  };

  const toggleResources = (stepNum, e) => {
    if (e) e.stopPropagation();
    setOpenResources((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  return (
    <div className="roadmap-detail-page">
      <nav className="roadmap-detail__nav">
        <Link className="back-link" to="/roadmaps">
          <Icon name="back" size={17} /> All Roadmaps
        </Link>
      </nav>

      {/* Header Banner */}
      <header className="roadmap-detail__header-banner">
        <div className="roadmap-detail__header-left">
          <span className="roadmap-tag roadmap-tag--category">
            {roadmap.categoryLabel}
          </span>
          <h1 className="roadmap-detail__title">{roadmap.title} Roadmap</h1>
          <p className="roadmap-detail__subtitle">
            {roadmap.stepCount} steps to job-ready
          </p>
        </div>

        <div className="roadmap-detail__progress-box">
          <div className="roadmap-progress-percentage">{completionPercentage}%</div>
          <div className="roadmap-progress-label">Complete</div>
          <div className="roadmap-progress-bar-container">
            <div
              className="roadmap-progress-bar-fill"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main 2-Column Grid */}
      <div className="roadmap-detail__layout">
        {/* Left Column: Interactive Step List */}
        <section className="roadmap-detail__steps-column">
          <div className="step-list">
            {roadmap.steps.map((step) => {
              const isDone = completedSteps.includes(step.number);
              const isActive = activeStepNumber === step.number;
              const isResourcesOpen = !!openResources[step.number];

              return (
                <article
                  key={step.number}
                  className={`step-card ${isDone ? 'is-done' : ''} ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStepNumber(step.number)}
                >
                  <div className="step-card__top">
                    <button
                      type="button"
                      className={`step-check-btn ${isDone ? 'is-checked' : ''}`}
                      onClick={(e) => toggleStepCompleted(step.number, e)}
                      aria-label={`Mark Step ${step.number} as ${isDone ? 'incomplete' : 'complete'}`}
                    >
                      {isDone ? (
                        <Icon name="check" size={20} strokeWidth={2.5} />
                      ) : (
                        <span className="step-circle" />
                      )}
                    </button>

                    <div className="step-card__header-info">
                      <div className="step-card__meta">
                        <span className="step-number-text">STEP {step.number}</span>
                        {isDone ? (
                          <span className="step-status-pill is-done">Done</span>
                        ) : null}
                      </div>

                      <h3 className={`step-card__title ${isDone ? 'is-struck' : ''}`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Dropdown Resources Underneath Step */}
                  <div className="step-card__body">
                    <p className="step-card__desc">{step.description}</p>

                    <div className="step-resources-section">
                      <button
                        type="button"
                        className="step-resources-toggle-btn"
                        onClick={(e) => toggleResources(step.number, e)}
                        aria-expanded={isResourcesOpen}
                      >
                        Resources for this step
                      </button>

                      {isResourcesOpen ? (
                        <div className="step-resources-list">
                          {step.resources.map((res, idx) => (
                            <a
                              key={idx}
                              className={`resource-item-pill resource-item-pill--${res.type}`}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="resource-type-badge"><ResourceIcon type={res.type} />{res.type === 'video' ? 'YouTube Video' : 'Book'}</span>
                              <div className="resource-details">
                                <strong className="resource-title">{res.title}</strong>
                                <span className="resource-meta">
                                  {res.author || res.channel} {res.duration ? `• ${res.duration}` : ''}
                                </span>
                                {res.description ? (
                                  <p className="resource-desc">{res.description}</p>
                                ) : null}
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Right Column: Sidebar */}
        <aside className="roadmap-detail__sidebar">
          {/* CURRENT STEP Card */}
          <div className="glass-card sidebar-card current-step-card">
            <span className="sidebar-eyebrow">CURRENT STEP</span>
            <h2 className="current-step-title">{activeStep.title}</h2>
            <div className="current-step-sub">Step {activeStep.number} of {roadmap.steps.length}</div>

            <button
              type="button"
              className={`btn-primary current-step-toggle-btn ${completedSteps.includes(activeStep.number) ? 'is-completed' : ''}`}
              onClick={() => toggleStepCompleted(activeStep.number)}
            >
              {completedSteps.includes(activeStep.number) ? (
                <><Icon name="check" size={16} /> Mark Incomplete</>
              ) : (
                <><Icon name="check" size={16} /> Mark Complete</>
              )}
            </button>
          </div>

          {/* RELATED Section: Certifications */}
          <div className="glass-card sidebar-card related-card">
            <span className="sidebar-eyebrow">RELATED</span>
            
            <div className="related-certifications-block">
              <h3 className="related-block-title">
                {roadmap.relatedCertifications.length} Certifications
              </h3>

              <div className="related-certs-list">
                {roadmap.relatedCertifications.map((cert) => (
                  <a
                    key={cert.id}
                    className="related-cert-item"
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="related-cert-info">
                      <span className="related-cert-provider">{cert.provider}</span>
                      <strong className="related-cert-name">{cert.name}</strong>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
