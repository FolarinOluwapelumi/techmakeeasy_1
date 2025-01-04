import React from "react";
import { motion } from "framer-motion";

const IndustryCard = ({ iconSrc, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 0.8,
          delay: index * 0.1, // Stagger effect
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      className="p-6 border-2 border-purple-500 bg-white"
    >
      <motion.div
        className="flex flex-col items-start text-left"
        whileHover="hover"
      >
        <motion.div
        >
          <div className="w-14 h-14 mb-4">
            <img
              src={iconSrc}
              alt={title}
              className="w-full h-full object-fill" style={{filter: "invert(38%) sepia(56%) saturate(3656%) hue-rotate(248deg) brightness(101%) contrast(94%)"}}
            />
          </div>
        </motion.div>

        <motion.h3
          className="text-xl font-bold mb-3 text-purple-500"
          variants={{
            hover: { scale: 1.05 },
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-500 leading-relaxed"
          variants={{
            hover: { y: 5 },
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default IndustryCard;
