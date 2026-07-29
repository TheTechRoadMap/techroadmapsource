import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { calculatePathRecommendations, findPathQuestions } from './findPathData.js';
import { languageContent, roadmapContent } from './siteContent.js';
import { getTechnologyConnections } from './technologyConnections.js';
import { usePageMeta } from './pageMeta.js';

export default function FindPathPage() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const question = findPathQuestions[step];
  const selectedAnswer = question ? answers[question.id] : '';
  const recommendations = useMemo(
    () => (showResults ? calculatePathRecommendations(answers, roadmapContent) : []),
    [answers, showResults],
  );

  usePageMeta(
    'Find My Tech Path - TechRoadMap',
    'Answer a short career-interest quiz and receive three suggested technology career roadmaps with connected technologies.',
  );

  function chooseAnswer(optionId) {
    setAnswers((current) => ({ ...current, [question.id]: optionId }));
  }

  function continueQuiz() {
    if (!selectedAnswer) {
      return;
    }
    if (step === findPathQuestions.length - 1) {
      setShowResults(true);
      window.localStorage.setItem('tech-roadmaps:find-my-path', JSON.stringify(answers));
    } else {
      setStep((current) => current + 1);
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setShowResults(false);
    window.localStorage.removeItem('tech-roadmaps:find-my-path');
  }

  return (
    <>
      <header className="header">
        <span className="eyebrow">Two-minute career matcher</span>
        <h1>Find My Path</h1>
        <p>Choose what sounds most like you. We will suggest three starting points—not lock you into a permanent decision.</p>
      </header>

      {!showResults ? (
        <section className="quiz-card glass-card">
          <div className="quiz-progress">
            <span>
              Question {step + 1} of {findPathQuestions.length}
            </span>
            <div className="progress-track" aria-hidden="true">
              <span style={{ width: `${((step + 1) / findPathQuestions.length) * 100}%` }} />
            </div>
          </div>

          <fieldset className="quiz-fieldset">
            <legend>{question.prompt}</legend>
            <div className="quiz-options">
              {question.options.map((option) => (
                <button
                  aria-pressed={selectedAnswer === option.id}
                  className={`quiz-option${selectedAnswer === option.id ? ' is-selected' : ''}`}
                  key={option.id}
                  onClick={() => chooseAnswer(option.id)}
                  type="button"
                >
                  <span className="quiz-option__marker" aria-hidden="true" />
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="quiz-actions">
            <button
              className="button-link button-link--secondary button-reset"
              disabled={step === 0}
              onClick={() => setStep((current) => current - 1)}
              type="button"
            >
              Back
            </button>
            <button
              className="button-link button-reset"
              disabled={!selectedAnswer}
              onClick={continueQuiz}
              type="button"
            >
              {step === findPathQuestions.length - 1 ? 'See my matches' : 'Continue'}
            </button>
          </div>
        </section>
      ) : (
        <section aria-live="polite">
          <div className="match-intro glass-card">
            <span className="eyebrow">Your starting points</span>
            <h2>Three paths worth exploring</h2>
            <p>These matches are based on your interests and preferred work. Open each roadmap before choosing where to begin.</p>
          </div>
          <div className="match-grid">
            {recommendations.map((roadmap, index) => {
              const technologies = getTechnologyConnections(roadmap.id, languageContent).slice(0, 4);
              return (
                <article className="match-card glass-card" key={roadmap.id}>
                  <span className="match-rank">Match {index + 1}</span>
                  <h2>{roadmap.title}</h2>
                  <p>{roadmap.blurb}</p>
                  <div>
                    <h3 className="mini-heading">Connected technologies</h3>
                    <div className="connection-links">
                      {technologies.map(({ technology }) => (
                        <Link key={technology.id} to={`/languages/${technology.id}`}>
                          {technology.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link className="text-link" to={`/roadmaps/${roadmap.id}`}>
                    View roadmap
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="centered-action">
            <button className="button-link button-link--secondary button-reset" onClick={restart} type="button">
              Retake the quiz
            </button>
          </div>
        </section>
      )}
    </>
  );
}
