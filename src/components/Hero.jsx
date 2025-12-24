import React from 'react';
import myImage from '../assets/myImage.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Available for Hire
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Muhammad Mudassir
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg md:mx-0 leading-relaxed">
            Passionate Web Developer & AI enthusiast. I build modern, scalable, and intelligent software solutions that make a positive impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-300 text-center"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-gray-700 text-white font-semibold hover:bg-white/10 transition-colors duration-300 text-center"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Subtle Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-40 blur-3xl"></div>
            <img
              src={myImage}
              alt="Muhammad Mudassir"
              className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
