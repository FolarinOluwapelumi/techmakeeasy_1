import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ href, to, mailto, children, className = '' }) => {
  const baseStyles = "bg-purple-600 text-white px-6 py-2 font-bold hover:bg-purple-700";
  
  // For email links
  if (mailto) {
    return (
      <a
        href={`mailto:${mailto}`}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }
  
  // For external links
  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // For internal routing
  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </Link>
    );
  }
  
  // Default button
  return (
    <button
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;


// // For email
// <Button mailto="example@email.com">Contact Us</Button>

// // For internal routing
// <Button to="/about">About Us</Button>

// // For external links
// <Button href="https://example.com">Visit Site</Button>

// // As a regular button
// <Button>Click Me</Button>