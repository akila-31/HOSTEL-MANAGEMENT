import React, { useState } from 'react';
import './registration.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    room: '',
    sector: '',
    feePerMonth: '',
    foodChoice: '',
    stayFrom: '',
    duration: '',
    course: '',
    registrationNo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    contact: '',
    email: '',
    emergencyContact: '',
    guardianName: '',
    guardianRelation: '',
    guardianContact: '',
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    permanentPincode: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend using fetch
      const response = await fetch("http://localhost:8080/registration/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Check if the response is successful
      if (response.ok) {
        alert('Registration successful!');
        setFormData({
          room: '',
          sector: '',
          feePerMonth: '',
          foodChoice: '',
          stayFrom: '',
          duration: '',
          course: '',
          registrationNo: '',
          firstName: '',
          middleName: '',
          lastName: '',
          gender: '',
          contact: '',
          email: '',
          emergencyContact: '',
          guardianName: '',
          guardianRelation: '',
          guardianContact: '',
          permanentAddress: '',
          permanentCity: '',
          permanentState: '',
          permanentPincode: ''
        });
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="form-title">Hostel Registration Form</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Room Related Info */}
            <div className="form-section">
              <h2>Room Related Info</h2>
              <label>
                Room:
                <select name="room" value={formData.room} onChange={handleChange} required>
                  <option value="">Select room</option>
                  <option value="Four cot">Four cot</option>
                  <option value="Double cot">Double cot</option>
                  <option value="Single cot">Single cot</option>
                </select>
              </label>
              <label>
                Sector:
                <input type="text" name="sector" value={formData.sector} onChange={handleChange} />
              </label>
              <label>
                Fee Per Month:
                <input type="number" name="feePerMonth" value={formData.feePerMonth} onChange={handleChange} />
              </label>
              <label>
                Food Choice:
                <select name="foodChoice" value={formData.foodChoice} onChange={handleChange}>
                <option value="veg">Select food choice</option>
                  <option value="veg">Veg</option>
                  <option value="non-veg">Non-Veg</option>
                </select>
              </label>
              <label>
                Stay From:
                <input type="date" name="stayFrom" value={formData.stayFrom} onChange={handleChange} />
              </label>
              <label>
                Duration:
                <select name="duration" value={formData.duration} onChange={handleChange}>
                  <option value="">Select Duration</option>
                  <option value="1 month">1 Month</option>
                  <option value="3 months">3 Months</option>
                  <option value="6 months">6 Months</option>
                  <option value="12 months">12 Months</option>
                </select>
              </label>
            </div>

            {/* Personal Info */}
            <div className="form-section">
              <h2>Personal Info</h2>
              <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </label>
              <label>
                Middle Name:
                <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
              <label>
                Course:
                <select name="course" value={formData.course} onChange={handleChange}>
                <option value="">Select course</option>
                  <option value="B.tech">B.Tech</option>
                  <option value="B.E">B.E</option>
                  <option value="M.E">M.E</option>
                  <option value="M.tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                </select>
              </label>
              <label>
                Registration No:
                <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
              </label>
              <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Contact No:
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                Emergency Contact:
                <input type="tel" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
              </label>
            </div>

            {/* Guardian Info */}
            <div className="form-section">
              <h2>Guardian Info</h2>
              <label>
                Guardian Name:
                <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} />
              </label>
              <label>
                Guardian Relation:
                <input type="text" name="guardianRelation" value={formData.guardianRelation} onChange={handleChange} />
              </label>
              <label>
                Guardian Contact:
                <input type="tel" name="guardianContact" value={formData.guardianContact} onChange={handleChange} />
              </label>
            </div>

            {/* Permanent Address */}
            <div className="form-section">
              <h2>Permanent Address</h2>
              <label>
                Address:
                <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange}></textarea>
              </label>
              <label>
                City:
                <input type="text" name="permanentCity" value={formData.permanentCity} onChange={handleChange} />
              </label>
              <label>
                State:
                <input type="text" name="permanentState" value={formData.permanentState} onChange={handleChange} />
              </label>
              <label>
                Pincode:
                <input type="text" name="permanentPincode" value={formData.permanentPincode} onChange={handleChange} />
              </label>
            </div>
          </div>

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
