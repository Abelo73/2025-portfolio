import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronDown, Instagram } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  {
    label: "More",
    dropdown: [
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },

      { href: "#service", label: "Service" },
      { href: "#cv-services", label: "CV Service" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#testimonialForm", label: "Submit Feedback" },
    ],
  },
];

const socialLinks = [
  { href: "https://t.me/Abelo_73", label: "Telegram", icon: <FaTelegramPlane size={18} /> },
  { href: "https://www.instagram.com/abelo_73", label: "Instagram", icon: <Instagram size={18} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (index, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, transformOrigin: "top" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md text-white py-4 z-50 border-b border-gray-800"
      role="navigation"
      aria-label="Main navigation"
      onClick={handleOutsideClick}
    >
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-0  flex items-center justify-between">
        {/* Animated Radial Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-pulse-bg pointer-events-none opacity-50" />

        {/* Logo */}
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Abel
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-8" ref={dropdownRef}>
          {navLinks.map((link, index) => (
            <div key={link.href || link.label} className="relative">
              {link.dropdown ? (
                <motion.button
                  className="text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-1 group px-3 py-1 rounded-md hover:bg-gray-800/50"
                  onClick={(e) => handleDropdownToggle(index, e)}
                  onTouchStart={(e) => handleDropdownToggle(index, e)}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === index}
                  aria-label={`Toggle ${link.label} dropdown`}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""}`}
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ) : (
                <motion.a
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 group px-3 py-1 rounded-md hover:bg-gray-800/50"
                  onClick={handleLinkClick}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  aria-label={link.label}
                  aria-current={window.location.hash === link.href ? "page" : undefined}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              )}
              <AnimatePresence>
                {link.dropdown && openDropdown === index && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-800/50 py-2 z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    role="menu"
                  >
                    {link.dropdown.map((item, subIndex) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                        onClick={handleLinkClick}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        custom={subIndex}
                        aria-label={item.label}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Side: CV and Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/assets/Abel_Adisu_CV.pdf"
            download="Abel_Adisu_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm lg:text-base font-semibold hover:shadow-[0_8px_20px_rgba(34,211,238,0.7)] transition-all duration-300"
            onClick={handleLinkClick}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={navLinks.length}
            aria-label="Download CV"
          >
            <Download size={18} /> CV
          </motion.a>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
                onClick={handleLinkClick}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={navLinks.length + 1 + index}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-md border border-cyan-500/50 hover:bg-gray-700/50 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} className="text-cyan-400" />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden border-t border-gray-800/50 z-50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link, index) => (
                <div key={link.href || link.label} className="w-full text-center">
                  {link.dropdown ? (
                    <>
                      <motion.button
                        className="text-lg font-medium text-gray-300 hover:text-white transition-colors w-full py-2 flex justify-center items-center gap-2"
                        onClick={(e) => handleDropdownToggle(index, e)}
                        onTouchStart={(e) => handleDropdownToggle(index, e)}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === index}
                        aria-label={`Toggle ${link.label} dropdown`}
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""}`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            className="flex flex-col bg-gray-800/50 backdrop-blur-md w-full py-2 z-50"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {link.dropdown.map((item, subIndex) => (
                              <motion.a
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                                onClick={handleLinkClick}
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                                custom={subIndex}
                                aria-label={item.label}
                              >
                                {item.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="block text-lg font-medium text-gray-300 hover:text-white transition-colors py-2"
                      onClick={handleLinkClick}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      aria-label={link.label}
                    >
                      {link.label}
                    </motion.a>
                  )}
                </div>
              ))}
              <motion.a
                href="/assets/Abel_Adisu_CV.pdf"
                download="Abel_Adisu_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-lg font-semibold hover:shadow-[0_8px_20px_rgba(34,211,238,0.7)] transition-all duration-300"
                onClick={handleLinkClick}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={navLinks.length}
                aria-label="Download CV"
              >
                <Download size={18} /> Download CV
              </motion.a>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    onClick={handleLinkClick}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={navLinks.length + 1 + index}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>
        {`
          @keyframes pulse-bg {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 0.5; }
          }
          @keyframes pulse-logo {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(34, 211, 238, 0.5)); }
            50% { filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.8)); }
          }
          .animate-pulse-bg {
            animation: pulse-bg 8s ease-in-out infinite;
          }
          .animate-pulse-logo {
            animation: pulse-logo 2s ease-in-out infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;