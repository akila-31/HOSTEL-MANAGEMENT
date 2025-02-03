import React, { useState } from 'react';
import './feedback.css'; // Ensure the CSS file path is correct

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    registerNumber: '', // New field for register number
    category: '',
    heading: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/feedback/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Feedback submitted successfully!');
        setFormData({
          registerNumber: '',
          category: '',
          heading: '',
          summary: '',
        });
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('An error occurred while submitting the feedback.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h1 className="form-title">FEEDBACK</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Register Number Section */}
          <div className="form-section">
            <label className="form-label">
              Register Number:
              <input
                type="text"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleChange}
               
                required
                className="form-input"
              />
            </label>
          </div>

          {/* Category Section */}
          <div className="form-section">
            <label className="form-label">
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="Room Issue">Room Issue</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Food Services">Food Services</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          {/* Heading Section */}
          <div className="form-section">
            <label className="form-label">
              Heading:
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
           
                required
                className="form-input"
              />
            </label>
          </div>

          {/* Summary Section */}
          <div className="form-section">
            <label className="form-label">
              Summary:
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                
                required
                className="form-input"
              ></textarea>
            </label>
          </div>
        </div>

        <button type="submit" className="form-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
