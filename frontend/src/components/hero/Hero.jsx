import React from 'react';
import './Hero.css';

const Hero = ({ image, mainHeader, secondaryHeader }) => {
  return (
    <div className="hero">
      <img src={image} alt="Background" className="hero-image" />
      <div className="hero-overlay">
        <h2 className="hero-main-header">{mainHeader}</h2>
        <h5 className="hero-secondary-header">{secondaryHeader}</h5>
      </div>
    </div>
  );
};

export default Hero;
