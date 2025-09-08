import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_1.jpg',
      description: 'Modern e-commerce solution with advanced features'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_2.jpg',
      description: 'Secure mobile banking application'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      category: 'cloud',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_3.jpg',
      description: 'Scalable cloud infrastructure setup'
    },
    {
      id: 4,
      title: 'AI Chatbot System',
      category: 'ai',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_4.jpg',
      description: 'Intelligent customer service chatbot'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/project_10_5.jpg',
      description: 'Professional corporate website design'
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      category: 'web',
      image: 'https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/06/feature-img-12-2.jpg',
      description: 'Real-time data visualization platform'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'cloud', label: 'Cloud Solutions' },
    { key: 'ai', label: 'AI & Automation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Portfolio</span>
          <h2 className="section-title">
            Recent <span className="text-primary">Projects</span> & Case Studies
          </h2>
          <p className="section-description">
            Explore our latest work and see how we've helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="project-btn">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="project-btn">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-category">
                  <span className="category-tag">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-actions text-center">
          <button className="btn btn-outline">
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;