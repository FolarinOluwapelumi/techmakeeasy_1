import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import Logo from "../assets/Asset 3.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFollowDropdownOpen, setIsFollowDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const contactDropdownRef = useRef(null);

  const instagramLink = "https://www.instagram.com/tech_makeslifeeasy";
  const whatsappLink = "https://wa.me/yournumberhere"; // Replace with your WhatsApp number

  // Handle clicking outside of menu and dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }

      if (
        isContactDropdownOpen &&
        contactDropdownRef.current &&
        !contactDropdownRef.current.contains(event.target)
      ) {
        setIsContactDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen, isContactDropdownOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ContactDropdown = ({ isMobile }) => (
    <div 
      ref={!isMobile ? contactDropdownRef : null}
      className={`${
        isMobile 
          ? "mt-2 ml-4" 
          : "absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
      }`}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${
          isMobile 
            ? "text-purple-600 hover:text-purple-500 mb-4" 
            : "px-4 py-2 text-purple-600 hover:bg-purple-50"
        }`}
      >
        <FaWhatsapp className="w-5 h-5 mr-2" />
        WhatsApp
      </a>
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${
          isMobile 
            ? "text-purple-600 hover:text-purple-500" 
            : "px-4 py-2 text-purple-600 hover:bg-purple-50"
        }`}
      >
        <FaInstagram className="w-5 h-5 mr-2" />
        Instagram
      </a>
    </div>
  );

  return (
    <>
      <header className="flex justify-between items-center bg-white shadow-black-md p-3 md:px-40 text-purple-600">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="TechMakeEasy" className="w-45 h-5" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 font-bold">
          <Link to="/" className="hover:text-purple-500">
            Home
          </Link>
          <Link to="/blog" className="hover:text-purple-500">
            Blog
          </Link>
          <Link to="/about-us" className="hover:text-purple-500">
            About Us
          </Link>

          {/* Follow Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsFollowDropdownOpen(!isFollowDropdownOpen)}
              className="flex items-center hover:text-purple-500 focus:outline-none"
            >
              Follow Us
              <svg
                className="w-5 h-5 font-bold ml-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {isFollowDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  <FaInstagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="relative hidden sm:block">
          <div onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}>
            <Button className="border-2 border-blue-700 border-l-0 border-r-0 border-t-0">
              Contact Us
            </Button>
          </div>
          {isContactDropdownOpen && <ContactDropdown isMobile={false} />}
        </div>

        <button
          ref={buttonRef}
          className="block md:hidden text-purple-800 font-bold sm:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Mobile menu with overlay and slide animation */}
      {isMenuOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Side menu */}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 w-64 h-screen bg-white md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="flex flex-col mt-20 space-y-10 p-6 font-bold text-purple-500 font-">
              <Link
                to="/"
                className="hover:text-purple-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="hover:text-purple-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about-us"
                className="hover:text-purple-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Follow Us dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsFollowDropdownOpen(!isFollowDropdownOpen)}
                  className="flex items-center hover:text-purple-500 focus:outline-none"
                >
                  Follow Us
                  <svg
                    className="w-5 h-5 font-bold ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {isFollowDropdownOpen && (
                  <div className="mt-2 ml-4">
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaInstagram className="w-5 h-5 mr-2" />
                      Instagram
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Contact Us dropdown */}
              <div className="relative">
                <div onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}>
                  <Button className="border-2 border-blue-700 border-l-0 border-r-0 border-t-0">
                    Contact Us
                  </Button>
                </div>
                {isContactDropdownOpen && <ContactDropdown isMobile={true} />}
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;