import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import "./index.css";
import homeImg from "./img/home.png";
import foodImg from "./img/food1.png";
import food2 from "./img/food2.png";
import food3 from "./img/food3.png";
import orderFood from "./img/orderfood.png";
import aboutImg from "./img/about.png";
import boxImg from "./img/box.png";
import shippingImg from "./img/shiping.png";
import deliverImg from "./img/deliver.png";

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home-text">
          <h1>Restaurant</h1>
          <h2>Food the<br />Most precious things</h2>
          <p>Good food is very often even most often simple food</p>
          <a href="#" className="button" onClick={() => scrollToSection("about")}>
            Learn More
          </a>
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Home" />
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="heading">
          <span>Food Menu</span>
          <h2>Fresh taste and great price</h2>
        </div>
        <div className="menu-container">
          <div className="box">
            <div className="box-img">
              <img src={foodImg} alt="Chicken Burger" />
            </div>
            <h2>Chicken Burger</h2>
            <h3>Tasty Food</h3>
            <span>$11.00</span>
            <i className="bx bx-cart"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={food2} alt="Special Veg Burger" />
            </div>
            <h2>Special Veg Burger</h2>
            <h3>Tasty Food</h3>
            <span>$09.00</span>
            <i className="bx bx-cart"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={food3} alt="Chicken Fry Pack" />
            </div>
            <h2>Chicken Fry Pack</h2>
            <h3>Tasty Food</h3>
            <span>$40.00</span>
            <i className="bx bx-cart"></i>
          </div>
        </div>
      </section>

      <section className="order" id="order">
        <div className="order-text">
          <h2>Are you hungry?</h2>
          <h1>Don't wait!</h1>
          <p>Let start to order food now</p>
          <a href="#" className="button" onClick={() => scrollToSection("menu")}>
            Order Now
          </a>
        </div>
        <div className="order-img">
          <img src={orderFood} alt="Order Food" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>We speak the good<br />food language</h2>
          <p>It is not a commercial Website. This Website is just created for practicing Web Responsive Design</p>
          <a href="#" className="button" onClick={() => scrollToSection("service")}>
            About us
          </a>
        </div>
      </section>

      <section className="service" id="service">
        <div className="heading">
          <span>Services</span>
          <h2>We provide best quality food</h2>
        </div>
        <div className="service-container">
          <div className="s-box">
            <img src={boxImg} alt="Order" />
            <h3>Order</h3>
            <p>A full display of menu items and billing features make it easier for the customers to order food</p>
          </div>

          <div className="s-box">
            <img src={shippingImg} alt="Shipping" />
            <h3>Shipping</h3>
            <p>Your order has been shipped, it will reach you in a while</p>
          </div>

          <div className="s-box">
            <img src={deliverImg} alt="Delivered" />
            <h3>Delivered</h3>
            <p>Your order has reached to you please don't forget to give your feedback</p>
          </div>
        </div>
      </section>
      <section className="cta" id="cta">
        <h2>We make quality food<br />Everyday</h2>
        <a href="#" className="button" onClick={() => scrollToSection("contact")}>
          Let's Talk
        </a>
      </section>


     

      
      <section className="contact" id="contact">
        <div className="footer">
          <div className="main">
            <div className="col">
              <h4>Menu Links</h4>
              <ul>
                <li>
                  <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
                </li>
                <li>
                  <a href="#about" onClick={() => scrollToSection("about")}>About</a>
                </li>
                <li>
                  <a href="#menu" onClick={() => scrollToSection("menu")}>Menu</a>
                </li>
                <li>
                  <a href="#order" onClick={() => scrollToSection("order")}>Order</a>
                </li>
                <li>
                  <a href="#service" onClick={() => scrollToSection("service")}>Service</a>
                </li>
                <li>
                  <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
                </li>
                <li>
                  <a href="#cta" onClick={() => scrollToSection("cta")}>Lets-Chat</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Food Delivery</a>
                </li>
                <li>
                  <a href="#">Quality Food</a>
                </li>
                <li>
                  <a href="#">Cart Service</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Information</h4>
              <ul>
                <li>
                  <a href="#about">About US</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Contact Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100010421713980">
                  <BsFacebook />
                </a>
                <a href="https://twitter.com/VinayKu86250738">
                  <BsTwitter />
                </a>
                <a href="https://www.instagram.com/real_vinay18/?next=%2F">
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/vinay-kumar-48306b24a/">
                  <BsLinkedin />
                </a>
                <a href="https://github.com/Vinaykumar018">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;