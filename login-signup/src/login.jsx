import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls

const Login = (props) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send the login request to the backend
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
        role
      });

      if (response.data.message === 'User found') {
        // If user is found, navigate to the dashboard
        navigate('/dashboard');
      } else {
        // Handle invalid credentials or user not found
        setErrorMessage('Invalid email, password, or role.');
      }
    } catch (error) {
      // Handle network errors or other issues
      setErrorMessage('Error connecting to the server.');
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    props.handleRoleChange(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select id="role" value={role} onChange={handleRoleChange} className="dropdown">
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email id</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from 'react';
// import './login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = (props) => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState('admin');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Logic to validate login credentials can be added here

//     // Always navigate to the dashboard page after sign-in
//     navigate('/dashboard');
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//     props.handleRoleChange(e.target.value);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label htmlFor="role">Role</label>
//             <select id="role" value={role} onChange={handleRoleChange} className="dropdown">
//               <option value="student">Student</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email id</label>
//             <input type="text" id="email" />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button type="submit" className="login-button">Sign In</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login; 
