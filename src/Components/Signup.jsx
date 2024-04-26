import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'; // Import Signup.css

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3020/api/auth/signup", {
        username,
        email,
        password,
      });
      setError("");
      setIsLoggedIn(true);
      navigate("/login", { replace: true });
    } catch (error) {
      setError("Failed to signup");
      console.error("Failed to signup", error);
    }
  };

  return (
    <div className="container" style={{marginTop:'25px'}}>
      <div className="form-container">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="field">
            <input type="submit" value="Signup" />
          </div>
        </form>
        <div className="signup-link">
          Not a member? <Link to="/signup">Signup now</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
