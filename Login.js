import React, { useState } from "react";
import axios from "axios";

const Login = () => {
 
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  

  const handleSubmit = async (e) => {
    e.preventDefault();  

    try {
    
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

     
      if (response.data.success) {
        alert("Login successful!");
       
      }
    } catch (err) {
      
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* Display the error message if it exists */}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
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
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
