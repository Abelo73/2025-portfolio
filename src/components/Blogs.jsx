// src/components/Blogs.js
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Building a Scalable Backend with Spring Boot and Kafka",
    summary: "Learn how to architect a high-performance backend using Spring Boot and Kafka for real-time data processing.",
    link: "/blogs/scalable-backend",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Creating a Telegram Bot with Python Rasa",
    summary: "A step-by-step guide to building an interactive Telegram bot using Python Rasa for natural language processing.",
    link: "/blogs/telegram-bot",
    date: "2025-03-20",
  },
  {
    id: 3,
    title: "Mastering React with TypeScript and Tailwind CSS",
    summary: "Tips and tricks for building modern, type-safe React applications with Tailwind CSS for rapid styling.",
    link: "/blogs/react-typescript",
    date: "2025-02-10",
  },
];

const Blogs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section
      id="blogs"
      className="relative py-16 bg-gray-900 min-h-screen z-10"
      role="region"
      aria-labelledby="blogs-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-pulse-bg pointer-events-none opacity-50 z-0" />
        <motion.h2
          id="blogs-heading"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blogs
        </motion.h2>
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:shadow-[0_8px_20px_rgba(34,211,238,0.7)] transition-all duration-300 z-10"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                {/* <Link
                  to={post.link}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold hover:shadow-[0_8px_20px_rgba(34,211,238,0.7)] transition-all duration-300"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                </Link> */}
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300 text-center">No blog posts available.</p>
        )}
      </div>
      <style>
        {`
          @keyframes pulse-bg {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 0.5; }
          }
          .animate-pulse-bg {
            animation: pulse-bg 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Blogs;