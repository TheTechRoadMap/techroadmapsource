import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './About.jsx';
import DetailView from './DetailView.jsx';
import Home from './Home.jsx';
import LanguagesPage from './LanguagesPage.jsx';
import Layout from './Layout.jsx';
import NotFound from './NotFound.jsx';

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
          <Route element={<About />} path="about" />
          <Route element={<LanguagesPage />} path="languages" />
          <Route element={<DetailView type="roadmap" />} path="roadmaps/:id" />
          <Route element={<DetailView type="language" />} path="languages/:id" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
