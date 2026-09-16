import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './About.jsx';
import CareerDetailView from './CareerDetailView.jsx';
import CareersPage from './CareersPage.jsx';
import CertificationsPage from './CertificationsPage.jsx';
import FindPathPage from './FindPathPage.jsx';
import Home from './Home.jsx';
import Layout from './Layout.jsx';
import NewsPage from './NewsPage.jsx';
import NotFound from './NotFound.jsx';
import RoadmapDetailView from './RoadmapDetailView.jsx';
import RoadmapsPage from './RoadmapsPage.jsx';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<RoadmapsPage />} path="roadmaps" />
          <Route element={<RoadmapDetailView />} path="roadmaps/:id" />
          <Route element={<CareersPage />} path="careers" />
          <Route element={<CareerDetailView />} path="careers/:id" />
          <Route element={<About />} path="about" />
          <Route element={<FindPathPage />} path="find-my-path" />
          <Route element={<CertificationsPage />} path="certifications" />
          <Route element={<NewsPage />} path="news" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
