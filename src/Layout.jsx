import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/languages', label: 'Languages' },
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
          <NavLink className="brand-mark" to="/">
            TechRoadMaps
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
        <p>&copy; {year} Tech Roadmaps. All rights reserved.</p>
      </footer>
    </div>
  );
}
