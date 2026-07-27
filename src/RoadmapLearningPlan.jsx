import React from 'react';
import { getRoadmapLearningPlan } from './roadmapLearningPlans.js';

export default function RoadmapLearningPlan({ roadmap }) {
  const { phases, portfolioProjects } = getRoadmapLearningPlan(roadmap);

  if (!phases.length) {
    return null;
  }

  return (
    <>
      <section aria-labelledby="learning-plan-title" className="roadmap-section learning-plan">
        <div className="learning-plan__header">
          <div>
            <span className="eyebrow">Learn in a practical order</span>
            <h2 className="section-title" id="learning-plan-title">
              Four-phase learning plan
            </h2>
            <p className="section-copy">
              Move forward when you can complete the checkpoint—not only when you have
              watched the lessons.
            </p>
          </div>
          <dl className="learning-plan__stats" aria-label="Learning plan summary">
            <div>
              <dt>Phases</dt>
              <dd>{phases.length}</dd>
            </div>
            <div>
              <dt>Checkpoints</dt>
              <dd>{phases.length}</dd>
            </div>
            <div>
              <dt>Portfolio builds</dt>
              <dd>{portfolioProjects.length}</dd>
            </div>
          </dl>
        </div>

        <ol className="phase-timeline">
          {phases.map((phase) => (
            <li className="phase-card" key={phase.number}>
              <div aria-hidden="true" className="phase-card__marker">
                {phase.number}
              </div>
              <article>
                <header className="phase-card__header">
                  <div>
                    <span className="eyebrow">Phase {phase.number}</span>
                    <h3>{phase.title}</h3>
                  </div>
                  <span className="phase-duration">{phase.duration}</span>
                </header>
                <p>{phase.summary}</p>
                <h4>Ready-to-progress checklist</h4>
                <ul className="milestone-list">
                  {phase.milestones.map((milestone) => (
                    <li key={milestone}>{milestone}</li>
                  ))}
                </ul>
                <aside className="step-project">
                  <span className="eyebrow">Phase checkpoint project</span>
                  <strong>{phase.project[0]}</strong>
                  <p>{phase.project[1]}</p>
                </aside>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="portfolio-projects-title" className="roadmap-section portfolio-showcase">
        <div className="portfolio-showcase__header">
          <div>
            <span className="eyebrow">Show what you can do</span>
            <h2 className="section-title" id="portfolio-projects-title">
              Portfolio-ready projects
            </h2>
            <p className="section-copy">
              Treat each build as evidence: publish the result, document your decisions,
              and show how you tested the work.
            </p>
          </div>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <article className="portfolio-project-card" key={project.title}>
              <div className="portfolio-project-card__top">
                <span className="portfolio-project-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="role-tag">{project.level}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>What to publish</h4>
              <ul>
                {project.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="portfolio-tip">
          <span aria-hidden="true" className="portfolio-tip__mark">
            ✓
          </span>
          <div>
            <strong>Portfolio quality check</strong>
            <p>
              Include a clear problem statement, screenshots or a demo, setup instructions,
              decisions and trade-offs, test evidence, and what you would improve next.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
