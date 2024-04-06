import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css'; 

function Navigation() {
  const location = useLocation(); 
  const currentPath = location.pathname; 
  const navLinks = [
    { path: "/", label: "About Me" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className={currentPath === link.path ? 'active' : ''}>
            <Link to={link.path} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
