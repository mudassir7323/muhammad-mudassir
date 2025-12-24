import React from 'react';

const projects = [
  {
    category: "Web Development",
    items: [
      {
        name: "Freelance Platform",
        desc: "A comprehensive platform connecting freelancers with clients. Built with React, Spring Boot, and PostgreSQL.",
        tags: ["React", "Spring Boot", "PostgreSQL"]
      },
      {
        name: "Portfolio Website",
        desc: "A modern, responsive portfolio website featuring glassmorphism design and smooth animations.",
        tags: ["React", "Tailwind CSS", "Vite"]
      },
    ]
  },
  {
    category: "Machine Learning",
    items: [
      {
        name: "Stock Prediction",
        desc: "Advanced stock market trend prediction model using LSTM neural networks and historical data analysis.",
        tags: ["Python", "TensorFlow", "Pandas"]
      },
      {
        name: "Image Classifier",
        desc: "Deep learning model for accurate image classification using Convolutional Neural Networks (CNNs).",
        tags: ["Python", "Keras", "OpenCV"]
      },
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="space-y-16">
          {projects.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-primary pl-4">
                {section.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((project, idx) => (
                  <div key={idx} className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10">
                        View Code
                      </button>
                      <button className="flex-1 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary text-sm font-medium transition-colors border border-primary/20">
                        Live Demo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
