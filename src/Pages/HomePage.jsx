import React from 'react';
import Header from '../Components/Header';
import ServicesSection from '../Components/ServicesSection';
import ProjectsSection from '../Components/ProjectsSection';
import IndustrySection from '../Components/IndustrySection';
import BlogSection from '../Components/BlogSection';
// import TestimonialsSection from '../Components/TestimonialSection';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';
import HeroSection from '../Components/HeroSection';

const HomePage = () => {

  return (
    <div className="min-h-screen text-white ">
      <Header />
      <HeroSection />
      {/* Hero Section
      <main className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-700 h-[80vh] px-4 md:px-8">
        <h2 className="sm:text-5xl text-4xl font-bold text-center mb-6">
         Success Made Easy With <br /> TechMakeEasy.
        </h2>
        <p className="sm:text-center text-justify leading-relaxed font-medium text-lg text-gray-200 sm:text-white max-w-lg">
          Transform your business with a well-designed website and innovative ideas that drive growth and engagement.
        </p>
      </main> */}

      <ServicesSection />
      <ProjectsSection />
      <IndustrySection />
      <BlogSection />
      <CTA />
      <Footer />
      
    </div>
  );
};

export default HomePage;