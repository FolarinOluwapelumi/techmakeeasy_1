import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import about from "../assets/about-us.png"

const AboutUsHero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gradient-to-r from-blue-400 to-purple-700 min-h-[75vh] px-6 md:px-12 py-16 gap-8">
      {/* Content Section */}
      <div className="flex-1 text-white">
        <h2 className="sm:text-5xl text-4xl font-bold mb-6 text-center sm:text-start">
          <TypeAnimation
            sequence={[
              'About TechMakeEasy',
              3000,
              'Our Story',
              2000,
              'Our Mission',
              2000,
              'About TechMakeEasy',
              3000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h2>
        <p className="text-lg text-gray-200 max-w-lg mb-8">
          Your one-stop solution for software development, hardware
          manufacturing, cloud computing, IT services, and more. Let us
          simplify technology for you.
        </p>
      </div>

      {/* Illustration Section */}
      <div className="flex-1 flex justify-center items-center">
        <img src={about} />
      </div>
    </main>
  );
};

export default AboutUsHero;