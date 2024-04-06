import React from 'react';
import './aboutme.css';
import aboutMeData from '../../data/aboutme.json'; 

function AboutMe() {
  return (
    <div className="about-container">
      <div className="left-side">
        <h1>{aboutMeData.intro}</h1>
        <img src="/assets/mason.png" alt="Mason" className="mason-image" />
      </div>
      <div className="right-side">
        {aboutMeData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;