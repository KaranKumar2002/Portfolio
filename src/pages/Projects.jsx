import React from "react";
import { motion } from "framer-motion";
import BookStore from "../assets/BookStore.png";
import ChatBot from "../assets/ChatBot.png";
import RatingSystem from "../assets/RatingSystem.png";

const Projects = () => {
  const projects = [
    {
      title: "BookStore (MERN Stack)",
      desc: "A full-stack web app for browsing, buying, and selling books with authentication, dashboards, and secure transactions.",
      image: BookStore,
      link: "https://book-app-frontend-xi.vercel.app",
    },
    {
      title: "Mental Health Chatbot",
      desc: "Flask-based chatbot leveraging ML for intent detection, providing supportive responses to mental health queries.",
      image: ChatBot,
      link: "https://github.com/KaranKumar2002/CalmAI",
    },
    {
      title: "Restaurant Rating System",
      desc: "A web application for users to rate and review their favorite restaurants, built with React and Node.js.",
      image: RatingSystem,
      link: "https://rating-system-frontend.vercel.app",
    },
  ];

  return (
    <div className="w-full mt-30 mb-30">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-[#FF0066] mb-10"
      >
        My Projects
      </motion.h2>

      {/* Project Cards Vertical */}
      <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-900/60 border border-[#FF0066]/40 rounded-xl shadow-md overflow-hidden hover:shadow-[#FF0066]/50 transition-all"
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Project Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.desc}
              </p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 inline-block text-[#FF0066] font-medium hover:underline text-sm"
              >
                🔗 View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
