import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, Rocket } from "lucide-react"; // some icons

const Skills = () => {
  const skills = [
    { title: "Frontend Development", icon: <Code size={40} />, desc: "React.js, Tailwind, JavaScript, HTML, CSS" },
    { title: "Backend Development", icon: <Database size={40} />, desc: "Node.js, Express.js, MongoDB, SQL"},
    { title: "Problem Solving", icon: <Layers size={40} />, desc: "DSA, Competitive Programming" },
    { title: "Projects & Deployment", icon: <Rocket size={40} />, desc: "Full-stack apps, APIs, Docker" },
  ];

  return (
    <div className="w-full py-16 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-[#FF0066] mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-[#FF0066]/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-[#FF0066]/40 transition-all"
          >
            <div className="flex justify-center text-[#FF0066] mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
