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
  { Icon: FaJava, color: "#f89820", name:"Java" },
  { Icon: SiSpringboot, color: "#6db33f", name:"Spring boot" },
  { Icon: SiReact, color: "#61dafb", name:"React" },
  { Icon: SiDocker, color: "#2496ed", name:"Docker" },
  { Icon: SiMysql, color: "#00758f", name:"Mysql" },
  { Icon: SiLinux, color: "#fcc624" , name:"Linux"},
  { Icon: SiPostman, color: "#ff6c37", name:"Postman" },
  { Icon: SiGit, color: "#f34f29", name:"Git" },
];

const AboutMe = () => {
  const starAnimation = {
    animation: "starAnimation 100s infinite linear",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('https://cdn.pixabay.com/photo/2017/08/30/23/09/starry-sky-2695561_960_720.jpg') center center no-repeat",
    backgroundSize: "cover",
    zIndex: "-1",
  };

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center bg-[#111] text-white p-10 overflow-hidden mt-20 sm:mt-32"
      style={{
        perspective: "1500px",
        position: "relative",
      }}
    >
      {/* Starry background */}
      <div style={starAnimation}></div>

      <motion.h2
        className="text-4xl font-bold text-center mb-8 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-start max-w-3xl mx-auto z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg mb-6">
          I'm a passionate Software Engineer, focused on building full-stack
          applications with technologies like **Java**, **Spring Boot**, and **React**. I love solving problems and creating smooth user experiences.
        </p>
        <p className="text-lg mb-6">
          In my free time, I enjoy experimenting with new technologies, working on side projects, and contributing to open-source. When I'm not coding, I like reading or exploring the outdoors.
        </p>
      </motion.div>

      {/* Tech Skills */}
      <div className="mt-16 w-full flex justify-center items-center z-10">
        <motion.div
          className="grid grid-cols-4 gap-8 max-w-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {techIcons.map(({ Icon, color, name}, index) => (
            <motion.div
              key={index}
              className="text-center transform hover:scale-110 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
            >
              <motion.div
                className="bg-[#222] p-4 rounded-full shadow-xl"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <Icon style={{ fontSize: "30px", color }} />
              </motion.div>
              <p className="mt-2 text-sm text-gray-400">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden rounded-sm border-cyan-400"
      style={{
        perspective: "1300px",
        cursor:"pointer",
      }}
    >
      <AboutMe />
    </section>
  );
};

export default About;
