import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      details: ['123 Business Street', 'New York, NY 10001']
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Address',
      details: ['info@webteck.com', 'support@webteck.com']
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="contact-bg">
        <img 
          src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/appointment_bg_4.jpg" 
          alt="Contact Background" 
          className="contact-bg-img"
        />
        <div className="contact-overlay"></div>
      </div>
      
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle light">Get In Touch</span>
          <h2 className="section-title light">
            Let's Start Your <span className="text-primary">Next Project</span>
          </h2>
          <p className="section-description light">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;