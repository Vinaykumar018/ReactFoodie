import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css' // Import Link from react-router-dom


const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6020/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setError("");
      setIsLoggedIn(true);
      navigate("/", { replace: true });
    } catch (error) {
      setError("Invalid email or password");
      console.error("Failed to login", error);
    }
  };

  return (
    <div className="container" style={{ 
      padding: "20px", 
    
      borderRadius: "5px",
     marginTop:'25px'
      // Change the colors as needed
    }}>
      <div className="form-container" style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="field" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field" style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
          </div>
         
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/signup">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
