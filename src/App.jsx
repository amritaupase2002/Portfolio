import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <div className="section-spacer"></div>
        <Experience />
        <div className="section-spacer"></div>
        <Skills />
        <div className="section-spacer"></div>
        <Projects />
        <div className="section-spacer"></div>
        <Contact />
        <div className="section-spacer"></div>
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;