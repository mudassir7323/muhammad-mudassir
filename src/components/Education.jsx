import React from 'react';

const Education = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-gradient">Education</span>
        </h2>

        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl border-l-4 border-primary hover:translate-x-2 transition-transform duration-300">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">BS Data Science</h3>
              <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm w-fit mt-2 md:mt-0">
                2022 - Present
              </span>
            </div>
            <p className="text-gray-300 text-lg mb-2">FAST University Islamabad</p>
            <p className="text-gray-400">
              Currently in 4th Semester, focusing on Machine Learning, Data Structures, and Algorithms.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border-l-4 border-secondary hover:translate-x-2 transition-transform duration-300">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">Intermediate / High School</h3>
              <span className="text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full text-sm w-fit mt-2 md:mt-0">
                2020 - 2022
              </span>
            </div>
            <p className="text-gray-300 text-lg mb-2">Your School Name</p>
            <p className="text-gray-400">
              Completed with Pre-Engineering/Computer Science focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
