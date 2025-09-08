import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/team_6_1.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Mike Davis',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Chen',
      position: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Team</span>
          <h2 className="section-title">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="section-description">
            Our talented team of professionals is dedicated to delivering exceptional results for your business.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href={member.social.linkedin} className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={member.social.twitter} className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={member.social.github} className="social-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;