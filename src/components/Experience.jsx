import { motion } from "framer-motion";
import { FaLaptopCode, FaBuilding, FaClock } from "react-icons/fa";
import "./styles.css"

const experienceData = [
  {
    company: "Atlas Computer Technology",
    position: "Software Developer",
    duration: "Sep 2023 - May 2024",
    description: "Working on various software development projects, focusing on building and maintaining applications for clients in different sectors. Involved in full-stack development, debugging, and optimization of systems.",
    icon: FaLaptopCode,
  },
  {
    company: "Wollega University",
    position: "Intern",
    duration: "Jun 2021 - Dec 2021",
    description: "Worked as a software development intern, assisting in the development and testing of software solutions. Gained experience in database management, debugging, and code documentation.",
    icon: FaBuilding,
  },
  {
    company: "Freelancer",
    position: "Web Developer",
    duration: "Mar 2020 - May 2021",
    description: "Developed and maintained websites for small businesses and individuals. Worked with HTML, CSS, JavaScript, and React to deliver responsive and user-friendly web experiences.",
    icon: FaLaptopCode,
  },
];

const Experience = () => {
  return (
    <section className="experience-timeline py-20 px-6 sm:px-8 md:px-10  text-white min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        My Experience Timeline
      </h2>

      <div className="relative">
        {/* Vertical Line for Timeline */}
        <div className="absolute w-1 bg-gradient-to-b from-indigo-600 to-pink-600 left-0 transform translate-x-1/2 h-full"></div>

        {/* Experience Items */}
        <div className="flex flex-col items-start space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item relative w-5/6 sm:w-4/5 md:w-2/3 lg:w-1/2 p-8 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-3d hover:shadow-2xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {/* Circular Icon */}
              <motion.div
                className="absolute left-[-30px] top-[-20px] bg-gradient-to-r from-indigo-600 to-pink-600 w-16 h-16 flex items-center justify-center rounded-full shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="text-white text-3xl" />
              </motion.div>

              {/* Content */}
              <div className="text-start ml-[60px]">
                <h3 className="text-2xl font-semibold text-gray-100">{item.position}</h3>
                <p className="text-lg text-gray-300 mb-2">{item.company}</p>
                <p className="text-sm text-gray-500">
                  <FaClock className="inline-block mr-2" />
                  {item.duration}
                </p>
                <p className="text-gray-300 mt-4">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
