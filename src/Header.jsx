import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="home-page">
      <Link to="/" className="logo">
        Foodie
      </Link>
      <div
        className={`bx bx-menu ${menuOpen ? "open" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      >
        <BsList />
      </div>
      {isLoggedIn ? (
        <ul className={`navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => scrollToSection("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("menu")}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("order")}>
              Order
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("about")}>
              About
            </Link>
          </li>
          
         
         
          <li>
            <Link to="/" onClick={() => scrollToSection("service")}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("cta")}>
            Lets-Chat
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("contact")}>
              Contact
            </Link>
          </li>
         
          <li>
            <Link to="/logout" onClick={() => setIsLoggedIn(false)}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/login" onClick={handleMenuClick}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={handleMenuClick}>
              Signup
            </Link>
          </li>
        </div>
      )}
    </header>
  );
};

export default Header;