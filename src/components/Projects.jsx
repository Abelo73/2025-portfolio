import React from 'react';

const projects = [
    {
        title: 'AI Summarizing Website',
        description: 'A website built with React that uses OpenAI to summarize content from a URL. Users input a URL, and the website summarizes the content using OpenAI API.',
        techStack: ['React', 'OpenAI API', 'Vercel'],
        liveLink: 'https://ai-sumrizer.vercel.app/',
        codeLink: 'https://github.com/Abelo73/Summarize-Open-Api',
        image: '/projects/Screenshot 2025-05-02 112432.png', // Correct relative path to the image
      },  {
        title: 'Game Hub',
        description: 'A modern movie website with UI built for filtering and searching. Developed with React, TypeScript, and Tailwind CSS for a smooth and interactive user experience.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        liveLink: 'https://game-hub-abelo73s-projects.vercel.app/',
        codeLink: 'https://github.com/Abelo73/game-hub',
        image: '/projects/Screenshot 2025-05-02 112047.png', // Correct relative path to the image

        // image: 'https://drive.google.com/uc?export=view&id=1mhEBe5ztLta9FFe0uN9PWOuqjCaB9rFX', // Replace with actual image
      },
      {
        title: 'JWT Security Backend',
        description: 'A backend built with Java Spring Boot to handle security using JWT. It includes features like user registration, authentication, and authorization for secure access.',
        techStack: ['Java Spring Boot', 'JWT', 'Spring Security'],
        liveLink: '#', // You can add a live link here if available
        codeLink: 'https://github.com/Abelo73/jwtSecurity2024',
        image: 'https://via.placeholder.com/500x300?text=JWT+Security', // Replace with actual image
      },
  {
    title: 'Automation UI Testing',
    description: 'Developed automated UI test suites using Selenium, Java Spring Boot, Docker, and executed tests across Linux environments.',
    techStack: ['Java', 'Selenium', 'Spring Boot', 'Docker', 'Linux'],
    liveLink: 'https://your-vercel-link.com',
    codeLink: 'https://github.com/your-repo-link',
    image: 'https://via.placeholder.com/500x300?text=UI+Automation+Testing', // Add the image URL here
  },
  {
    title: 'Dashboard Admin Panel',
    description: 'Designed an admin dashboard using React, Tailwind CSS, and TypeScript with dynamic charts and CRUD operations connected to MongoDB.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    liveLink: 'https://your-vercel-link.com',
    codeLink: 'https://github.com/your-repo-link',
    image: '/projects/Screenshot 2025-04-05 145700.png', // Add the image URL here
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">🚀 Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div>
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="rounded-lg mb-4 w-full h-48 object-cover transition duration-300 ease-in-out hover:opacity-80"
                />
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#2c2c2c] text-sm px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg text-sm hover:opacity-80 transition"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-500 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
