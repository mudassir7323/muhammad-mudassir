import React from 'react';
import myImage from '../assets/myImage.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
            Available for Hire
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Muhammad Mudassir</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I am a passionate Web Developer & AI enthusiast. My vision is to build futuristic software solutions that impact people's lives positively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary text-center">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 rounded-full border border-gray-700 text-white font-semibold hover:bg-white/5 transition-all text-center">
              View Projects
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src={myImage}
              alt="Muhammad Mudassir"
              className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
