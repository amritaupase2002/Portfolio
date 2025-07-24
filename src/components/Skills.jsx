import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker, FaFigma, FaJava, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiExpress, SiDjango, SiFirebase, SiMongodb, SiPostgresql, SiPostman, SiJest, SiMysql } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend",
    icon: <FaReact className="category-main-icon" style={{ color: '#61DAFB' }} />,
    items: [
      { name: "React", icon: <FaReact style={{ color: '#61DAFB' }} /> },
      { name: "React Native", icon: <FaReact style={{ color: '#61DAFB' }} /> },
      { name: "React Router Dom", icon: <FaReact style={{ color: '#61DAFB' }} /> },
      { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
      { name: "HTML5", icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
      { name: "CSS3", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
      { name: "Tailwind", icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
      { name: "Bootstrap", icon: <FaBootstrap style={{ color: '#7952B3' }} /> },
    ]
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="category-main-icon" style={{ color: '#339933' }} />,
    items: [
      { name: "Node.js", icon: <FaNodeJs style={{ color: '#339933' }} /> },
      { name: "Express", icon: <SiExpress style={{ color: '#000000' }} /> },
      { name: "Socket.io", icon: <SiExpress style={{ color: '#010101' }} /> },
    ]
  },
  {
    title: "Programming Languages",
    icon: <FaJava className="category-main-icon" style={{ color: '#007396' }} />,
    items: [
      { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
      { name: "Java", icon: <FaJava style={{ color: '#007396' }} /> },
      { name: "HTML", icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
      { name: "CSS", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
    ]
  },
  {
    title: "Database Management",
    icon: <SiMongodb className="category-main-icon" style={{ color: '#47A248' }} />,
    items: [
      { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248' }} /> },
      { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> },
    ]
  },
  {
    title: "Tools & Other",
    icon: <FaGitAlt className="category-main-icon" style={{ color: '#F05032' }} />,
    items: [
      { name: "Git", icon: <FaGitAlt style={{ color: '#F05032' }} /> },
      { name: "GitHub", icon: <FaGithub style={{ color: '#181717' }} /> },
      { name: "VS Code", icon: <VscVscode style={{ color: '#007ACC' }} /> },
      { name: "Postman", icon: <SiPostman style={{ color: '#FF6C37' }} /> },
      { name: "Digital Ocean", icon: <FaDocker style={{ color: '#2496ED' }} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-category-grid">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-icons-container">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-icon-item"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-icon-wrapper" data-tooltip={skill.name}>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;