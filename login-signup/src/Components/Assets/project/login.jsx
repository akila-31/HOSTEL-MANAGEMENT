import React from 'react';
import './login.css'; // Ensure this path is correct and matches the case
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add any login validation logic here if needed

    // Navigate to the dashboard page after clicking Sign In
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Type your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Type your password" required />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="or-divider">or</div>
        <button type="button" className="login-button google-login-button">
          <FaGoogle /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
