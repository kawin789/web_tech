import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of technology services including web development, mobile app development, cloud solutions, digital marketing, cybersecurity, and AI automation solutions.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support and maintenance packages. Our team provides 24/7 technical support, regular updates, security monitoring, and performance optimization to ensure your systems run smoothly.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and many more. Our team stays updated with the latest industry trends and best practices.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions. Quality assurance is integrated throughout our development process.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="faq-image">
              <img 
                src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/faq_10_1.png" 
                alt="FAQ" 
                className="faq-main-img"
              />
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="faq-content">
              <div className="section-header">
                <span className="section-subtitle">FAQ</span>
                <h2 className="section-title">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <p className="section-description">
                  Find answers to common questions about our services and processes.
                </p>
              </div>
              
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                    <button 
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;