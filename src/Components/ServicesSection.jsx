import React from 'react';
import ServiceCard from './ServiceCard';
import softwareIcon from '../assets/Software.svg';
import hardwareIcon from '../assets/Hardware.svg';
import cloudIcon from '../assets/Cloud.svg';
import consultingIcon from '../assets/Consultation.svg';
import internetIcon from '../assets/Internet.svg';
import itIcon from '../assets/IT.svg';
import mediaIcon from '../assets/Media.svg';

const ServicesSection = () => {
  const services = [
    {
      iconSrc: softwareIcon,
      title: "Software Development",
      description: "Bring your ideas to life. We help you review, plan, and design innovative software solutions tailored to your needs..",
      buttonText: "Design your product",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 0
    },
    {
      iconSrc: hardwareIcon,
      title: "Hardware Manufacturing",
      description: "Turn your concepts into reality. From design to launch, we support the development of cutting-edge hardware solutions for your projects.",
      buttonText: "Build your hardware",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 0.2
    },
    {
      iconSrc: internetIcon,
      title: "Internet Services",
      description: "Stay connected with our reliable internet solutions. We ensure seamless integration and robust support for your online infrastructure",
      buttonText: "Explore services",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 0.4
    },
    {
      iconSrc: cloudIcon,
      title: "Cloud Computing",
      description: "Streamline your business operations with our secure and scalable cloud solutions, ensuring efficiency and reliability",
      buttonText: "Optimize your cloud",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 0.6
    },
    {
      iconSrc: itIcon,
      title: "IT Services",
      description: " Let us handle your IT needs while you focus on growing your business. We provide seamless IT management and support",
      buttonText: "Discover IT solutions",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 0.8
    },
    {
      iconSrc: consultingIcon,
      title: "Consultation",
      description: "Get expert advice tailored to your unique business challenges. We help you find innovative solutions to achieve your goals",
      buttonText: "Schedule a consultation",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 1.0
    },
    {
      iconSrc: mediaIcon,
      title: "Social Media Management",
      description: "Expand your digital footprint with our strategic social media management services. Boost your visibility and engagement effectively",
      buttonText: " Manage your social media",
      mailto: "Techmakeeeasy0@gmail.com",
      delay: 1.2
    }
  ];

  return (
    <section className="py-16 px-4 md:px-32 bg-gray-50 text-left">
      <h2 className="text-3xl font-bold text-purple-500  mb-4">
        We help you transform your ideas to products that people use.
      </h2>
      <p className="mb-12 text-lg text-gray-700">
        We have a track record of building high-quality software with proven results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;