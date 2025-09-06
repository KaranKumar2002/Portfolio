import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center text-gray-200 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg flex items-center gap-2">
        <motion.span
          className="inline-block"
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          👋
        </motion.span>
        Hi! I am <span className="text-[#FF0066]">Karan Kumar.</span>

        
      </h1>

      <motion.span
        className="mt-4 text-lg md:text-2xl font-medium bg-[#FF0066]/10 px-4 py-2 rounded-xl backdrop-blur-sm shadow-md text-white"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        I am a <span className="text-[#FF0066]">Web Developer</span>
      </motion.span>

      <p className="mt-6 text-base md:text-lg text-gray-400 max-w-lg">
        from <span className="font-semibold text-gray-200">Lucknow, Uttar Pradesh, India</span>.
      </p>

      <motion.button
        className="mt-10 px-6 py-3 bg-[#FF0066] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#e6005c] transition"
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open("http://www.linkedin.com/in/karankr21", "_blank")}
      >
        Let’s Connect 🚀
      </motion.button>
    </motion.div>
  );
};

export default Intro;
