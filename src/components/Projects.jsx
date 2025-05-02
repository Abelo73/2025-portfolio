import React from 'react';

const projects = [
  {
    title: 'AI Summarizing Website',
    description: 'A website built with React that uses OpenAI to summarize content from a URL. Users input a URL, and the website summarizes the content using OpenAI API.',
    techStack: ['React', 'OpenAI API', 'Vercel'],
    liveLink: 'https://ai-sumrizer.vercel.app/',
    codeLink: 'https://github.com/Abelo73/Summarize-Open-Api',
    image: '/projects/Screenshot 2025-05-02 112432.png',
  },
  {
    title: 'Game Hub',
    description: 'A modern movie website with UI built for filtering and searching. Developed with React, TypeScript, and Tailwind CSS for a smooth and interactive user experience.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://game-hub-abelo73s-projects.vercel.app/',
    codeLink: 'https://github.com/Abelo73/game-hub',
    image: '/projects/Screenshot 2025-05-02 112047.png',
  },
  {
    title: 'JWT Security Backend',
    description: 'A backend built with Java Spring Boot to handle security using JWT. It includes features like user registration, authentication, and authorization for secure access.',
    techStack: ['Java Spring Boot', 'JWT', 'Spring Security'],
    liveLink: '', // No live link available
    codeLink: 'https://github.com/Abelo73/jwtSecurity2024',
    image: 'https://via.placeholder.com/500x300?text=JWT+Security',
  },  {
    title: 'JWT Security Backend',
    description: 'A backend built with Java Spring Boot to handle security using JWT. It includes features like user registration, authentication, and authorization for secure access.',
    techStack: ['Java Spring Boot', 'JWT', 'Spring Security'],
    liveLink: '', // No live link available
    codeLink: 'https://github.com/Abelo73/jwtSecurity2024',
    image: 'https://via.placeholder.com/500x300?text=JWT+Security',
  },
  {
    title: 'Automation UI Testing',
    description: 'Developed automated UI test suites using Selenium, Java Spring Boot, Docker, and executed tests across Linux environments.',
    techStack: ['Java', 'Selenium', 'Spring Boot', 'Docker', 'Linux'],
    liveLink: 'https://your-vercel-link.com',
    codeLink: 'https://github.com/your-repo-link',
    image: 'https://via.placeholder.com/500x300?text=UI+Automation+Testing',
  },
  {
    title: 'Dashboard Admin Panel',
    description: 'Designed an admin dashboard using React, Tailwind CSS, and TypeScript with dynamic charts and CRUD operations connected to MongoDB.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    liveLink: 'https://your-vercel-link.com',
    codeLink: 'https://github.com/your-repo-link',
    image: '/projects/Screenshot 2025-04-05 145700.png',
  },
];

const Projects = () => {
  const handleLinkClick = (link) => {
    if (!link || link === '' || link === '#') {
      alert('This project does not have a live demo available.');
      return;
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 animate-glow">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-600/30 p-6 shadow-2xl transition-all duration-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] group animate-slide-up perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="transform transition-transform duration-500 group-hover:-translate-z-10 group-hover:rotate-x-10 group-hover:rotate-y-10">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-lg font-bold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-cyan-100 text-xs px-3 py-1 rounded-full group-hover:scale-110 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleLinkClick(project.liveLink)}
                    className="flex-1 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-110 transition-transform duration-300"
                  >
                    Live
                  </button>
                  <button
                    onClick={() => handleLinkClick(project.codeLink)}
                    className="flex-1 text-center bg-gray-700/60 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-110 transition-transform duration-300"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default Projects;