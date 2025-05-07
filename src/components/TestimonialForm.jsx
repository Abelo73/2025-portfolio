import React, { useState } from 'react';
import axios from 'axios';

const TestimonialForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null, // Change to null to store the file
    name: '',
    role: '',
    quote: '',
    linkedin: '',
    github: '',
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      image: null, // Reset the image
      name: '',
      role: '',
      quote: '',
      linkedin: '',
      github: '',
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      // If the image is selected, store the file in the form data
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Testimonial submitted:', formData);
  
    const data = new FormData();
    data.append('image', formData.image);
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('quote', formData.quote);
    data.append('linkedin', formData.linkedin);
    data.append('github', formData.github);
  
    // const backendUrl = process.env.REACT_APP_API_URL;
    
    axios.post(`https://portfolio-backend-2025-wddu.onrender.com/api/testimonials`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('Response from server:', response.data);
        handleCloseModal();
        alert('Testimonial submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting testimonial:', error);
        alert('Failed to submit testimonial.');
      });
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Testimonial submitted:', formData);

  //   const data = new FormData();
  //   data.append('image', formData.image); // Append image file
  //   data.append('name', formData.name);
  //   data.append('role', formData.role);
  //   data.append('quote', formData.quote);
  //   data.append('linkedin', formData.linkedin);
  //   data.append('github', formData.github);

  //   const backendUrl = ${process.env.REACT_APP_API_URL}
  //   // Send the form data to the backend using Axios
  //   axios.post(`${backendUrl}/api/testimonials`, data, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data', // Set correct content type
  //     },
  //   })
  //     .then((response) => {
  //       console.log('Response from server:', response.data);
  //       handleCloseModal();
  //       // Optionally show a success message to the user
  //     })
  //     .catch((error) => {
  //       console.error('Error submitting testimonial:', error);
  //       // Optionally show an error message to the user
  //     });
  // };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.7)] hover:scale-110 transition-transform duration-300 z-50 animate-pulse"
        aria-label="Add Testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="relative bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-600/30 p-6 sm:p-8 shadow-2xl w-full max-w-[90%] sm:max-w-lg mx-4 transition-all duration-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] perspective-1000 animate-slide-up"
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-z-10 group-hover:rotate-x-10 group-hover:rotate-y-10">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4 text-center">
                Share Your Testimonial
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="image"
                    className="block text-xs text-start text-gray-300 mb-1"
                  >
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-xs sm:text-sm"
                    accept="image/*" // Optional: restrict to image files
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-xs text-start text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-xs sm:text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="role"
                    className="block text-xs text-start text-gray-300 mb-1"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-xs sm:text-sm"
                    placeholder="Your Role"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="quote"
                    className="block text-xs text-start text-gray-300 mb-1"
                  >
                    Testimonial
                  </label>
                  <textarea
                    id="quote"
                    name="quote"
                    value={formData.quote}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-y text-xs sm:text-sm"
                    placeholder="Your Testimonial"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="linkedin"
                    className="block text-xs text-start text-gray-300 mb-1"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-xs sm:text-sm"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="github"
                    className="block text-xs text-start text-gray-300 mb-1"
                  >
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-xs sm:text-sm"
                    placeholder="https://github.com/your-profile"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.7)] text-xs sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-700/50 text-white py-2 rounded-lg hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
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
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 15px rgba(34, 211, 238, 0.7);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.9);
            }
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
        `}
      </style>
    </>
  );
};

export default TestimonialForm;
