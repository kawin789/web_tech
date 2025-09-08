import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/logo.svg" 
              alt="Webteck" 
              className="logo-img"
            />
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
              <li><button onClick={() => scrollToSection('services')} className="nav-link">Services</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
              <li><button onClick={() => scrollToSection('team')} className="nav-link">Team</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary">
              Get Started
              <i className="fas fa-arrow-right"></i>
            </button>
            
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;