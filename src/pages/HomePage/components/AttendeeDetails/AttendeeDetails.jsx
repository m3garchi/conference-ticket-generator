import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./AttendeeDetails.css";

const AttendeeDetails = () => {
  const [, setSearchParams] = useSearchParams();

  // State to manage form data
  const [formData, setFormData] = useState({
    profileImage: "",
    name: "",
    email: "", // Pre-filled email
    specialRequest: "",
    
  });

  // State to manage errors
  const [errors, setErrors] = useState({
    profileImage: "",
    name: "",
    email: "",
  });

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
        setErrors({ ...errors, profileImage: "" }); // Clear error
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.profileImage) {
      newErrors.profileImage = "Profile photo is required";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      // Proceed to the next step
      setSearchParams({ step: "3" }); // Adjust the step number as needed
    }
  };

  return (
    <div className="attendee-details">
      <div className="form-container">

        {/* Image Upload Section */}
        <div className="image-upload">
          <p className="upload-label">Upload Profile Photo</p>
          <div
            className="upload-area"
            onClick={() => document.getElementById("imageInput").click()}
          >
            <div className="upload-box">
              <img src="/download.svg" alt="UploadIcon" className="upload-icon" />
              <p className="upload-text">Drag & drop or click to upload</p>
            </div>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          {errors.profileImage && (
            <p className="error-message">{errors.profileImage}</p>
          )}
        </div>

        {/* Name Input */}
        <div className="form-container">
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="e.g Tom Cruise"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="form-container">
          <label htmlFor="email" className="form-label">
            Enter your email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="messi@example.com"
            style={{ color: "#ffffff" }}
          />
        
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Special Request Textarea */}
        <div className="form-container">
          <label htmlFor="specialRequest" className="form-label">
            Special request?
          </label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleInputChange}
            className="form-textarea"
            rows="6"
            placeholder="Add any special requests or notes..."
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button
          className="button-outline"
          onClick={() => {
            setSearchParams({ step: "1" });
          }}
        >
          Back
        </button>

        <button className="button-fill" onClick={handleSubmit}>
          Get My Free Ticket
        </button>
      </div>
    </div>
  );
};

export default AttendeeDetails;