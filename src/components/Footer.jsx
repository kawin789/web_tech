import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Digital Marketing', href: '#services' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', name: 'Facebook' },
    { icon: 'fab fa-twitter', href: '#', name: 'Twitter' },
    { icon: 'fab fa-linkedin-in', href: '#', name: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: '#', name: 'Instagram' },
    { icon: 'fab fa-github', href: '#', name: 'GitHub' }
  ];

  return (
    <footer className="footer">
      <div className="footer-bg">
        <img 
          src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/footer_bg_17.jpg" 
          alt="Footer Background" 
          className="footer-bg-img"
        />
        <div className="footer-overlay"></div>
      </div>
      
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img 
                    src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/logo-white3.svg" 
                    alt="Webteck" 
                    className="footer-logo-img"
                  />
                </div>
                <p className="footer-description">
                  We're a leading technology company providing innovative solutions 
                  to help businesses grow and succeed in the digital world.
                </p>
                <div className="footer-social">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href} 
                      className="social-link"
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-md-2">
              <div className="footer-widget">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-links">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="col-md-2">
              <div className="footer-widget">
                <h3 className="footer-title">Services</h3>
                <ul className="footer-links">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="col-md-2">
              <div className="footer-widget">
                <h3 className="footer-title">Support</h3>
                <ul className="footer-links">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="col-md-2">
              <div className="footer-widget">
                <h3 className="footer-title">Newsletter</h3>
                <p className="newsletter-text">
                  Subscribe to get the latest updates and news.
                </p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} Webteck. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;