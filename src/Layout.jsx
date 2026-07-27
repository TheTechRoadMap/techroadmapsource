import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/find-my-path', label: 'Find My Path' },
  { to: '/languages', label: 'Languages' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/news', label: 'News' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/about', label: 'About' },
];

function navClassName({ isActive }) {
  return `nav-link${isActive ? ' is-active' : ''}`;
}

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-nav-shell">
        <div className="site-nav">
          <NavLink aria-label="TechRoadMap home" className="brand-mark" to="/">
            <img
              alt=""
              className="brand-logo"
              height="545"
              src="/techroadmap-logo.png"
              width="675"
            />
          </NavLink>

          <nav className="nav-links" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                className={navClassName}
                end={item.end}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container page-stack" id="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {year} TechRoadMap. All rights reserved.</p>
      </footer>
    </div>
  );
}
