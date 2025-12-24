import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/Data";

const Service = () => {
  const { serviceName } = useParams();

  const formattedName = serviceName.replace(/-/g, " ").toLowerCase();

  const service = servicesData.find(
    (item) => item.name.toLowerCase() === formattedName
  );

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p className="text-gray-400 text-lg">Service not found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 md:p-12">

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {service.name}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {service.description}
          </p>

          <p className="text-xl font-semibold text-blue-400 mb-10">
            {service.price}
          </p>

          <button
            onClick={() => {}}
            className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
          >
            {service.cta}
          </button>

        </div>
      </div>
    </section>
  );
};

export default Service;
