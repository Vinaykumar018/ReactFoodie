import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/Login";
import SignupPage from "./Components/Signup";
import Home from "./Home"; // Import the Home component
import Header from "./Header"; // Import the Header component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true); // Track whether it's the user's first time or not

  useEffect(() => {
    // Check if the user is logged in
    const userStatus = localStorage.getItem("isLoggedIn");
    if (userStatus === "true") {
      setIsLoggedIn(true);
    } else {
      // Check if it's the user's first time
      const isFirstTimeUser = localStorage.getItem("isFirstTimeUser");
      if (isFirstTimeUser !== "false") {
        setIsFirstTime(true);
        localStorage.setItem("isFirstTimeUser", "false");
      } else {
        setIsFirstTime(false);
      }
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} scrollToSection={scrollToSection} />
        <Routes>
          {/* Display login page by default if it's the user's first time */}
          {isFirstTime && !isLoggedIn && (
            <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          )}
          {/* Other routes */}
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          {/* Redirect to login if no page is opened and user is not logged in */}
          {!isLoggedIn && <Route path="/*" element={<Navigate to="/login" replace />} />}
        </Routes>
      </>
    </Router>
  );
};

export default App;
