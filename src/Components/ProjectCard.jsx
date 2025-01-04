import React, { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ image, delay = 0 }) => {
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
      className={`relative group cursor-pointer transform transition-all duration-500 opacity-0 translate-y-8 ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="overflow-hidden flex justify-center">
        <img
          src={image}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProjectCard;