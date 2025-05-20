import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactAs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://portfolio-backend-2025-wddu.onrender.com/api/contact', formData);
      toast.success(response.data, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        style: {
          background: 'linear-gradient(to right, #06b6d4, #9333ea)',
          color: '#ffffff',
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.7)',
        },
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data || 'Failed to send message. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        style: {
          background: 'linear-gradient(to right, #ef4444, #b91c1c)',
          color: '#ffffff',
          boxShadow: '0 0 10px rgba(239, 68, 68, 0.7)',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 animate-glow">
          Get in Touch
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-600/30 p-8 shadow-2xl transition-all duration-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] perspective-1000 animate-slide-up">
            <div className="transform transition-transform duration-500 group-hover:-translate-z-10 group-hover:rotate-x-10 group-hover:rotate-y-10">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-start text-sm text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-start text-sm text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-start text-sm text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-y"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.7)] ${loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Connect with Me</h3>
            <p className="text-sm text-gray-300 mb-8 text-center lg:text-left">
              Feel free to reach out via social media or email for collaborations, inquiries, or just to say hi!
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/abel-adisu-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/icon"
              >
                <svg
                  className="w-4 h-4 transform hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.955-2.462-2.216-2.462-1.261 0-2.284 1.125-2.284 2.462v5.604h-3v-11h3v1.547c.421-.652 1.447-1.547 3-1.547 2.209 0 4 1.791 4 4v7z" />
                </svg>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-12 bg-gray-800/90 text-xs text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/Abelo73"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/icon"
              >
                <svg
                  className="w-4 h-4 transform hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-12 bg-gray-800/90 text-xs text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <style>
        {`
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes glow {
            0%, 100% {
              text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
            }
            50% {
              text-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
            }
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
        `}
      </style>
    </section>
  );
};

export default ContactAs;