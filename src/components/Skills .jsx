import { useState, useEffect } from "react";
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "C++", icon: <FaDatabase className="text-blue-400" /> },
    ],
  },
  {
    category: "Web Dev",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "HTML", icon: <span className="text-orange-500 font-bold">HTML</span> },
      { name: "CSS", icon: <span className="text-blue-500 font-bold">CSS</span> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: <FaDatabase className="text-green-400" /> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-300" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Linux", icon: <FaLinux className="text-gray-400" /> },
      { name: "REST API", icon: <span className="text-yellow-400 font-bold">API</span> },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming");
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  const terminalCommands = [
    "➜  ~ ls skills",
    ...skillsData.map((s) => `📂 ${s.category}`),
    "➜  ~ echo 'Use tabs to navigate!'",
  ];

  useEffect(() => {
    if (lineIndex < terminalCommands.length) {
      if (charIndex < terminalCommands[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + terminalCommands[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, currentLine]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 50);
        return () => clearTimeout(timeout);
      }
    } else {
      setTimeout(() => setShowSkills(true), 500);
    }
  }, [charIndex, lineIndex, currentLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skill" className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 px-6 md:px-16 font-mono">
      {/* Terminal Header */}
      <div className="w-full max-w-3xl bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-start">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <p className="text-sm">zsh - skills</p>
      </div>

      {/* Terminal Body */}
      <div className="w-full max-w-3xl h-72 bg-gray-800 p-6 rounded-b-lg shadow-lg overflow-hidden text-start">
        {displayedLines.map((line, index) => (
          <p key={index} className="text-white text-start">
            {line.includes("➜  ~") ? (
              <>
                <span className="text-yellow-400">➜  ~ </span>
                <span className="text-blue-400">{line.replace("➜  ~ ", "")}</span>
              </>
            ) : (
              line
            )}
          </p>
        ))}
        <p className="text-white">
          {currentLine}
          {showCursor && <span className="bg-green-400">&nbsp;</span>}
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-3xl flex justify-center mt-4 space-x-4">
        {skillsData.map((tab) => (
          <button
            key={tab.category}
            className={`px-4 py-2 rounded ${
              activeTab === tab.category ? "bg-green-500 text-black" : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.category}
          </button>
        ))}
      </div>

      {/* Skill Cards with Icons */}
      {showSkills && (
        <div className="w-full max-w-3xl mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillsData
            .find((skillCategory) => skillCategory.category === activeTab)
            ?.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="text-4xl">{skill.icon}</div>
                <p className="text-white mt-2">{skill.name}</p>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
