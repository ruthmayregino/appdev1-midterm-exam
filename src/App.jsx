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
                {/* Logo */}
                <a href="#top" className="logo">
                  <img src="/assets/images/logo.png" alt="Chain App Dev" />
                </a>
                {/* Menu */}
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
                <h2>
                  Creative &amp; Unique <em>App</em> Landing Page
                </h2>
                <p>
                  Chain App Dev is an app landing page HTML5 template designed
                  for modern businesses and apps. Perfect for showcasing your
                  services.
                </p>
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
                <img src="/assets/images/slider-dec.png" alt="App Illustration" />
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
                <h2>
                  Amazing <em>Services</em> &amp; <span>Features</span> For You
                </h2>
                <span>Our Services</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item first-service">
                <div className="icon"></div>
                <h4>App Maintenance</h4>
                <p>
                  Keep your app up to date with our dedicated maintenance service.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item second-service">
                <div className="icon"></div>
                <h4>UI/UX Design</h4>
                <p>
                  Beautiful and responsive designs tailored to your brand.
                </p>
                <div className="text-button">
                  <a href="#">
                    Discover More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item third-service">
                <div className="icon"></div>
                <h4>Digital Marketing</h4>
                <p>
                  Grow your app audience through strategic marketing campaigns.
                </p>
                <div className="text-button">
                  <a href="#">
                    Learn More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="/assets/images/about-dec.png" alt="About illustration" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="section-heading">
                <h2>Grow Your <em>App</em> With Our <span>Solutions</span></h2>
                <p>
                  We help businesses scale with unique digital solutions. From
                  branding to deployment, we cover it all.
                </p>
                <div className="main-button">
                  <a href="#services">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Choose The Best <em>Plan</em> For <span>Your App</span></h2>
                <span>Our Pricing</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>Standard Plan</h4>
                <div className="icon">
                  <img src="/assets/images/pricing-table-01.png" alt="Standard Plan" />
                </div>
                <ul>
                  <li>5 Projects</li>
                  <li>100 GB Storage</li>
                  <li>Basic Support</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4>Business Plan</h4>
                <div className="icon">
                  <img src="/assets/images/pricing-table-02.png" alt="Business Plan" />
                </div>
                <ul>
                  <li>15 Projects</li>
                  <li>500 GB Storage</li>
                  <li>Premium Support</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>Premium Plan</h4>
                <div className="icon">
                  <img src="/assets/images/pricing-table-03.png" alt="Premium Plan" />
                </div>
                <ul>
                  <li>Unlimited Projects</li>
                  <li>1 TB Storage</li>
                  <li>24/7 Support</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div id="newsletter" className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Join Our <em>Newsletter</em> &amp; Get Updates
                </h2>
                <span>Stay In Touch</span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <input type="text" name="email" id="email" placeholder="Your Email Address" required />
                  </div>
                  <div className="col-lg-6 offset-lg-3">
                    <button type="submit" className="main-button">Subscribe Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2025 Chain App Dev Co., Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
