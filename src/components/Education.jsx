import React from "react";

const Education = () => {
  return (
    <section className="relative py-24">
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Academic{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Background
          </span>
        </h2>

        <div className="space-y-10">

          {/* Degree */}
          <div className="group bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-purple-500/40 transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Bachelor of Science in Data Science
              </h3>
              <span className="mt-2 sm:mt-0 text-sm font-medium text-purple-400 bg-purple-500/10 px-4 py-1 rounded-full w-fit">
                2023 — Present
              </span>
            </div>

            <p className="text-gray-300 text-lg">
              FAST National University, Islamabad
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Currently pursuing a Data Science degree with a strong foundation
              in <span className="text-gray-200">software development</span>,
              <span className="text-gray-200"> machine learning</span>, and
              <span className="text-gray-200"> data-driven problem solving</span>.
              Actively building real-world projects alongside academic studies.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Data Structures & Algorithms",
                "Machine Learning",
                "Database Systems",
                "Software Engineering",
                "Probability & Statistics",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Intermediate */}
          <div className="group bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-blue-500/40 transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Intermediate (Pre-Engineering)
              </h3>
              <span className="mt-2 sm:mt-0 text-sm font-medium text-blue-400 bg-blue-500/10 px-4 py-1 rounded-full w-fit">
                2021 — 2023
              </span>
            </div>

            <p className="text-gray-300 text-lg">
              Punjab Group of Colleges (Rawalpindi)
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Built a strong academic foundation in
              <span className="text-gray-200"> Mathematics</span>,
              <span className="text-gray-200"> Physics</span>, and
              <span className="text-gray-200"> Chemistry </span>, which
              later shaped my interest in programming and analytical thinking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Mathematics", "Physics", "Chemistry"].map((subject) => (
                <span
                  key={subject}
                  className="text-xs sm:text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Matriculation */}
          <div className="group bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-blue-500/40 transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Mtriculation (Computer Science)
              </h3>
              <span className="mt-2 sm:mt-0 text-sm font-medium text-blue-400 bg-blue-500/10 px-4 py-1 rounded-full w-fit">
                2019 — 2021
              </span>
            </div>

            <p className="text-gray-300 text-lg">
              The Educators
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
  Gained a strong foundation in
  <span className="text-gray-200"> Mathematics</span>,
  <span className="text-gray-200"> Computer Studies</span>, and
  <span className="text-gray-200"> Physics</span>, sparking my early interest
  in computers and logical thinking.
</p>


            <div className="mt-6 flex flex-wrap gap-3">
              {["Mathematics", "Physics", "Computer Science"].map((subject) => (
                <span
                  key={subject}
                  className="text-xs sm:text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
