import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hero from "../assets/hero.png"

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gradient-to-r from-blue-400 to-purple-700 h-[80vh] md:h-[50vh] lg:h-[80vh] px-6 md:px-12 py-16 gap-8">
      {/* Content Section */}
      <div className="flex-1 text-white">
        <h2 className="sm:text-5xl text-4xl font-bold mb-6 text-center sm:text-start">
          <TypeAnimation
            sequence={[
              'Success Made Easy',
              3000,
              'Success Made Simple',
              2000,
              'Success Made Possible',
              2000,
              'Success Made Easy With TechMakeEasy',
              3000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h2>
        <p className="text-lg text-gray-200 max-w-lg mb-8">
          Transform your business with a well-designed website and innovative ideas that drive growth and engagement.
        </p>
      </div>

      {/* Illustration Section */}
      <div className="flex-1 flex justify-center items-center">
       <img src={hero} className="mt-7 h-[35vh] md:h-[25vh] lg:h-[75vh] pt-[3rem] sm:pt-0"/>
      </div>
    </main>
  );
};

export default HeroSection;