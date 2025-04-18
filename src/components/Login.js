import React from 'react';
import './Login.css';

const Login = ({ onToggle }) => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      console.log(result);
      alert("Login successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-container">
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" placeholder="Parola" required />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={onToggle} className="toggle-button">
        Nu ai cont?
      </button>
    </form>
  );
};

export default Login;
