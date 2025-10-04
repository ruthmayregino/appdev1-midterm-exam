import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Chain App Dev" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
                  <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                  <li>
                    <div className="gradient-button">
                      <a href="#"><i className="fa fa-sign-in-alt"></i> Sign In Now</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6>Welcome to Chain App Dev</h6>
                <h2>Creative &amp; Unique <em>App</em> Landing Page</h2>
                <p>Chain App Dev is an app landing page HTML5 template designed for modern businesses and apps. Perfect for showcasing your services.</p>
                <div className="buttons">
                  <div className="border-button">
                    <a href="#contact">Contact Us</a>
                  </div>
                  <div className="main-button">
                    <a href="#about">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src="assets/images/slider-dec.png" alt="App Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Amazing <em>Services</em> &amp; <span>Features</span> For You</h2>
                <span>Our Services</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item first-service">
                <div className="icon"></div>
                <h4>App Maintenance</h4>
                <p>Keep your app up to date with our dedicated maintenance service.</p>
                <div className="text-button">
                  <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item second-service">
                <div className="icon"></div>
                <h4>UI/UX Design</h4>
                <p>Beautiful and responsive designs tailored to your brand.</p>
                <div className="text-button">
                  <a href="#">Discover More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item third-service">
                <div className="icon"></div>
                <h4>Digital Marketing</h4>
                <p>Grow your app audience through strategic marketing campaigns.</p>
                <div className="text-button">
                  <a href="#">Learn More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright © 2025 Chain App Dev Co., Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
