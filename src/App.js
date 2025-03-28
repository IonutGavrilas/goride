import React, { Suspense } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

// Lazy-loading pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const Locations = React.lazy(() => import('./pages/Locations'));
const Rates = React.lazy(() => import('./pages/Rates'));

function App() {
  return (
    <Layout>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active' : '')}>
          Auth
        </NavLink>
        <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>
        SignUp
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
