import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

// Add badges for each experience
// const experiences = [
//   {
//     role: 'Senior Backend Engineer',
//     company: 'FinTech Solutions',
//     companyUrl: 'https://www.fintechsolutions.com',
//     startDate: '2023-01-01',
//     endDate: 'Present', // Will be dynamically calculated
//     description:
//       'Design and implement scalable microservices for financial applications. Work closely with frontend teams and DevOps to ensure smooth CI/CD pipelines and secure API integrations.',
//     badges: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'AWS'],
//   },
//   {
//     role: 'Backend Developer',
//     company: 'E-Commerce Platform',
//     companyUrl: 'https://www.ecommerceplatform.com',
//     startDate: '2020-01-01',
//     endDate: '2023-12-31',
//     description:
//       'Built REST APIs and backend systems for an online store serving thousands of users daily. Optimized database queries and handled payment gateway integrations.',
//     badges: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'Stripe API'],
//   },
//   {
//     role: 'Junior Backend Developer',
//     company: 'Healthcare Tech',
//     companyUrl: 'https://www.healthcaretech.com',
//     startDate: '2018-01-01',
//     endDate: '2020-12-31',
//     description:
//       'Developed backend modules for patient management systems and implemented secure authentication flows using JWT.',
//     badges: ['PHP', 'Laravel', 'MySQL', 'JWT', 'REST API'],
//   },
//   {
//     role: 'Intern Backend Developer',
//     company: 'Startup Hub',
//     companyUrl: 'https://www.startuphub.com',
//     startDate: '2017-01-01',
//     endDate: '2018-12-31',
//     description:
//       'Assisted in building MVP backend services and learned best practices in API design, testing, and deployment.',
//     badges: ['Python', 'Django', 'SQLite', 'Git'],
//   },
// ];



// const experiences = [
//     {
//       role: 'Senior Backend Engineer',
//       company: 'FinTech Solutions',
//       companyUrl: 'https://www.fintechsolutions.com',
//       startDate: '2023-01-01',
//       endDate: 'Present', // Will be dynamically calculated
//       description:
//         'As a Senior Backend Engineer at FinTech Solutions, I lead the development of backend systems for a high-traffic financial platform. I design and implement scalable microservices using Spring Boot and Java, working closely with frontend teams to ensure seamless integration. I manage API design, performance optimization, and ensure security best practices are followed. I also mentor junior developers and collaborate with DevOps to streamline deployment pipelines.',
//       badges: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'AWS'],
//     },
//     {
//       role: 'Backend Developer',
//       company: 'E-Commerce Platform',
//       companyUrl: 'https://www.ecommerceplatform.com',
//       startDate: '2020-01-01',
//       endDate: '2023-12-31',
//       description:
//         'During my time as a Backend Developer at E-Commerce Platform, I was responsible for designing and developing RESTful APIs to handle the transactions and user data of millions of online customers. I worked with Node.js and Express to implement features such as real-time inventory updates and order processing. Additionally, I optimized database queries to improve the platform’s responsiveness, integrated third-party payment systems like Stripe, and ensured the security of customer data by implementing robust encryption techniques.',
//       badges: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'Stripe API'],
//     },
//     {
//       role: 'Junior Backend Developer',
//       company: 'Healthcare Tech',
//       companyUrl: 'https://www.healthcaretech.com',
//       startDate: '2018-01-01',
//       endDate: '2020-12-31',
//       description:
//         'As a Junior Backend Developer at Healthcare Tech, I contributed to the development of secure backend modules for patient management systems. I was responsible for implementing REST APIs that handled patient records, appointment scheduling, and medical history management. Additionally, I integrated secure authentication mechanisms using JWT to protect sensitive data and worked on performance tuning to ensure that the system could handle high volumes of healthcare data without compromising performance or security.',
//       badges: ['PHP', 'Laravel', 'MySQL', 'JWT', 'REST API'],
//     },
//     {
//       role: 'Intern Backend Developer',
//       company: 'Startup Hub',
//       companyUrl: 'https://www.startuphub.com',
//       startDate: '2017-01-01',
//       endDate: '2018-12-31',
//       description:
//         'I started my career as an Intern Backend Developer at Startup Hub, where I assisted in building MVP backend services for an early-stage e-commerce platform. I helped design APIs for product catalogs, user authentication, and order processing. During my internship, I gained hands-on experience with Python and Django, learned about version control with Git, and worked closely with senior developers to troubleshoot and optimize system performance.',
//       badges: ['Python', 'Django', 'SQLite', 'Git'],
//     },
//   ];


