import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(getTestimonialsPerPage());
  const touchStartX = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {

        // const backendUrl = process.env.REACT_APP_API_URL || 'https://portfolio-backend-2025-wddu.onrender.com';
        // const response = await fetch('http://localhost:8080/api/testimonials');
        // const response = await fetch(`${backendUrl}/api/testimonials`);
        const response = await fetch('https://portfolio-backend-2025-wddu.onrender.com/api/testimonials')
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(getTestimonialsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getTestimonialsPerPage() {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  const maxIndex = Math.ceil(testimonials.length / testimonialsPerPage) - 1;

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
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
    if (diff > 50) handleNext(); // swipe left
    else if (diff < -50) handlePrev(); // swipe right
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 animate-glow">
          What People Say
        </h2>

        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id || index}
                className={`w-full transition-all duration-700 ease-in-out ${
                  direction === 'right'
                    ? 'animate-slide-in-right'
                    : direction === 'left'
                    ? 'animate-slide-in-left'
                    : 'opacity-100'
                }`}
              >
                <div className="relative bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-600/30 p-6 shadow-2xl transition-all duration-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] group perspective-1000">
                  <div className="transform transition-transform duration-500 group-hover:-translate-z-10 group-hover:rotate-x-10 group-hover:rotate-y-10">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || 'https://via.placeholder.com/150'}
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
                        <svg className="w-4 h-4 transform hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-4 h-4 transform hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.004.404 2.292-1.552 3.3-1.23 3.3-1.23.654 1.652.241 2.873.117 3.176.768.84 1.237 1.91 1.237 3.221 0 4.608-2.805 5.623-5.477 5.924.427.368.832 1.101.832 2.221v3.293c0 .317.192.692.798.574 4.771-1.588 8.211-6.085 8.211-11.388 0-6.627-5.373-12-12-12z" />
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

          {/* Dots for Pagination */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>


          {/* Navigation */}
          <div className="mt-8 flex justify-center space-x-4">
  <button
    onClick={handlePrev}
    className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
  >
    Prev
  </button>
  <button
    onClick={handleNext}
    className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
  >
    Next
  </button>
</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
