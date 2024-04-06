import React from 'react';
import ContactFormWrapper from '../ContactForm/contactform';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <ContactFormWrapper /> {/* Using ContactFormWrapper here */}
    </div>
  );
}

export default Contact