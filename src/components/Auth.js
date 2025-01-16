import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions'; // Make sure to import the login action
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Auth.css';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Dispatch the login action
    const user = { username, password };
    dispatch(login(user));

    // Clear the form fields and error
    setUsername('');
    setPassword('');
    setError('');

    // Redirect to the home page after successful login
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
