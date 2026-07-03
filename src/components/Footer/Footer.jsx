import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-800/50">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <div className="mb-6">
          <span className="text-[#8245ec] text-lg">&lt;</span>
          <span className="text-white text-xl font-semibold">Chaitanya</span>
          <span className="text-[#8245ec] text-lg"> /</span>
          <span className="text-white text-xl font-semibold">Garg</span>
          <span className="text-[#8245ec] text-lg">&gt;</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/chaitanya-garg-se/" },
            { icon: <FaGithub size={18} />, link: "https://github.com/chaitanya197803" },
            { icon: <FaInstagram size={18} />, link: "https://www.instagram.com/sagar.oo3/" },
            { icon: <FaTwitter size={18} />, link: "" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-gray-700/50 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800/30">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            © 2026 Chaitanya Garg. Made with <FaHeart className="text-purple-500 text-[10px]" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;