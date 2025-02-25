import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import beginner from "../assets/beginners.jpg";
import profile from "../assets/EasyMoney.jpg";
import golang from "../assets/golang.jpg";
import features from "../assets/features.jpg";
import Button from "./Button";

const BlogSection = () => {
  const blogPosts = [
    {
      image: beginner,
      category: "General",
      title: "Get started with Tech as a beginner",
      author: {
        name: "Shaibu Akoji Israel",
        avatar: profile,
      },
      date: "November 14, 2024",
      link: "/blog/tech-beginner",
    },
    {
      image: golang,
      category: "Inside Guru Lab",
      title: "Why we migrated projects from Node.JS to Golang",
      author: {
        name: "Shaibu Akoji Israel",
        avatar: profile,
      },
      date: "November 14, 2024",
      link: "/blog/nodejs-golang",
    },
    {
      image: features,
      category: "General",
      title: "Why Adding Too Many Features Hurts Your Product",
      author: {
        name: "Shaibu Akoji Israel",
        avatar: profile,
      },
      date: "November 14, 2024",
      link: "/blog/feature-overload",
    },
  ];

  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-purple-500 mb-4">Blog</h2>
          <p className="text-lg text-gray-700">
            Insights, updates, and innovations from TechMakeEasy – explore our
            latest stories and ideas.
          </p>
        </motion.div>

        {/* Blog Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              animation={true}
              hoverEffect={true}
              // Custom styling example
              categoryColor={
                post.category === "Inside Guru Lab"
                  ? "text-blue-500"
                  : "text-red-500"
              }
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              to="/view-all-blogs"
              className="w-fit text-center border-2 border-black border-l-0 border-r-0 border-t-0 transition-colors duration-300"
            >
              View all blogs
            </Button>
          </motion.div>

          <motion.div
            href="/suggest-topic"
            className="text-gray-700 rounded-lg font-bold 
              hover:text-purple-500 transition-colors duration-300 flex items-center cursor-pointer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Suggest a topic for us
            <svg
              className="w-5 h-5 ml-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
