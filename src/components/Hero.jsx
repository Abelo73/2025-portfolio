// src/components/Hero.js
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaJava, FaCircle } from "react-icons/fa";
import {
  SiSpringboot,
  SiReact,
  SiDocker,
  SiMysql,
  SiLinux,
  SiPostman,
  SiGit,
} from "react-icons/si";

// Tech icons with their brand colors
const techIcons = [
  { Icon: FaJava, color: "#f89820" },
  { Icon: SiSpringboot, color: "#6db33f" },
  { Icon: SiReact, color: "#61dafb" },
  { Icon: SiDocker, color: "#2496ed" },
  { Icon: SiMysql, color: "#00758f" },
  { Icon: SiLinux, color: "#fcc624" },
  { Icon: SiPostman, color: "#ff6c37" },
  { Icon: SiGit, color: "#f34f29" },
];

const Terminal = () => {
  const [output, setOutput] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const terminalRef = useRef(null);

  const commands = [
    "~ Initializing system...",
    "~ Loading dependencies...",
    "~ Starting server...",
    "~ Connected to localhost",
    "~ Fetching projects...",
    "~ Projects loaded successfully!",
    "~ Run 'npm start' to launch 🚀",
  ];

  useEffect(() => {
    if (commandIndex >= commands.length) return;

    if (charIndex < commands[commandIndex].length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => prev + commands[commandIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setOutput((prev) => prev + "\n");
        setCommandIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 50);
    }
  }, [commandIndex, charIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div
      className="w-full max-w-2xl bg-[#000000] text-green-400 font-mono p-4 rounded-lg shadow-lg border border-gray-700 relative mt-10"
      style={{
        transform: "perspective(1000px) rotateX(15deg) rotateY(-10deg)",
        boxShadow: "10px 20px 40px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex items-center px-4 rounded-t-lg">
        <div className="flex items-center">
          <FaCircle className="text-red-500 mr-2 text-xs" />
          <FaCircle className="text-yellow-500 mr-2 text-xs" />
          <FaCircle className="text-green-500 text-xs" />
        </div>
        <span className="ml-4 text-gray-400 text-xs">abeladisu@portfolio: ~</span>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="mt-6 h-56 overflow-y-auto whitespace-pre text-left pr-2 pt-6"
      >
        {output}
        {commandIndex >= commands.length && (
          <div className="flex">
            <span>#</span>
            <span className="animate-blink"> █</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Animated Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-pulse-bg pointer-events-none" />

      {/* Rotating Icons */}
      <motion.div
        className="absolute flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {techIcons.map(({ Icon, color }, index) => {
          const angle = (index / techIcons.length) * (2 * Math.PI);
          const radius = 220; // Distance from center

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                fontSize: "20px",
                color: color,
                left: `${radius * Math.cos(angle)}px`,
                top: `${radius * Math.sin(angle)}px`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Hero Content */}
      <div className="relative text-center px-4 sm:px-6 z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I'm Abel Adisu
        </motion.h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
          Full-Stack Developer specialized in Java, Spring Boot, React, Tailwind CSS, Node.js, and more.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-base sm:text-lg font-semibold transition-transform duration-300 hover:shadow-[0_8px_20px_rgba(34,211,238,0.7)]"
            aria-label="Explore My Work"
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="/cvs/AbelCV.pdf"
            download="AbelCV.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg shadow-lg text-base sm:text-lg font-semibold transition-transform duration-300 border border-white/20 hover:bg-white/20 hover:shadow-[0_8px_20px_rgba(34,211,238,0.7)]"
            aria-label="Download My CV"
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* Terminal Effect */}
      <Terminal />
    </section>
  );
};

export default Hero;