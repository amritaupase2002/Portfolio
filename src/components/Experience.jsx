import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <Briefcase className="experience-icon" size={20} />
                    <h3>{exp.role}</h3>
                  </div>
                  <div className="experience-meta">
                    <div className="company-info">
                      <MapPin size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="duration-info">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-description">
                  <ul>
                    {exp.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;