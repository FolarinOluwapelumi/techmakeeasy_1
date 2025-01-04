import React from 'react';
import { motion } from 'framer-motion';
import IndustryCard from './IndustryCard';
import fintech from '../assets/fintech.svg'
import blockchain from '../assets/blockchain.svg'
import book from '../assets/book.svg'
import socialmedia from '../assets/social-media.svg'
import aeroplane from '../assets/aeroplane.svg'
import bankbuilding from '../assets/bank-building-icon.png'
import realestate from '../assets/real-estate.svg'

const IndustrySection = () => {
  const industries = [
    {
      iconSrc: blockchain ,
      title: "Blockchain",
      description: "Wallets, Smart contracts, DAOs, Token Contracts, Project Advisory and Consultation."
    },
    {
      iconSrc:fintech ,
      title: "Fintech",
      description: "Remittance, Wallets, Lending, Savings, Escrow, Payments, and Multi-currency Conversion."
    },
    {
      iconSrc: socialmedia ,
      title: "Social Media",
      description: "Networking, Photo and Video Sharing, Community Tools, and User Engagement."
    },
    {
      iconSrc:bankbuilding ,
      title: "Government",
      description: "E-Governance, Citizen Portals, Digital IDs, Public Service Automation, and Smart Cities."
    },
    {
      iconSrc: realestate,
      title: "Real Estate",
      description: "Proptech, Tenant Management, Real Estate Contracts, Analytics, and Virtual Tours."
    },
    {
      iconSrc: book,
      title: "Education",
      description: "Online Courses, E-learning, LMS, Gamified Learning, and EdTech Consultation."
    },
    
    {
      iconSrc: aeroplane,
      title: "Travel",
      description: "Online Bookings, Travel Planning, Itinerary Updates, Luggage Tracking, and Payments."
    }
  ];


  return (
    <div className="bg-white py-12 px-4 md:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-left mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-purple-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our experience span across industries
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore the diverse industries where we bring expertise and innovation to every project we undertake.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              index={index}
              {...industry}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;