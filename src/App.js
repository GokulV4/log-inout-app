import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [username, setUsername] = useState(''); // Track username input
  const [password, setPassword] = useState(''); // Track password input

  // Handle the login logic
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    // Basic login validation
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); // Save login state to localStorage
    } else {
      alert('Invalid username or password');
    }
  };

  // Handle logout logic
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove login state from localStorage
  };

  // Check login state on page load
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {/* Login Form */}
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Handle username input change
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Handle password input change
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        // Logged-in state
        <div className="welcome-message">
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
