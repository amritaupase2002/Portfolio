import React from 'react';
import { personalInfo, socialLinks } from '../data';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram
} from 'react-icons/fa';

const Contact = () => {
  const socialIconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="contact-wrapper"
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <motion.div 
              className="contact-details"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <FaEnvelope className="contact-icon" size={20} style={{ color: '#D44638' }} />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <FaPhone className="contact-icon" size={20} style={{ color: '#25D366' }} />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="contact-value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" size={20} style={{ color: '#DB4437' }} />
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">{personalInfo.address}</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="social-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="social-heading">Follow Me</h4>
              <div className="social-links">
                {socialLinks
                  .filter(link => socialIconMap[link.name.toLowerCase()])
                  .map((social, index) => {
                    const IconComponent = socialIconMap[social.name.toLowerCase()];
                    const iconColors = {
                      github: '#181717',
                      linkedin: '#0A66C2',
                      twitter: '#1DA1F2',
                      instagram: '#E4405F'
                    };
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        whileHover={{ 
                          y: -5,
                          scale: 1.1,
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                      >
                        <IconComponent style={{ color: iconColors[social.name.toLowerCase()] }} />
                      </motion.a>
                    );
                  })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;