import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_yd6g0ij",
        "template_hnsqn6x",
        formRef.current,
        "0Hi6dR-voZfO_90qC"
      )
      .then(() => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Message sent successfully. I’ll get back to you shortly 🚀",
        });
        formRef.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let’s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Impactful
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Have an idea, a project, or just want to collaborate?
              I help turn ideas into **scalable, real-world digital products**.
              Let’s connect and make it happen.
            </p>

            {/* Contact Icons */}
            <div className="space-y-5">

              {/* WhatsApp */}
              <div className="flex items-center gap-4 text-gray-300">
                <FaWhatsapp className="text-green-400" size={22} />
                <span className="text-sm sm:text-base">
                  WhatsApp → <span className="text-white">+92 313 0347770</span>
                </span>
              </div>

              {/* Gmail */}
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-red-400" size={20} />
                <span className="text-sm sm:text-base">
                  Gmail → <span className="text-white">mudassir7323@gmail.com</span>
                </span>
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/m0hammadmudassir/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-pink-400 transition"
              >
                <FaInstagram size={20} />
                <span className="text-sm sm:text-base">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-mudassir7323/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin size={20} />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mudassir7323/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition"
              >
                <FaGithub size={20} />
                <span className="text-sm sm:text-base">GitHub</span>
              </a>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 p-8 sm:p-10 rounded-3xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your idea or project..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-purple-500 focus:outline-none resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`text-sm p-3 rounded-lg ${status.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                    }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
