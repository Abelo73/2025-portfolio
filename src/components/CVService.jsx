// src/components/CVServices.js
import React, { useState, useEffect } from 'react';
import { DocumentTextIcon, CheckCircleIcon, UserGroupIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const CVServices = () => {
  const cvServices = [
    {
      title: 'CV Writing & Editing',
      description:
        'Craft tailored, professional CVs that highlight your skills and experiences to stand out to employers.',
      icon: <DocumentTextIcon className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: 'ATS Optimization',
      description:
        'Ensure your CV passes Applicant Tracking Systems with keyword optimization and industry-standard formatting.',
      icon: <CheckCircleIcon className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: 'Career Coaching',
      description:
        'Receive personalized guidance on job applications, interview prep, and career planning to kickstart your journey.',
      icon: <UserGroupIcon className="w-12 h-12 text-cyan-400" />,
    },
  ];

  const cvDesigns = [
    {
      id: 'professional',
      title: 'Professional CV',
      description: 'Versatile design for a wide range of industries, emphasizing clarity and impact.',
      thumbnail: '/cvs/Abel%20cv.jpg',
      fullImage: '/cvs/Abel%20cv.jpg',
      type: 'image',
    },
    {
      id: 'midwifery',
      title: 'Midwifery CV',
      description: 'Tailored for healthcare and midwifery roles with a clean, professional layout.',
      thumbnail: '/cvs/Mahilet%20Mediwifery.jpg',
      fullImage: '/cvs/Mahilet%20Mediwifery.jpg',
      type: 'image',
    },
    {
      id: 'accounting',
      title: 'Accounting CV',
      description: 'Designed for finance and accounting roles with a structured, professional look.',
      thumbnail: '/cvs/Meti%20accounting.jpg',
      fullImage: '/cvs/Meti%20accounting.jpg',
      type: 'image',
    },
    {
      id: 'accounting-alt',
      title: 'Modern Accounting CV',
      description: 'A modern take on accounting CVs, ideal for corporate finance roles.',
      thumbnail: '/cvs/accounting%20cv.jpg',
      fullImage: '/cvs/accounting%20cv.jpg',
      type: 'image',
    },
    {
      id: 'technical',
      title: 'Technical CV',
      description: 'Perfect for IT and technical roles with a sleek, modern layout.',
      thumbnail: '/cvs/Alazer%20adisu.jpg',
      fullImage: '/cvs/Alazer%20adisu.jpg',
      type: 'image',
    },
    {
      id: 'finance',
      title: 'Finance CV',
      description: 'Structured for finance and accounting internships with a professional aesthetic.',
      thumbnail: '/cvs/Temam%20Nagawo%20acc.jpg',
      fullImage: '/cvs/Temam%20Nagawo%20acc.jpg',
      type: 'image',
    },
    {
      id: '2025-cv',
      title: 'Futuristic CV',
      description: 'A cutting-edge design for forward-thinking professionals in any industry.',
      thumbnail: '/cvs/2025%20cv%20(1)-thumb.jpg',
      pdf: '/cvs/2025%20cv%20(1).pdf',
      type: 'pdf',
      placeholder: 'https://via.placeholder.com/300x400?text=PDF+Preview',
    },
    {
      id: 'updated-professional',
      title: 'Updated Professional CV',
      description: 'Refined design for experienced students seeking competitive roles.',
      thumbnail: '/cvs/Abel%20Adisu%20updated%20cv-thumb.jpg',
      pdf: '/cvs/Abel%20Adisu%20updated%20cv.pdf',
      type: 'pdf',
      placeholder: 'https://via.placeholder.com/300x400?text=PDF+Preview',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      feedback: 'My CV went from average to outstanding! Landed my first internship thanks to your help.',
    },
    {
      name: 'James K.',
      feedback: 'The ATS optimization made a huge difference. Got callbacks from top companies!',
    },
  ];

  const [selectedDesign, setSelectedDesign] = useState(null);

  const openModal = (design) => setSelectedDesign(design);
  const closeModal = () => setSelectedDesign(null);

  // Handle Esc key to close modal
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="cv-services" className="relative bg-gray-900 py-16 sm:py-24 overflow-hidden">
      {/* Animated Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-pulse-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-text">CV Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Launch your career with a standout CV tailored for students and young professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {cvServices.map((service, index) => (
            <div
              key={service.title}
              className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-600/20 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)] group perspective-1000 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-z-8 group-hover:rotate-x-5 group-hover:rotate-y-5">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-6">{service.description}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient animate-border-flow pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CV Designs Gallery */}
        <div className="text-center mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-text">CV Designs</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {cvDesigns.map((design, index) => (
              <div
                key={design.id}
                className="relative bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-600/20 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)] group perspective-1000 animate-slide-in cursor-pointer min-h-0"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openModal(design)}
              >
                <div className="relative transform transition-transform duration-500 group-hover:-translate-z-8 group-hover:rotate-x-5 group-hover:rotate-y-5">
                  <img
                    src={design.thumbnail || design.placeholder}
                    alt={design.title}
                    className="w-full h-48 sm:h-72 object-contain rounded-t-2xl z-10 bg-gray-700/50"
                    onError={(e) => {
                      console.error(`Failed to load image: ${design.thumbnail || design.placeholder}, Type: ${design.type}, ID: ${design.id}`);
                      e.target.src = 'https://via.placeholder.com/300x400?text=Image+Missing';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-3 sm:p-4 z-20">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1 text-shadow-sm">{design.title}</h4>
                    <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 text-shadow-sm">{design.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient animate-border-flow pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="text-center mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Students Say</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_8px_25px_rgba(0,0,0,0.5)] animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <p className="text-gray-300 text-xs sm:text-sm italic mb-4">"{testimonial.feedback}"</p>
                <p className="text-cyan-400 font-semibold text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <a
            href="https://t.me/Abelo_73"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_5px_15px_rgba(34,211,238,0.7)] hover:shadow-[0_8px_20px_rgba(34,211,238,0.9)] hover:-translate-y-1 text-base sm:text-lg animate-pulse-button"
            aria-label="Book a CV consultation via Telegram"
          >
            Book Your CV Consultation Now
          </a>
        </div>
      </div>

      {/* Modal for CV Design Preview */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-cyan-400"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{selectedDesign.title}</h3>
            {selectedDesign.type === 'image' ? (
              <img
                src={selectedDesign.fullImage}
                alt={selectedDesign.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-4 z-10"
                onError={(e) => {
                  console.error(`Failed to load full image: ${selectedDesign.fullImage}, ID: ${selectedDesign.id}`);
                  e.target.src = 'https://via.placeholder.com/300x400?text=Image+Missing';
                }}
              />
            ) : (
              <div className="mb-4">
                <img
                  src={selectedDesign.thumbnail || selectedDesign.placeholder}
                  alt={selectedDesign.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-2 z-10"
                  onError={(e) => {
                    console.error(`Failed to load thumbnail: ${selectedDesign.thumbnail || selectedDesign.placeholder}, ID: ${selectedDesign.id}`);
                    e.target.src = 'https://via.placeholder.com/300x400?text=Image+Missing';
                  }}
                />
                <a
                  href={selectedDesign.pdf}
                  download
                  className="inline-block bg-gray-600 text-white py-2 px-4 rounded-lg text-sm"
                  aria-label={`Download ${selectedDesign.title} PDF`}
                >
                  Download PDF Preview
                </a>
              </div>
            )}
            <p className="text-gray-300 text-xs sm:text-sm mb-6">{selectedDesign.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/Abelo_73"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_5px_15px_rgba(34,211,238,0.7)] hover:shadow-[0_8px_20px_rgba(34,211,238,0.9)] hover:-translate-y-1 text-sm"
                aria-label={`Request ${selectedDesign.title} via Telegram`}
              >
                <FaTelegramPlane className="w-5 h-5 mr-2" />
                Telegram (@Abelo_73)
              </a>
              <a
                href="https://www.instagram.com/abelo_73"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_5px_15px_rgba(236,72,153,0.7)] hover:shadow-[0_8px_20px_rgba(236,72,153,0.9)] hover:-translate-y-1 text-sm"
                aria-label={`Request ${selectedDesign.title} via Instagram`}
              >
                <FaInstagram className="w-5 h-5 mr-2" />
                Instagram (abelo_73)
              </a>
              <a
                href="tel:+251934777843"
                className="flex items-center bg-gray-600 text-white py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] hover:-translate-y-1 text-sm"
                aria-label={`Call to request ${selectedDesign.title}`}
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call: +251934777843
              </a>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
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
          .animate-slide-in {
            animation: slide-in 0.8s ease-out forwards;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
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
          .perspective-1000 {
            perspective: 1000px;
          }
          .border-gradient {
            border-image: linear-gradient(to right, #22d3ee, #2563eb) 1;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .text-shadow-sm {
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </section>
  );
};

export default CVServices;