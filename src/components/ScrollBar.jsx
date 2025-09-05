import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-[#FF0066] z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;
