import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, position, quote, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white p-6 shadow-sm max-w-md mx-auto border border-purple-500"
    >
      <div className="absolute -top-7 left-6">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
        <img 
            src={image} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 mb-4">{quote}</p>
        <div>
          <h4 className="text-purple-500 font-bold text-[1rem] sm:text-xl">{name}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;