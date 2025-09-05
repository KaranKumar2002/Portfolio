import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className=" text-gray-300 px-6 md:px-16 lg:px-32 py-16 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#FF0066] mb-8 drop-shadow-lg">
        About Me
      </h2>

      {/* Content Card */}
      <motion.div
        className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-4xl leading-relaxed"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <p className="mb-4 text-lg">
          I am{" "}
          <span className="text-[#FF0066] font-semibold">Karan Kumar</span>, a{" "}
          <span className="font-semibold">
            Computer Science Engineering graduate
          </span>{" "}
          from the Institute of Engineering and Technology, Lucknow.
        </p>

        <p className="mb-4 text-lg">
          With a strong foundation in{" "}
          <span className="text-white font-medium">full-stack development</span>{" "}
          and{" "}
          <span className="text-white font-medium">problem-solving</span>, I
          have built impactful projects including:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
          <li>
            📚 <span className="text-white">BookStore web application</span>{" "}
            (MERN stack)
          </li>
          <li>
            🤖 <span className="text-white">Flask-based Mental Health Chatbot</span>{" "}
            using Machine Learning (Intent Detection)
          </li>
          <li>
            🎮 <span className="text-white">Snake Game</span> built with
            JavaScript
          </li>
        </ul>

        <p className="mb-4 text-lg">
          These experiences gave me hands-on expertise in{" "}
          <span className="text-[#FF0066] font-medium">
            React.js, Node.js, Express.js, MongoDB, C++, SQL
          </span>{" "}
          with a strong grasp of{" "}
          <span className="text-white font-medium">
            OOPs, DBMS, OS, CN, and DSA
          </span>
          .
        </p>

        <p className="mb-4 text-lg">
          Beyond academics, I’m passionate about{" "}
          <span className="text-white font-medium">competitive programming</span>
          . I have solved{" "}
          <span className="text-[#FF0066] font-semibold">300+ problems</span> on
          LeetCode, earned a{" "}
          <span className="text-[#FF0066] font-semibold">2★ rating</span> on
          CodeChef, and secured{" "}
          <span className="text-[#FF0066] font-semibold">global rank 3602</span>{" "}
          in Google Kickstart.
        </p>

        <p className="text-lg">
          With strong analytical skills, adaptability, and a passion for
          creating innovative solutions, I am eager to{" "}
          <span className="text-white font-medium">
            contribute my skills to impactful projects
          </span>{" "}
          while continuously growing as a developer 🚀.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
