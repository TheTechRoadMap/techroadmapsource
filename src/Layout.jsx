import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/roadmaps', label: 'Roadmaps' },
  { to: '/careers', label: 'Careers' },
  { to: '/find-my-path', label: 'Find My Path' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/news', label: 'News' },
  { to: '/about', label: 'About' },
];

function navClassName({ isActive }) {
  return `nav-link${isActive ? ' is-active' : ''}`;
}

function getInitialTheme() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  }
  return 'dark';
}

export default function Layout() {
  const year = new Date().getFullYear();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore local storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-nav-shell">
        <div className="site-nav">
          <NavLink className="brand-mark" to="/">
            TechRoadMap
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

            <button
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              type="button"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
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
