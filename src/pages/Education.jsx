import React from "react";
import { Timeline } from "primereact/timeline";
import { motion } from "framer-motion";
import "primeicons/primeicons.css"; // for icons

const Education = () => {
  const education = [
    {
      institution: "Institute of Engineering and Technology, Lucknow",
      degree: "B.Tech in Computer Science",
      date: "July 2025",
      detail: "CGPA: 7.63",
      icon: "pi pi-graduation-cap",
      color: "#FF0066",
    },
    {
      institution: "Modern Academy",
      degree: "KG-Class 12th",
      date: "2020",
      detail: "Percentage: 91%",
      icon: "pi pi-book",
      color: "#FF0066",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-[#FF0066] mb-12">
        Education
      </h2>

      <Timeline
        value={education}
        align="alternate"
        opposite={(item) => (
          <span className="text-sm text-gray-400 mt-10">{item.date}</span>
        )}
        content={(item) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/60 border border-[#FF0066]/40 rounded-xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {item.institution}
            </h3>
            <p className="text-gray-300 mt-1">{item.degree}</p>
            <p className="text-sm text-gray-400">{item.detail}</p>
          </motion.div>
        )}
        marker={(item) => (
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white`}
            style={{ backgroundColor: item.color }}
          >
            <i className={item.icon}></i>
          </span>
        )}
      />
    </motion.div>
  );
};

export default Education;
