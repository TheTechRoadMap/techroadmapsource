import React from 'react';
import { aboutContent } from './siteContent.js';
import { usePageMeta } from './pageMeta.js';

function linkText(label) {
  const icons = {
    'Call': 'fas fa-phone',
    'LinkedIn': 'fab fa-linkedin',
    'GitHub': 'fab fa-github',
    'Email': 'fas fa-envelope'
  };
  return <i className={icons[label] || 'fas fa-link'} title={label}></i>;
  return label;
}



export default function About() {
  usePageMeta(
    'About Tech Roadmaps',
    'Learn about the Tech Roadmaps mission, the team behind the platform, and how to get in touch.',
  );

  return (
    <>
      <header className="header">
        <h1>About Tech Roadmaps</h1>
        <p>Learn more about the creators, mission, and contact channels behind the platform.</p>
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
                <i className={`fas ${member.icon} text-2xl`}></i>
              </div>
              <h3>{member.name}</h3>
              <span className={`role-tag role-tag--${member.accent}`}>{member.role}</span>
              <p>{member.description}</p>
              <div className="team-social">
                {member.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {linkText(link.label)}
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
          Questions, suggestions, and collaboration requests are welcome. The easiest route is email,
          with GitHub and LinkedIn available for project and professional updates.
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
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
