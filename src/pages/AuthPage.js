import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === '/auth';

  const toggleForm = () => {
    navigate(isLogin ? '/signup' : '/auth');
  };

  return (
    <div className="auth-container">
      {isLogin ? <Login onToggle={toggleForm} /> : <SignUp onToggle={toggleForm} />}
    </div>
  );
};

export default AuthPage;
