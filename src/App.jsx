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


      {/* ===== MAIN BANNER ===== */}
      <section className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-text">
                <h6>Welcome to Chain App Dev</h6>
                <h2>
                  Creative & <em>Unique</em> App Landing Page
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
              <div className="banner-image">
                <img src="/assets/images/slider-dec.png" alt="App Illustration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-heading">
            <h2>
              Amazing <em>Services</em> & <span>Features</span> For You
            </h2>
            <span>Our Services</span>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="service-item">
                <h4>App Maintenance</h4>
                <p>Keep your app up to date with our dedicated maintenance service.</p>
                <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <h4>UI/UX Design</h4>
                <p>Beautiful and responsive designs tailored to your brand.</p>
                <a href="#">Discover More <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <h4>Digital Marketing</h4>
                <p>Grow your app audience through strategic marketing campaigns.</p>
                <a href="#">Learn More <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* NOTE: You might need to use an 'animated' class here if you re-introduce animation.js or a React animation library */}
              <img
                src="/assets/images/about-right-dec.png"
                alt="About"
                className="about-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>
                  Grow Your <em>App</em> With Our <span>Solutions</span>
                </h2>
                <p>
                  We help businesses scale with unique digital solutions. From
                  branding to deployment, we cover it all. Our approach
                  integrates cutting-edge technology with user-centric design to
                  ensure your app stands out in a crowded market.
                </p>
                {/* START: Enhanced Feature List based on Template structure */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-feature-item">
                      <div className="icon">
                        <i className="fa fa-pencil-ruler"></i>
                      </div>
                      <h4>Creative Design</h4>
                      <p>Stunning UI/UX built for conversion and engagement.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-feature-item">
                      <div className="icon">
                        <i className="fa fa-cloud-upload-alt"></i>
                      </div>
                      <h4>Quick Deployment</h4>
                      <p>Launch your application faster with our streamlined process.</p>
                    </div>
                  </div>
                </div>
                {/* END: Enhanced Feature List */}

                <div className="main-button">
                  <a href="#services">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                 <img src="/assets/images/pricing-table-01.png" alt="Business Plan" />
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
                 <img src="/assets/images/pricing-table-01.png" alt="Premium Plan" />
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

{/* ===== NEWSLETTER / FOOTER BLOCK (Combined Section) ===== */}
      <section id="newsletter" className="section newsletter-block">
        <div className="container">
          {/* Main Newsletter Content (Top of the wave) */}
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-content">
                <h2>Join Our Mailing List To Receive The News & Latest Trends</h2>
                <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Email Address..." required />
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Footer Links (Below the wave) */}
          <div className="row footer-links">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <ul>
                  <li>Rio de Janeiro, RJ 23568-800, Brazil</li>
                  <li><a href="#">010-020-0340</a></li>
                  <li><a href="#">info@company.co</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Free Apps</a></li>
                  <li><a href="#">App Engine</a></li>
                  <li><a href="#">Programming</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h4>About Our Company</h4>
                <div className="logo-footer">
                    <img src="/assets/images/white-logo.png" alt="Chain App Dev" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
          
          {/* Copyright Bar (Bottom-most section) */}
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright-text">
                Copyright © 2025 Chain App Dev Co., Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default App;
