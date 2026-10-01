import React, { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';

const About = lazy(() => import('../pages/About.jsx'));
const CareerDetailView = lazy(() => import('../pages/CareerDetailView.jsx'));
const CareersPage = lazy(() => import('../pages/CareersPage.jsx'));
const CertificationsPage = lazy(() => import('../pages/CertificationsPage.jsx'));
const FindPathPage = lazy(() => import('../pages/FindPathPage.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const NewsPage = lazy(() => import('../pages/NewsPage.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));
const RoadmapDetailView = lazy(() => import('../pages/RoadmapDetailView.jsx'));
const RoadmapsPage = lazy(() => import('../pages/RoadmapsPage.jsx'));

function PageLoading() {
  return (
    <div aria-live="polite" className="page-loading" role="status">
      Loading page...
    </div>
  );
}

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
      <Suspense fallback={<PageLoading />}>
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
      </Suspense>
    </BrowserRouter>
  );
}
