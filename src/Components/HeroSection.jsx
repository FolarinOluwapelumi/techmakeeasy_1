import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hero from "../assets/hero.png"

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gradient-to-r from-blue-400 to-purple-700 min-h-[80vh] px-6 md:px-12 py-5 lg:py-16 gap-6 lg:gap-8">
      {/* Content Section */}
      <div className="flex-1 text-white w-full">
        <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center sm:justify-start mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center sm:text-start leading-tight">
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
        </div>
        <p className="text-lg text-gray-200 max-w-lg mb-6 sm:text-start">
          Transform your business with a well-designed website and innovative ideas that drive growth and engagement.
        </p>
      </div>

      {/* Illustration Section */}
      <div className="flex-1 flex justify-center items-center w-full">
        <img 
          src={hero} 
          alt="Hero illustration"
          className="h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[60vh] max-h-[400px] object-contain"
        />
      </div>
    </main>
  );
};

export default HeroSection;