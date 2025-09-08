import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/service_9_1.jpg'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/service_9_2.jpg'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for your business.',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/service_9_3.jpg'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/service_bg_18.jpg'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/appointment_bg_4.jpg'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI & Automation',
      description: 'Intelligent automation solutions to streamline your operations.',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/feature-img-12-1.jpg'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">
            Comprehensive <span className="text-primary">Technology Solutions</span>
          </h2>
          <p className="section-description">
            We offer a full range of technology services to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-btn">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;