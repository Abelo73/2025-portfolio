import React, { useState, useRef } from 'react';

const testimonials = [
  {
    name: 'Atsede Tesfaye',
    role: 'HR',
    quote: 'Working with this team was a game-changer! Their attention to detail and innovative approach made the project a huge success.',
    image: '/testimoinals/Asuye.jpg',
    linkedin: 'https://www.linkedin.com/in/jane-doe',
    github: 'https://github.com/janedoe',
  },
  {
    name: 'Abel Adisu',
    role: 'Java Developer',
    quote: 'The AI Summarizing Website delivered beyond expectations. It’s intuitive, fast, and incredibly useful for our users.',
    image: '/testimoinals/Abel Adisu IMAGE.JPG',
    linkedin: 'https://www.linkedin.com/in/john-smith',
    github: 'https://github.com/johnsmith',
  },
  {
    name: 'Emily Chen',
    role: 'Backend Engineer',
    quote: 'The JWT Security Backend was seamlessly integrated and robust. It’s a testament to their expertise in secure systems.',
    image: 'https://via.placeholder.com/100?text=Emily',
    linkedin: 'https://www.linkedin.com/in/emily-chen',
    github: 'https://github.com/emilychen',
  },
  {
    name: 'Michael Brown',
    role: 'UI/UX Designer',
    quote: 'The Dashboard Admin Panel’s design is sleek and user-friendly. It made our workflow so much smoother!',
    image: 'https://via.placeholder.com/100?text=Michael',
    linkedin: 'https://www.linkedin.com/in/michael-brown',
    github: 'https://github.com/michaelbrown',
  },
  {
    name: 'Sarah Lee',
    role: 'DevOps Engineer',
    quote: 'The automation testing setup was flawless. It saved us countless hours and improved our deployment pipeline.',
    image: 'https://via.placeholder.com/100?text=Sarah',
    linkedin: 'https://www.linkedin.com/in/sarah-lee',
    github: 'https://github.com/sarahlee',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // For slide direction
  const touchStartX = useRef(null);

  const getTestimonialsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3; // Large screens: 3 testimonials
    if (width >= 640) return 2; // Medium screens: 2 testimonials
    return 1; // Small screens: 1 testimonial
  };

  const testimonialsPerPage = getTestimonialsPerPage();
  const maxIndex = Math.ceil(testimonials.length / testimonialsPerPage) - 1;

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext(); // Swipe left
    } else if (diff < -50) {
      handlePrev(); // Swipe right
    }
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 animate-glow">
          What People Say
        </h2>
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-700 ease-in-out ${
                  direction === 'right'
                    ? 'animate-slide-in-right'
                    : direction === 'left'
                    ? 'animate-slide-in-left'
                    : 'opacity-100'
                }`}
              >
                <div
                  className="relative bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-600/30 p-6 shadow-2xl transition-all duration-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] group perspective-1000"
                >
                  <div className="transform transition-transform duration-500 group-hover:-translate-z-10 group-hover:rotate-x-10 group-hover:rotate-y-10">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-lg object-cover mr-4 border-2 border-cyan-500/50 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-cyan-300">{testimonial.name}</h3>
                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex gap-4">
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/icon"
                      >
                        <svg
                          className="w-8 h-8 transform hover:scale-125 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.955-2.462-2.216-2.462-1.261 0-2.284 1.125-2.284 2.462v5.604h-3v-11h3v1.547c.421-.652 1.447-1.547 3-1.547 2.209 0 4 1.791 4 4v7z" />
                        </svg>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-10 bg-gray-800/90 text-xs text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          LinkedIn
                        </span>
                      </a>
                      <a
                        href={testimonial.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/icon"
                      >
                        <svg
                          className="w-8 h-8 transform hover:scale-125 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-10 bg-gray-800/90 text-xs text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          GitHub
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.7)]"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 shadow-[0_0_5px_rgba(34,211,238,0.5)] ${
                    index === currentIndex
                      ? 'bg-cyan-500 scale-125 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                      : 'bg-gray-500/50 hover:bg-gray-400/80'
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.7)]"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
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
          .animate-slide-in-right {
            animation: slide-in-right 0.7s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.7s ease-out forwards;
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

export default Testimonials;