import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/pageMeta.js';
import TechNewsSlider from '../components/cards/TechNewsSlider.jsx';
import { CareerIcon as CareerTypeIcon, Icon } from '../components/ui/Icon.jsx';

function CareerIcon({ type }) {
  return <CareerTypeIcon type={type} />;
}

const popularCareers = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    categoryLabel: 'Software Development',
    blurb: 'Designs, builds, tests and maintains applications that power businesses and everyday life.',
    demand: 'Very High',
    workMode: 'Remote',
    iconType: 'code',
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    categoryLabel: 'Cybersecurity',
    blurb: 'Protects systems and data from threats by monitoring, analysing and responding to security...',
    demand: 'Very High',
    workMode: 'Remote',
    iconType: 'shield',
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    categoryLabel: 'Cloud Computing',
    blurb: 'Designs, deploys and manages cloud infrastructure and services at scale.',
    demand: 'Very High',
    workMode: 'Remote',
    iconType: 'cloud',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    categoryLabel: 'Data Science',
    blurb: 'Turns raw data into insights that drive better business decisions.',
    demand: 'High',
    workMode: 'Remote',
    iconType: 'chart',
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    categoryLabel: 'Data Science',
    blurb: 'Builds machine learning models to solve complex problems and predict outcomes.',
    demand: 'High',
    workMode: 'Remote',
    iconType: 'brain',
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    categoryLabel: 'Networking',
    blurb: 'Designs, configures and maintains the networks that connect systems and people.',
    demand: 'High',
    workMode: null,
    iconType: 'network',
  },
];

function HomeHero() {
  return (
    <section className="home-hero home-hero--two-col">
      <div className="home-hero__content">
        <h1 className="home-hero__title">
          Your Roadmap to a Career in Technology.
        </h1>
        
        <p className="home-hero__subtitle">
          Discover the right career, build real-world skills, earn certifications, create projects and prepare for your future — all in one place.
        </p>
        
        <div className="home-hero__actions">
          <Link className="hero-btn hero-btn--primary" to="/roadmaps">
            Start Your Roadmap
          </Link>
          <Link className="hero-btn hero-btn--secondary" to="/careers">
            Explore Careers
          </Link>
        </div>

        <div className="home-hero__stats">
          <div className="hero-stat-item">
            <span className="hero-stat-num">15+</span>
            <span className="hero-stat-label">Careers</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">30+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">20+</span>
            <span className="hero-stat-label">Certifications</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">20+</span>
            <span className="hero-stat-label">Videos</span>
          </div>
        </div>
      </div>

      <div className="home-hero__preview" aria-hidden="true">
        <div className="hero-progression-card">
          <div className="hero-step-row">
            <span className="hero-step-circle">I</span>
            <div className="hero-step-pill">Create a quiz</div>
          </div>
          <div className="hero-step-row">
            <span className="hero-step-circle">II</span>
            <div className="hero-step-pill">Career</div>
          </div>
          <div className="hero-step-row">
            <span className="hero-step-circle">III</span>
            <div className="hero-step-pill">Roadmap exploring</div>
          </div>
          <div className="hero-step-row">
            <span className="hero-step-circle">IV</span>
            <div className="hero-step-pill">Working on the certification</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    'TechRoadMap - Tech Careers, Roadmaps & Industry News',
    'Discover the right tech career, build real-world skills, earn certifications, and follow step-by-step career roadmaps.',
  );

  const [savedCareers, setSavedCareers] = useState(() => {
    try {
      const saved = localStorage.getItem('saved_careers');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleSave = (careerId, e) => {
    if (e) e.preventDefault();
    setSavedCareers((prev) => {
      const updated = prev.includes(careerId)
        ? prev.filter((id) => id !== careerId)
        : [...prev, careerId];
      try {
        localStorage.setItem('saved_careers', JSON.stringify(updated));
      } catch {
        // ignore storage error
      }
      return updated;
    });
  };

  return (
    <div className="home-page-stack">
      {/* Hero Section */}
      <HomeHero />

      {/* Career Explorer Section (Image 1) */}
      <section className="home-section home-careers-section">
        <div className="home-section-header">
          <div className="home-section-header__text">
            <h2 className="home-section-title">Career Explorer</h2>
            <p className="home-section-subtitle">Popular technology careers to discover</p>
          </div>
          <Link className="home-section-link" to="/careers">
            Explore All Careers
          </Link>
        </div>

        <div className="home-career-grid">
          {popularCareers.map((career) => {
            const isSaved = savedCareers.includes(career.id);
            return (
              <article className="glass-card home-career-card" key={career.id}>
                <div className="home-career-card__top">
                  <div className="home-career-card__icon-box">
                    <CareerIcon type={career.iconType} />
                  </div>
                  <button
                    type="button"
                    className={`home-career-card__save-btn ${isSaved ? 'is-saved' : ''}`}
                    onClick={(e) => toggleSave(career.id, e)}
                    aria-label={`Save ${career.title}`}
                  >
                    <Icon name="bookmark" size={14} fill={isSaved ? 'currentColor' : 'none'} />
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>
                </div>

                <h3 className="home-career-card__title">{career.title}</h3>
                <p className="home-career-card__blurb">{career.blurb}</p>

                <div className="home-career-card__tags">
                  <span className="career-tag career-tag--category">
                    {career.categoryLabel}
                  </span>
                  <span className="career-tag career-tag--demand">
                    <Icon name="chart" size={15} /> {career.demand}
                  </span>
                  {career.workMode ? (
                    <span className="career-tag career-tag--location">
                      <Icon name="globe" size={15} /> {career.workMode}
                    </span>
                  ) : null}
                </div>

                <div className="home-career-card__footer">
                  <Link className="home-career-card__link" to={`/careers/${career.id}`}>
                    Explore career
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Latest Tech News Section (Image 2) */}
      <section className="home-section home-news-section">
        <TechNewsSlider />
      </section>

      {/* Discover. Learn. Build. Become. CTA Banner (Image 2) */}
      <section className="home-cta-banner">
        <div className="home-cta-content">
          <h2 className="home-cta-title">Discover. Learn. Build. Become.</h2>
          <p className="home-cta-subtitle">
            Take the career quiz and get a personalised roadmap tailored to your interests and goals.
          </p>
          <Link className="hero-btn hero-btn--primary home-cta-btn" to="/find-my-path">
            Take the Career Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
