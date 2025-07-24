import React, { useEffect } from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    const nameElement = document.querySelector('.name-animation');
    if (nameElement && !nameElement.textContent) {
      const name = personalInfo.name;
      let i = 0;
      nameElement.textContent = '';
      const typing = setInterval(() => {
        if (i < name.length) {
          nameElement.textContent += name.charAt(i);
          i++;
        } else {
          clearInterval(typing);
          nameElement.style.borderRight = 'none';
        }
      }, 150);
      return () => clearInterval(typing);
    }
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            <h1 className="name-animation"></h1>
            <h2>{personalInfo.profession}</h2>
            <p>{personalInfo.bio}</p>
          </div>
          <motion.div 
            className="about-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <img src="/assets/images/profile.jpg" alt="Profile" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;