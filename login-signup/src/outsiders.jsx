import React, { useState } from 'react';
import './registration.css';

const Outsiders = ({ onOutsiderRegistered = () => {} }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        contactNumber: '',
        address: '',
        dob: '',
        guardianName: '',
        guardianContact: '',
        purposeOfStay: '',
        physicalLimitations: ''
    });

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Custom validation
        if (!/^\d+$/.test(formData.contactNumber)) {
            alert('Contact number must contain only digits.');
            return;
        }
        if (formData.age < 1 || formData.age > 120) {
            alert('Age must be between 1 and 120.');
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/outsider/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Outsider added successfully!');
                // Reset the form
                setFormData({
                    fullName: '',
                    age: '',
                    gender: '',
                    contactNumber: '',
                    address: '',
                    dob: '',
                    guardianName: '',
                    guardianContact: '',
                    purposeOfStay: '',
                    physicalLimitations: ''
                });
                onOutsiderRegistered(); // Call parent function to refresh data
            } else {
                const errorData = await response.json();
                console.error("Backend Error:", errorData);
                alert(`Failed to add outsider: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("Error occurred during the fetch:", error);
            alert('An error occurred while adding the outsider. Please check your network or try again later.');
        }
    };

    return (
        <div className="registration-container">
            {/* Registration Form */}
            <div className="registration-form">
                <h2>Outsiders Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="guardianName"
                        placeholder="Guardian Name"
                        value={formData.guardianName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="guardianContact"
                        placeholder="Guardian Contact"
                        value={formData.guardianContact}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="purposeOfStay"
                        placeholder="Purpose of Stay"
                        value={formData.purposeOfStay}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="physicalLimitations"
                        placeholder="Physical Limitations (if any)"
                        value={formData.physicalLimitations}
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Outsiders;
