import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-400 mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <p className="text-lg text-gray-300 mb-6">Let's build something great!</p>

      <motion.a
        href="mailto:youremail@example.com"
        className="inline-flex items-center bg-purple-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-600 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Email Me
      </motion.a>
    </section>
  );
};

export default Contact;
