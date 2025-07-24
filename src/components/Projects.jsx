import React from 'react';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-header">
                <div className="project-icon" style={{ background: 'linear-gradient(135deg, var(--accent-500), var(--accent-600))' }}>
                  {project.title.charAt(0).toUpperCase()}
                </div>
                <h3>{project.title}</h3>
              </div>
              <div className="project-content">
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                  >
                    <FaGithub className="project-link-icon" style={{ color: '#181717' }} /> Code
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                  >
                    <FaExternalLinkAlt className="project-link-icon" style={{ color: 'var(--accent-600)' }} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;