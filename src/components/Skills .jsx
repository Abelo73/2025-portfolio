// src/components/Skills.js
import { useState, useEffect } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" />, proficiency: 85 },
      { name: "Python", icon: <FaPython className="text-yellow-400" />, proficiency: 80 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" />, proficiency: 90 },
      { name: "C++", icon: <FaDatabase className="text-blue-400" />, proficiency: 75 },
    ],
  },
  {
    category: "Web Dev",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" />, proficiency: 95 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, proficiency: 85 },
      { name: "HTML", icon: <span className="text-orange-500 font-bold">HTML</span>, proficiency: 90 },
      { name: "CSS", icon: <span className="text-blue-500 font-bold">CSS</span>, proficiency: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: <FaDatabase className="text-green-400" />, proficiency: 80 },
      { name: "MySQL", icon: <FaDatabase className="text-blue-500" />, proficiency: 85 },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500" />, proficiency: 80 },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-300" />, proficiency: 75 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, proficiency: 90 },
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, proficiency: 80 },
      { name: "Linux", icon: <FaLinux className="text-gray-400" />, proficiency: 85 },
      { name: "REST API", icon: <span className="text-yellow-400 font-bold">API</span>, proficiency: 90 },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for dropdown
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-mono"
    >
      {/* Animated Neon Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-pulse-bg pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%2322d3ee%22 d=%22M0 0h40v1H0zM0 0v40h1V0z%22/%3E%3C/svg%3E')]" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 animate-slide-in">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-text">Skills</span>
        </h2>

        {/* Tabs (Nav Bar or Dropdown) */}
        {isMobile ? (
          <select
            className="w-full max-w-[90vw] mx-auto bg-white/10 backdrop-blur-md text-white p-3 rounded-lg border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            aria-label="Select skill category"
          >
            {skillsData.map((tab) => (
              <option key={tab.category} value={tab.category} className="bg-gray-900 text-white">
                {tab.category}
              </option>
            ))}
          </select>
        ) : (
          <div
            className="w-full max-w-[90vw] sm:max-w-4xl mx-auto flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto"
            role="tablist"
          >
            {skillsData.map((tab, index) => (
              <button
                key={tab.category}
                className={`relative px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_8px_20px_rgba(34,211,238,0.7)] rounded-lg"
                    : "bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20 rounded-lg"
                }`}
                onClick={() => setActiveTab(tab.category)}
                role="tab"
                aria-selected={activeTab === tab.category}
                aria-label={`View ${tab.category} skills`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-animate="slide-in"
              >
                <span className="relative z-10">{tab.category}</span>
                {activeTab === tab.category && (
                  <span className="absolute inset-0 rounded-lg animate-neon-glow" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Skill Orbs */}
        <div className="w-full max-w-[90vw] sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillsData
            .find((skillCategory) => skillCategory.category === activeTab)
            ?.skills.map((skill, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center bg-gray-900/30 backdrop-blur-md rounded-full p-6 sm:p-8 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(34,211,238,0.4)] group animate-orbit"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Orb Icon */}
                <div className="relative flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl animate-pulse">{skill.icon}</div>
                  <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gradient animate-border-flow" />
                </div>
                {/* Skill Name */}
                <h3 className="text-white text-sm sm:text-base font-semibold mt-4 text-center">
                  {skill.name}
                </h3>
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-700/80 backdrop-blur-md text-white text-xs p-2 rounded-lg">
                  {skill.name}: {skill.proficiency}% Proficiency
                </div>
              </div>
            ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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
          @keyframes gradient-text {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
          @keyframes neon-glow {
            0%, 100% {
              box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
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
          @keyframes orbit {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
            100% {
              transform: translateY(0) rotate(0deg);
            }
          }
          .animate-slide-in {
            animation: slide-in 0.6s ease-out forwards;
          }
          .animate-pulse-bg {
            animation: pulse-bg 8s ease-in-out infinite;
          }
          .animate-gradient-text {
            background-size: 200% auto;
            animation: gradient-text 4s linear infinite;
          }
          .animate-neon-glow {
            animation: neon-glow 2s ease-in-out infinite;
          }
          .animate-orbit {
            animation: orbit 4s ease-in-out infinite;
          }
          .border-gradient {
            border-image: linear-gradient(to right, #22d3ee, #2563eb) 1;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;