import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow_icon.svg';
import hero_image from '../Assets/hero.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>High-Quality Printing for Every Need!</h1>
          <p>Get fast, affordable, and reliable printing services for T-shirts, tarpaulins, stickers, and more.</p>
          <div className="hero-btn">
            <button>Get Started</button>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
