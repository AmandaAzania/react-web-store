import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions';  // Import the registerUser action
import { useNavigate } from 'react-router-dom'; // For navigation
import { ERROR_MESSAGES } from './constants'; // Import error messages

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false); // Flag to show success message
  const [successMessage, setSuccessMessage] = useState(''); // For success message

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.firstName) {
      formErrors.firstName = ERROR_MESSAGES.firstName;
    }

    if (!formData.surname) {
      formErrors.surname = ERROR_MESSAGES.surname;
    }

    if (!formData.username) {
      formErrors.username = ERROR_MESSAGES.username;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = ERROR_MESSAGES.email;
    }

    if (!formData.password || !passwordRegex.test(formData.password)) {
      formErrors.password = ERROR_MESSAGES.password;
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dispatch the registration action
      dispatch(registerUser(formData));

      // Set registration success flag and success message
      setIsRegistered(true);
      setSuccessMessage("You have been registered. Please log in!");

      // Clear the form data after successful registration
      setFormData({
        firstName: '',
        surname: '',
        username: '',
        email: '',
        password: ''
      });

      // Redirect to login page after a short delay (to show the success message)
      setTimeout(() => {
        navigate('/login'); // Redirect to login page
      }, 3000); // Show success message for 3 seconds before redirecting
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      {/* Show success message after successful registration */}
      {isRegistered ? (
        <div className="success-message-container">
          <p className="success-message">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <small className="error">{errors.firstName}</small>}
          </div>
          <div className="input-group">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
            {errors.surname && <small className="error">{errors.surname}</small>}
          </div>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <small className="error">{errors.username}</small>}
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <small className="error">{errors.password}</small>}
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
