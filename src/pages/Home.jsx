import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
