import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear any user data or session (if applicable)
    // For example, clearing localStorage or sessionStorage:
    localStorage.removeItem('user');  // Example: remove user data if saved in localStorage

    // Navigate to the login page after logout
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
