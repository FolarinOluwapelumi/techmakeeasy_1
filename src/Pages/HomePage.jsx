import React from "react";
import Header from "../Components/Header";
import ServicesSection from "../Components/ServicesSection";
import ProjectsSection from "../Components/ProjectsSection";
import IndustrySection from "../Components/IndustrySection";
import BlogSection from "../Components/BlogSection";
// import TestimonialsSection from '../Components/TestimonialSection';
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen text-white ">
      <Header />
      <HeroSection />
      <div className="sm:mx-[2rem] bg-white">
        <ServicesSection />
        <ProjectsSection />
        <IndustrySection />
        <BlogSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
