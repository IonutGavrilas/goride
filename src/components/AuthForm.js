import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
    
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/signup';
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  
    if (!isLogin) {
      payload.name = e.target.name?.value;
    }
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data); // Handle response
      navigate('/');
    } catch (err) {
      console.error(err); // Handle error
    }
  };
  

  return (
    <div className="auth-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Introduceti numele" required />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Introduceti emailul" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Introduceti parola" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="toggle-button" onClick={toggleForm}>
        Alatura-te acum!
      </button>
    </div>
  );
};

export default AuthForm;