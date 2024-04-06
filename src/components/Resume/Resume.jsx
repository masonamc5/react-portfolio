import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Developer Skills</h1>
      <div className="skills-section">
        <div className="skills-column">
          <h2>Front End</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>JavaScript (ES6+)</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Webpack & Babel</li>
            <li>Shopify</li>
            <li>OnPrintShop</li>
          </ul>
        </div>
        <div className="skills-column">
          <h2>Back End</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful API Design</li>
            <li>GraphQL</li>
            <li>MongoDB/Mongoose</li>
            <li>SQL (PostgreSQL & MySQL)</li>
            <li>Authentication & Authorization (JWT)</li>
            <li>EnFocus Switch</li>
            <li>PitStop Pro</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;