import React from 'react';
import './About.css';
import technology from '../../Components/Assets/technology.jpg';
import fast from '../../Components/Assets/fast.jpg';
import team from '../../Components/Assets/team.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Why Choose Us?</h1>
        <h2>Fast, Affordable And High-Quality Digital Prints <span>Why Not?</span></h2>
      </div>

      <div className="features-container">
        <div className="feature">
          <img src={technology} alt="Modern Technology" />
          <h3>Modern Technology</h3>
          <p>State-of-the-art digital printing equipment for flawless results</p>
        </div>

        <div className="feature">
          <img src={fast} alt="Fast Service" />
          <h3>Speed & Accuracy</h3>
          <p>Quick turnaround without compromising on precision</p>
        </div>

        <div className="feature">
          <img src={team} alt="Professional Team" />
          <h3>Professional Team</h3>
          <p>Experts dedicated to bringing your vision to life</p>
        </div>
      </div>
    </div>
  );
};

export default About;