import React from 'react';
import { ServerIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const services = [
    {
      title: 'Backend Development',
      description:
        'Craft scalable and secure backend systems with Java Spring Boot, Kafka, Node.js with Express, and TypeScript for robust APIs and microservices.',
      icon: <ServerIcon className="w-14 h-14 text-cyan-400" />,
      technologies: ['Spring Boot', 'Kafka', 'Node.js', 'Express', 'TypeScript'],
    },
    {
      title: 'AI-Powered Chatbots',
      description:
        'Develop intelligent chatbots using Python Rasa, enabling seamless user interactions and automated business solutions.',
      icon: <ChatBubbleLeftRightIcon className="w-14 h-14 text-cyan-400" />,
      technologies: ['Python', 'Rasa'],
    },
    {
      title: 'Telegram Bot Development',
      description:
        'Build custom Telegram bots for automation, customer engagement, and real-time notifications tailored to your needs.',
      icon: <PaperAirplaneIcon className="w-14 h-14 text-cyan-400" />,
      technologies: ['Node.js', 'Telegram API'],
    },
    {
      title: 'Frontend Development',
      description:
        'Create modern, responsive user interfaces with React, Tailwind CSS, and cutting-edge frameworks for an exceptional user experience.',
      icon: <CodeBracketIcon className="w-14 h-14 text-cyan-400" />,
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    },
  ];

  return (
    <section id="service" className="relative bg-gray-900 py-16 sm:py-24 overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-pulse-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your business with innovative technology solutions designed for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative bg-gray-800/30 backdrop-blur-2xl rounded-2xl border border-gray-600/20 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)] group perspective-1000 animate-fly-in overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* 3D Rotating Technology Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="absolute text-cyan-300/70 text-xs sm:text-sm font-semibold animate-tech-rotate"
                    style={{
                      top: `${20 + techIndex * 20}%`,
                      left: `${10 + techIndex * 15}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${techIndex * 0.2}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="relative flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-z-12 group-hover:rotate-x-10 group-hover:rotate-y-10">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_5px_15px_rgba(34,211,238,0.7)] hover:shadow-[0_8px_20px_rgba(34,211,238,0.9)] hover:-translate-y-1 text-sm sm:text-base animate-pulse-button"
                >
                  Learn More
                </a>
              </div>
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient animate-border-flow pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fly-in {
            from {
              opacity: 0;
              transform: translateY(50px) rotateX(-20deg) rotateY(-10deg);
            }
            to {
              opacity: 1;
              transform: translateY(0) rotateX(0) rotateY(0);
            }
          }
          @keyframes pulse-bg {
            0%, 100% {
              opacity: 0.8;
            }
            50% {
              opacity: 0.5;
            }
          }
          @keyframes pulse-button {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 5px 15px rgba(34, 211, 238, 0.7);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 8px 20px rgba(34, 211, 238, 0.9);
            }
          }
          @keyframes gradient-text {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
          @keyframes border-flow {
            0% {
              border-image: linear-gradient(to right, #22d3ee, #2563eb, #22d3ee) 1;
            }
            50% {
              border-image: linear-gradient(to right, #2563eb, #22d3ee, #2563eb) 1;
            }
            100% {
              border-image: linear-gradient(to right, #22d3ee, #2563eb, #22d3ee) 1;
            }
          }
          @keyframes tech-rotate {
            0% {
              transform: translate(-50%, -50%) rotateY(0deg) translateZ(50px);
              opacity: 0;
            }
            50% {
              opacity: 0.7;
            }
            100% {
              transform: translate(-50%, -50%) rotateY(360deg) translateZ(50px);
              opacity: 0.7;
            }
          }
          .animate-fly-in {
            animation: fly-in 1s ease-out forwards;
          }
          .animate-pulse-bg {
            animation: pulse-bg 8s ease-in-out infinite;
          }
          .animate-pulse-button {
            animation: pulse-button 2s ease-in-out infinite;
          }
          .animate-gradient-text {
            background-size: 200% auto;
            animation: gradient-text 4s linear infinite;
          }
          .animate-border-flow {
            animation: border-flow 3s linear infinite;
          }
          .animate-tech-rotate {
            animation: tech-rotate 6s linear infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .border-gradient {
            border-image: linear-gradient(to right, #22d3ee, #2563eb) 1;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesSection;