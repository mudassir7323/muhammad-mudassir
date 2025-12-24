import React from "react";
import myImage from "../assets/AI.png";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main About Container */}
        <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image */}
          <div className="md:w-1/3 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 blur-xl opacity-40 rounded-2xl" />
            <img
              src={myImage}
              alt="Muhammad Mudassir"
              className="relative rounded-2xl w-full aspect-[3/4] object-cover border border-gray-700 shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 text-gray-300">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                I am a BS Data Science student with a strong passion for software
                development and artificial intelligence. My journey began with
                learning core programming concepts during my early academic
                years, which gradually led me to explore web development and
                machine learning.
              </p>

              <p>
                Over time, I built hands-on experience in developing web
                applications using modern technologies and backend frameworks.
                Alongside web development, I actively work with Python-based
                tools for data analysis and machine learning, aiming to build
                intelligent and scalable solutions.
              </p>

              <p>
                My goal is to grow as a professional software engineer who can
                effectively combine strong programming skills with data-driven
                thinking to solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Programming Languages */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Programming Languages
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-relaxed text-gray-300">
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL (MySQL)</li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Frameworks & Libraries
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-relaxed text-gray-300">
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>Node.js</li>
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
              <li>SFML (C++)</li>
            </ul>
          </div>

          {/* Web Technologies */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Web Technologies
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-relaxed text-gray-300">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind CSS</li>
              <li>RESTful APIs</li>
              <li>Axios / Fetch API</li>
            </ul>
          </div>

          {/* Databases & Tools */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Databases & Tools
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-relaxed text-gray-300">
              <li>MySQL</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Linux / Ubuntu</li>
            </ul>
          </div>

          {/* Data Science & AI */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Data Science & AI
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-relaxed text-gray-300">
              <li>Machine Learning Fundamentals</li>
              <li>Data Preprocessing & Feature Engineering</li>
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Model Training & Evaluation</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Languages
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-relaxed text-gray-300">
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
