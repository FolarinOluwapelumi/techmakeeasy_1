// ServiceCard.jsx
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const ServiceCard = ({
  iconSrc,
  title,
  description,
  mailto,
  buttonText,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-8 rounded-lg shadow-lg flex flex-col items-start space-y-4 hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-16 h-16">
        <img
          src={iconSrc}
          alt={title}
          className="w-full h-full object-cover "
          style={{
            filter:
              "invert(38%) sepia(56%) saturate(3656%) hue-rotate(248deg) brightness(101%) contrast(94%)",
          }}
        />
      </div>

      <h3 className="text-2xl font-bold text-purple-600 max-w-[13rem]">
        {title}
      </h3>

      <p className="text-gray-700">{description}</p>

      <Button
        mailto={mailto}
        className="bg-purple-500 mt-4 transform hover:scale-105 transition-transform duration-300 border-2 border-gray-500 border-l-0 border-r-0 border-t-0"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
