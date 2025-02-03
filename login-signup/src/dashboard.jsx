import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './dashboard.css';
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Dashboard = (props) => {
  const [showAboutOptions, setShowAboutOptions] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  // Function to toggle the "About" menu
  const toggleAboutOptions = () => {
    setShowAboutOptions(!showAboutOptions);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Redirect to the login page
    navigate('/');
  };

  const barChartData = [
    { name: "Boys", value: 1250 },
    { name: "Girls", value: 750 },
  ];

  const pieChartData = [
    { name: "Total Students", users: 1000 },
    { name: "In Students", users: 600 },
    { name: "Leave Students", users: 10 },
    { name: "Not Punch Students", users: 390 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <h2>BIT HOSTEL</h2>
        </div>
        <ul className="menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          {(props.role === "admin") && (
              <li><Link to="/registration-data">Registration data</Link></li>)}
          <li onClick={toggleAboutOptions} style={{ cursor: 'pointer' }}>About</li>
          {showAboutOptions && (
            <ul className="submenu">
              <li><Link to="/about/Boys-Hostel">Boys-Hostel</Link></li>
              <li><Link to="/about/Girls-Hostel">Girls-Hostel</Link></li>
            </ul>
          )}
          {/* Update the Outsiders menu item to link to the HostelRegistration component */}
          <li><Link to="/outsiders">Outsiders</Link></li>
          {(props.role === "admin") && (
              <li><Link to="/outsiders-data">Outsiders data</Link></li>)}
          <li><Link to="/feedback">Feedback</Link></li> 
          {(props.role === "admin") && (
              <li><Link to="/feedback-data">Feedback data</Link></li>)}
          <li><button onClick={handleLogout}>Logout</button></li> {/* Add logout button */}
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>BIT HOSTEL DASHBOARD</h1>
        </div>
        <div className="stats-container">
          <div className="stat-card green">
            <h3>BOYS HOSTEL BLOCKS</h3>
            <p>6</p>
          </div>
          <div className="stat-card orange">
            <h3>BOYS HOSTEL ROOMS</h3>
            <p>1206</p>
          </div>
          <div className="stat-card red">
            <h3>GIRLS HOSTEL BLOCKS</h3>
            <p>7</p>
          </div>
          <div className="stat-card red">
            <h3>GIRLS HOSTEL ROOMS</h3>
            <p>639</p>
          </div>
        </div>
        {(props.role === "admin") && (
        <div className="chart-container">
          <h2 className="chart-title">Room Availability & Students Status</h2>
          <div className="charts">
            <div className="chart">
              <BarChart
                width={400}
                height={400}
                data={barChartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
            <div className="chart">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartData}
                  dataKey="users"
                  cx={200}
                  cy={200}
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Dashboard;