const experiences = [
    {
      role: 'Software Engineer',
      company: 'Atlas Computer Technology',
      companyUrl: 'https://www.act.com.et/',
      period: 'May 2024 — Present',
      startDate: '2024-09-01',
      endDate: new Date().toISOString().slice(0, 10),
      description:
        'Leading backend services development for large-scale mobile banking solutions. Designing scalable microservices, improving API performance, and collaborating with cross-functional teams including frontend and DevOps. Introducing code reviews and CI/CD practices to improve deployment flow.',
      badges: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'Docker', 'Kubernetes'],
    },
    {
      role: 'Junior Backend Developer',
      company: 'Atlas Computer Technology',
      companyUrl: 'https://www.act.com.et/',
      period: 'May 2023 — May 2024',
      startDate: '2024-03-01',
      endDate: '2024-08-01',
      description:
        'Built RESTful APIs for mobile apps and USSD banking systems. Integrated payment gateways, optimized database queries, and contributed to backend modules while learning Spring Boot microservices architecture and best practices.',
      badges: ['Java', 'Spring Boot', 'USSD', 'MySQL', 'REST API', 'Postman'],
    },
    {
      role: 'QA Engineer',
      company: 'Atlas Computer Technology',
      companyUrl: 'https://www.act.com.et/',
      period: 'Sep 2023 — May 2024',
      startDate: '2023-09-01',
      endDate: '2024-03-01',
      description:
        'Conducted functional, regression, and performance testing for banking software platforms. Designed automated test cases, executed manual testing, and collaborated with developers to improve software quality and defect resolution speed.',
      badges: ['Manual Testing', 'Postman', 'JIRA', 'Selenium', 'SQL', 'Agile'],
    },
  ];
  
// Function to calculate the time duration in years and months
const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  const totalMonths = years * 12 + months;

  const durationYears = Math.floor(totalMonths / 12);
  const durationMonths = totalMonths % 12;

  return `${durationYears} year${durationYears !== 1 ? 's' : ''} ${durationMonths} month${durationMonths !== 1 ? 's' : ''}`;
};

// Motion variants for animations
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

// Component for each experience item
const ExperienceItem = ({ exp, index }) => {
  const [isReadMore, setIsReadMore] = useState(false); // State to toggle "Read More" / "Read Less"
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // Calculate the time duration
  const duration = calculateDuration(exp.startDate, exp.endDate);

  return (
    <motion.div
      key={index}
      className="mb-10 relative text-start"
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Dot */}
      <motion.div
        className="w-3 h-3 bg-[#4ade80] rounded-full absolute -left-1.5 top-1.5"
        whileHover={{ scale: 1.3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      ></motion.div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-1 ml-5 md:text-2xl">{exp.role}</h3>
      <a
        href={exp.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4ade80] font-medium mb-1 ml-10 text-sm md:text-base hover:underline"
      >
        {exp.company}
      </a>
      <p className="text-sm text-gray-400 mb-2 ml-10 md:text-base">
        {`${exp.startDate.split('-')[0]} — ${exp.endDate} | ${duration}`}
      </p>
      
      {/* Description with Read More */}
      <motion.p
        className="text-gray-300 leading-relaxed ml-10 mb-3 text-sm md:text-base transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isReadMore ? 'none' : '100px',
          overflow: 'hidden',
        }}
      >
        {exp.description}
      </motion.p>

      {/* Read More / Read Less Button */}
      <button
        onClick={toggleReadMore}
        className="text-[#4ade80] text-xs font-medium ml-10 transition-all hover:underline"
      >
        {isReadMore ? 'Read Less' : 'Read More'}
      </button>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 ml-10 mt-4">
        {exp.badges.slice(0, 4).map((badge, i) => (
          <span
            key={i}
            className="bg-[#1f1f1f] text-gray-200 text-xs px-3 py-1 rounded-full border border-gray-700 hover:border-[#4ade80] transition"
          >
            {badge}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Exp = () => {
  return (
    <section className="py-16 px-6 bg-[#0f0f0f] text-gray-100" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Briefcase className="text-[#4ade80]" size={32} />
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exp;
