import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img 
          src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/hero_bg_19_1.jpg" 
          alt="Hero Background" 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content fade-in-up">
              <h1 className="hero-title">
                Innovative <span className="text-primary">Technology</span> Solutions for Your Business
              </h1>
              <p className="hero-description">
                We provide cutting-edge technology solutions that help businesses grow, 
                innovate, and stay ahead in the digital landscape. Transform your ideas 
                into reality with our expert team.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">
                  Get Started
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button className="btn btn-outline">
                  Learn More
                  <i className="fas fa-play"></i>
                </button>
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">98%</h3>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">24/7</h3>
                  <p className="stat-label">Support Available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="hero-image fade-in-up">
              <img 
                src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/hero_19_1.png" 
                alt="Technology Solutions" 
                className="hero-main-img"
              />
              <div className="hero-floating-elements">
                <div className="floating-card card-1">
                  <i className="fas fa-rocket"></i>
                  <span>Fast Delivery</span>
                </div>
                <div className="floating-card card-2">
                  <i className="fas fa-shield-alt"></i>
                  <span>Secure</span>
                </div>
                <div className="floating-card card-3">
                  <i className="fas fa-chart-line"></i>
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;