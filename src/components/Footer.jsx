import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaTelegram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 mt-20 border-t-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-fadeIn">

      {/* Upper part */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10">

        {/* Left side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-white">Abel Adisu</h1>
          <p className="mt-2 text-sm text-gray-400">Softerware Developer</p>
          <p className="mt-1 text-sm text-gray-400">Addis Abeba, Ethiopia 🌍</p>
        </div>

        {/* Small site links */}
        <div className="flex space-x-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Back to top */}
        <button 
          onClick={scrollToTop} 
          className="mt-6 md:mt-0 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition transform hover:scale-110"
        >
          <FaArrowUp />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-10"></div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-8 mb-8">
        <a href="https://github.com/Abelo73" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition transform hover:-translate-y-1 hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abel-adisu-dev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 text-2xl transition transform hover:-translate-y-1 hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/Abelo_73" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 text-2xl transition transform hover:-translate-y-1 hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://t.me/Abelo_73" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-2xl transition transform hover:-translate-y-1 hover:scale-110">
          <FaTelegram />
        </a>
        <a href="mailto:abeladisu73@gmail.com" className="text-gray-300 hover:text-green-400 text-2xl transition transform hover:-translate-y-1 hover:scale-110">
          <FaEnvelope />
        </a>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Abel Adisu. All Rights Reserved.</p>
        <p className="mt-2">Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS</p>
      </div>

    </footer>
  );
};

export default Footer;
