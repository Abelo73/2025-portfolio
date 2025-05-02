import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const Terminal = () => {
  const [output, setOutput] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const terminalRef = useRef(null);

  const commands = [
    "Initializing system...",
    "Loading dependencies...",
    "Starting server...",
    "Connected to localhost",
    "Fetching projects...",
    "Projects loaded successfully!",
    "Run 'npm start' to launch 🚀",
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
      }, 500);
    }
  }, [commandIndex, charIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="w-full max-w-2xl bg-[#1e1e1e] text-green-400 font-mono p-4 rounded-lg shadow-lg border border-gray-700 relative mt-10">
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex items-center px-4 rounded-t-lg">
        <motion.div
          animate={{ rotate: commandIndex < commands.length ? 360 : 0 }}
          transition={{ duration: 1, repeat: commandIndex < commands.length ? Infinity : 0, ease: "linear" }}
          className="flex items-center"
        >
          <FaCircle className="text-red-500 mr-2 text-xs" />
          <FaCircle className="text-yellow-500 mr-2 text-xs" />
          <FaCircle className="text-green-500 text-xs" />
        </motion.div>
        <span className="ml-4 text-gray-400 text-xs">abeladisu@portfolio: ~</span>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="mt-6 h-32 overflow-y-auto whitespace-pre text-left pr-2 pt-6">
        {output}
        {commandIndex >= commands.length && (
          <span className="animate-blink">█</span> // ✅ Keeps blinking cursor
        )}
      </div>
    </div>
  );
};

export default Terminal;
