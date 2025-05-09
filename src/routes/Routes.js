import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFound'; // Import the enhanced NotFound component
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Resume = lazy(() => import('../pages/Resume'));
const Contact = lazy(() => import('../pages/Contact'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
  );
}

export default AppRoutes;
