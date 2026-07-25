import React from 'react';
import {
  FaBullhorn,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaRocket,
  FaTiktok,
  FaUser,
  FaVial,
  FaLinkedin,
  FaArrowRight,
} from 'react-icons/fa';
import { aboutContent } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';

const teamIconMap = {
  FaBullhorn,
  FaCode,
  FaRocket,
  FaUser,
  FaVial,
};

function renderSocialIcon(label) {
  const normalized = label.toLowerCase();

  if (normalized.includes('tiktok')) {
    return <FaTiktok className="social-icon" aria-hidden="true" />;
  }

  if (normalized.includes('instagram')) {
    return <FaInstagram className="social-icon" aria-hidden="true" />;
  }

  if (normalized.includes('linkedin')) {
    return <FaLinkedin className="social-icon" aria-hidden="true" />;
  }

  if (normalized.includes('github')) {
    return <FaGithub className="social-icon" aria-hidden="true" />;
  }

  if (normalized.includes('email')) {
    return <FaEnvelope className="social-icon" aria-hidden="true" />;
  }

  if (normalized.includes('call') || normalized.includes('phone')) {
    return <FaPhoneAlt className="social-icon" aria-hidden="true" />;
  }

  return <FaArrowRight className="social-icon" aria-hidden="true" />;
}

export default function About() {
  usePageMeta(
    'About TechRoadMap',
    'Learn about the Tech Roadmaps mission, the team behind the platform, and how to get in touch.',
  );

  return (
    <>
      <header className="header">
        <h1>About TechRoadMap</h1>
        <p>Learn more about the mission behind this platform, the people shaping it, and the best ways to connect.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>{aboutContent.mission}</p>
      </section>

      <section className="team-card">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {aboutContent.team.map((member) => (
            <article className="team-member" key={member.name}>
              <div className={`member-badge member-badge--${member.accent}`}>
                <span className="member-avatar" aria-hidden="true">
                  {React.createElement(teamIconMap[member.avatar] || FaUser)}
                </span>
              </div>
              <div className="member-meta">
                <h3>{member.name}</h3>
                <span className={`role-tag role-tag--${member.accent}`}>{member.role}</span>
              </div>
              <p>{member.description}</p>
              <ul className="contact-list">
                <li>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${member.contactEmail}`}>{member.contactEmail}</a>
                </li>
              </ul>
              <div className="team-social">
                {member.links.map((link) => (
                  <a
                    aria-label={link.label}
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {renderSocialIcon(link.label)}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-card">
        <h2>Connect with Us</h2>
        <p>
          Questions, suggestions, and collaboration requests are welcome. Use the links below to reach the team, follow the brand, or explore the broader community.
        </p>

        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${aboutContent.contactEmail}`}>{aboutContent.contactEmail}</a>
          </li>
        </ul>

        <div className="social-links">
          {aboutContent.socialLinks.map((link) => (
            <a
              aria-label={link.label}
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {renderSocialIcon(link.label)}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
