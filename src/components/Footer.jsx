import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side - Name and Copy */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">Abel Adisu</h1>
            <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Abelo73" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/https://www.linkedin.com/in/abel-adisu-dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/Abelo_73" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://twitter.com/Abelo_73" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaTelegram />
            </a>
            <a 
              href="mailto:abeladisu73@gmail.com" 
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Built with ❤️ using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
