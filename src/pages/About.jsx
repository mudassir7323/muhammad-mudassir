import React from 'react';
import myImage from '../assets/AI.png';

const About = () => {
  const skills = [
    "React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript",
    "Spring Boot", "Node.js", "SQL",
    "Python", "Scikit-learn", "TensorFlow",
    "Figma", "Adobe XD"
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">

          {/* Image Side */}
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl blur-lg opacity-60"></div>
              <img
                src={myImage}
                alt="Muhammad Mudassir"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] border border-gray-700"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I started my journey as a passionate developer and AI enthusiast. Over time, I have mastered technologies like React, Spring Boot, and Python for machine learning.
              </p>
              <p>
                My vision is to create futuristic, innovative software solutions that make people's lives easier and more productive. I thrive on solving complex problems and delivering high-quality software.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
