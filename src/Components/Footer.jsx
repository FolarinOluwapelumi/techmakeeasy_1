import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from '../assets/Asset 4.svg';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 100 pixels (roughly 10%)
      setIsVisible(window.scrollY > 100);
    };

    
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
 // WhatsApp link with your phone number
 const whatsappLink = "https://wa.me/2347068380789";
 // Instagram profile link
 const instagramLink = "https://www.instagram.com/tech_makeslifeeasy";

 return (
   <footer className="text-white">
     {/* Footer Links Section */}
     <div className="bg-gradient-to-r from-purple-700 to-blue-400 ">
       <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Social Links */}
           <div>
             <div className="flex gap-2 relative">
             <h3 className="text-xl font-bold mb-4"> See </h3>
             <div className="absolute left-11 top-[0.38rem]">
             <img src={Logo} alt="TechMakeEasy" className="w-45 h-5" />
             </div>
             </div>
             <div className="flex space-x-4 mb-2">
               <a
                 href={instagramLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-purple-200 transition-colors cursor-pointer"
               >
                 <FaInstagram className="w-6 h-6" />
               </a>
               <a
                 href={whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-green-200 transition-colors cursor-pointer"
               >
                 <FaWhatsapp className="w-6 h-6" />
               </a>
             </div>
           </div>
            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="pl-2 space-y-2 text-white font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Announcement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    General
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inside TechMakeEasy
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Office</h3>
              <address className="not-italic text-white">
                No 21,
                <br />
                51 Crescent Michael Jackson Street,
                <br />
                Gwarimpa,
                <br />
                Abuja,
                <br />
                Nigeria.
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-400">
        <div className="container mx-auto px-4 py-6 font-bold">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-white text-sm mb-2 md:mb-0 max-w-72">
              © 2024-{new Date().getFullYear()} TechMakeEasy. All Rights Reserved.
            </p>
            <div>
              <a
                href="#"
                className="text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-purple-500 p-3 rounded-md font-bold shadow-lg"
          >
            <svg
              fill="#ffffff"
              height="10px"
              width="10px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 407.436 407.436"
              xml:space="preserve"
            >
              <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 " />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
