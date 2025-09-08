import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: 'fas fa-rocket',
      title: 'Fast Performance',
      description: 'Lightning-fast solutions optimized for speed and efficiency.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock support to keep your business running.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-image">
              <img 
                src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/about_17_1.jpg" 
                alt="About Us" 
                className="about-main-img"
              />
              <div className="about-experience">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="about-content">
              <div className="section-header">
                <span className="section-subtitle">About Webteck</span>
                <h2 className="section-title">
                  We're Leading the Way in <span className="text-primary">Digital Innovation</span>
                </h2>
                <p className="section-description">
                  With over 15 years of experience in the technology industry, we've helped 
                  hundreds of businesses transform their operations through innovative digital solutions. 
                  Our team of experts is passionate about delivering results that exceed expectations.
                </p>
              </div>
              
              <div className="about-features">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="about-actions">
                <button className="btn btn-primary">
                  Learn More About Us
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;