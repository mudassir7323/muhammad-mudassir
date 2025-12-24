import React from "react";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    name: "Web Development",
    image: "https://img.icons8.com/color/96/000000/web-design.png",
  },
  {
    name: "Full Stack Development",
    image: "https://img.icons8.com/color/96/000000/full-stack-developer.png",
  },
  {
    name: "Backend Development",
    image: "https://img.icons8.com/color/96/000000/backend-development.png",
  },
  {
    name: "Frontend Development",
    image: "https://img.icons8.com/color/96/000000/frontend.png",
  },
  {
    name: "Machine Learning",
    image: "https://img.icons8.com/color/96/000000/machine-learning.png",
  },
  {
    name: "Artificial Intelligence",
    image: "https://img.icons8.com/color/96/000000/artificial-intelligence.png",
  },
  {
    name: "Agentic AI",
    image: "https://img.icons8.com/color/96/000000/ai-agent.png",
  },
  {
    name: "Data Science",
    image: "https://img.icons8.com/color/96/000000/data-science.png",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (name) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${formattedName}`);
  };

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Services I Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.name}
              onClick={() => handleServiceClick(service.name)}
              className="cursor-pointer bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-900/70 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
