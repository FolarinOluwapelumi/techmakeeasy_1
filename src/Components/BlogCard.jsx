import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ 
  image, 
  category, 
  title, 
  author, 
  date,
  link,
  // Customization props
  imageHeight = "200px",
  categoryColor = "text-red-500",
  titleColor = "text-gray-900",
  authorColor = "text-gray-700",
  dateColor = "text-gray-500",
  hoverEffect = true,
  animation = true,
  className = "",
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        bounce: 0.3,
        duration: 0.8 
      }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Link to={link}>
      <motion.div 
        className={`bg-white overflow-hidden shadow-md
          hover:shadow-lg transition-shadow duration-300 ${className}`}
        variants={hoverEffect ? cardVariants : {}}
        initial={animation ? "initial" : false}
        whileInView="animate"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {/* Image Container */}
        <motion.div 
          className="overflow-hidden"
          style={{ height: imageHeight }}
          variants={imageVariants}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="p-6">
          <div className={`text-sm font-medium mb-2 ${categoryColor}`}>
            {category}
          </div>
          
          <h3 className={`text-xl font-bold mb-4 ${titleColor} hover:text-purple-500 transition-opacity max-w-[16rem]`}>
            {title}
          </h3>
          
          <div className="flex items-center">
            {author.avatar && (
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
            )}
            <div>
              <span className={`text-sm font-medium ${authorColor}`}>
                {author.name}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className={`text-sm ${dateColor}`}>
                {date}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;