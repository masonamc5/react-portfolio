import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-container">
      <h4>Mason McNeil Portfolio</h4>
      <div className="footer-icons">
        
        <a href="https://github.com/masonamc5" target="_blank" rel="noopener noreferrer" className="icon-github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
