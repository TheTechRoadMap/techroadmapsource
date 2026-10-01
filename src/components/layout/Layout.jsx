import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Icon } from '../ui/Icon.jsx';

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
  const location = useLocation();
  const [theme, setTheme] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore local storage errors
    }
  }, [theme]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-nav-shell">
        <div className={`site-nav${isMenuOpen ? ' site-nav--menu-open' : ''}`}>
          <NavLink className="brand-mark" to="/">
            TechRoadMap
          </NavLink>

          <div className="site-nav__controls">
            <button
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              type="button"
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              aria-controls="primary-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="menu-toggle"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className={`nav-panel${isMenuOpen ? ' is-open' : ''}`}>
            <nav aria-label="Primary" className="nav-links" id="primary-navigation">
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
