import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900  text-white shadow-md py-4 px-8 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-400">DEV</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-purple-400 transition">
          Home
        </a>
        <a href="#about" className="hover:text-purple-400 transition">
          About
        </a>
        <a href="#skill" className="hover:text-purple-400 transition">
          Skill
        </a>
        <a href="#contact" className="hover:text-purple-400 transition">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-0 w-full bg-gray-900 shadow-lg flex flex-col items-center py-6 space-y-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#home"
              className="text-lg hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            <a
              href="#skill"
              className="text-lg hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Skill
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
