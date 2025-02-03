import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Student from './registration';
import BoysHostelDetails from './boyshostel';
import GirlsHostelDetails from './girlshostel';
import HostelRegistration from './outsiders';
import FeedbackForm from './feedback'; 
import  RegistrationTable from './registration-data';
import OutsidersRegistrationTable from './outsiders-data';
import  FeedbackTable from './feedback-data';
import './login.css';
import './dashboard.css';
import './registration.css';
import './outsiders.css';
import './feedback.css';
import './boyshostel.css';
import './girlshostel.css';

function App() {
  const [role, setRole] = useState("admin");

  function handleRoleChange(role) { 
    setRole(role);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login handleRoleChange={handleRoleChange} />} />
          <Route path="/dashboard" element={<Dashboard role={role} />} />
          <Route path="/registration" element={<Student />} />
          <Route path="/registration-data" element={<RegistrationTable />} /> {/* Correctly route to RegistrationTableWithSampleData */}

          <Route path="/about/Boys-Hostel" element={<BoysHostelDetails />} />
          <Route path="/about/Girls-Hostel" element={<GirlsHostelDetails />} />
          <Route path="/outsiders" element={<HostelRegistration />} />
          <Route path="/outsiders-data" element={<OutsidersRegistrationTable />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/feedback-data" element={< FeedbackTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
