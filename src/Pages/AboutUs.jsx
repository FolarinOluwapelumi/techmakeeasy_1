import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import founder from "../assets/EasyMoney.jpg";


const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {/* Main Container */}
      <div className=" bg-white shadow-lg overflow-hidden ">
        {/* Hero Section */}
        <div className="items-center bg-gradient-to-r from-blue-400 to-purple-700 h-[75vh] px-4 md:px-8 text-white py-12 flex flex-col justify-center item-center">
            <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-center"> About TechMakeEasy</h1>
          <p className="text-lg leading-relaxed text-justify text-gray-200 ">
            Your one-stop solution for software development, hardware
            manufacturing, cloud computing, IT services, and more. Let us
            simplify technology for you.
          </p>
        </div>

        {/* Content Section */}
        <div className="py-16 px-4 md:px-32 space-y-10">
          {/* Founder Section */}
          <div className="flex flex-col md:flex-row gap-6">
           
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Meet Our Founder
              </h2>
              <img
              src={founder}
              alt="Founder"
              className="w-36 h-32 md:w-56 md:h-52 rounded-[100%] object-cover border-2 border-purple-600 mb-4"
            />
              <p className="text-gray-600 leading-relaxed">
                Hi, I'm{" "}
                <span className="text-purple-600 font-bold">
                  Shaibu Akoji Israel
                </span>
                , the visionary behind TechMakeEasy. My passion for innovation
                and technology drives our mission to provide top-notch tech
                solutions. Together with my team, I strive to bring your ideas
                to life with simplicity and efficiency.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-purple-600">
                  Software Development
                </h3>
                <p className="text-gray-600 mt-2">
                  Transforming your ideas into innovative digital solutions.
                </p>
              </li>
              <li className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-purple-600">
                  Hardware Manufacturing
                </h3>
                <p className="text-gray-600 mt-2">
                  Building custom hardware solutions for your unique needs.
                </p>
              </li>
              <li className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-purple-600">
                  Cloud Computing
                </h3>
                <p className="text-gray-600 mt-2">
                  Scalable and reliable cloud infrastructure for your business.
                </p>
              </li>
              <li className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-purple-600">
                  IT Services
                </h3>
                <p className="text-gray-600 mt-2">
                  Expert IT solutions to keep your operations running smoothly.
                </p>
              </li>
              <li className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-purple-600">
                  Social Media Management
                </h3>
                <p className="text-gray-600 mt-2">
                  Engaging and managing your social presence effectively.
                </p>
              </li>
              <li className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-purple-600">
                  Consultation Services
                </h3>
                <p className="text-gray-600 mt-2">
                  Professional advice to guide your tech journey.
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sm:text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <div className="flex sm:justify-center items-center gap-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/tech_makeslifeeasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 text-3xl hover:text-purple-800 transition-transform duration-500 transform hover:scale-125"
              >
                <FaInstagram />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/07068380789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 text-3xl hover:text-purple-800 transition-transform duration-500 transform hover:scale-125"
              >
                <FaWhatsapp />
              </a>
              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 text-3xl hover:text-purple-800 transition-transform duration-500 transform hover:scale-125"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
