import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import member1 from '../assets/member1.jpeg';
import member2 from '../assets/myImage.png';
import member3 from '../assets/member3.jpeg';

const team = [
  { name: "Muhammad Osama Jan", role: "Sotware Engineer", image: null },
  { name: "Muhammad Mudassir", role: "ML Engineer", image: member2 },
  { name: "Abdullah Tariq", role: "UI/UX Designer", image: null },
];

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-gradient">Team</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-all duration-300 group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full rounded-full object-cover border-2 border-gray-700 group-hover:border-primary transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
