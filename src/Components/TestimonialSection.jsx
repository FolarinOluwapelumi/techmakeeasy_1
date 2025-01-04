import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import profile from "../assets/profile.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Nathaniel Luz",
      position: "CEO, Cheqwa",
      quote: "In the end, the Quru Lab team just gets the work done.",
      image: profile
    },
    {
      name: "Mr. Donald",
      position: "CEO, SpiritNerds",
      quote: "We received outstanding service during Spirit Nerds' development.",
      image: profile
    },
    {
      name: "Mrs. Rose",
      position: "CEO, BukaChops",
      quote: "We received outstanding service during Buka Chops' development.",
      image: profile
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-4xl text-purple-500 font-bold mb-4 max-w-[17rem] sm:max-w-full">What Founders Say About Us</h2>
        <p className="text-gray-700 text-lg">
          Discover how Quru Lab empowers businesses with innovative solutions and exceptional support.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;