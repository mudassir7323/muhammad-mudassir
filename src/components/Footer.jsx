import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Muhammad Mudassir
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mudassir7323/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <BsGithub size={22} />
              <span className="hidden md:inline text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-mudassir7323/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <AiFillLinkedin size={24} />
              <span className="hidden md:inline text-sm">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/m0hammadmudassir/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={22} />
              <span className="hidden md:inline text-sm">Instagram</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Muhammad Mudassir. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
