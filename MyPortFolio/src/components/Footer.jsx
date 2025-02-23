// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className='anton-sc-regular'>Made with ❤️ By Adanan Kasif</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/sak.engr.07/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram insta"></i>
        </a>
        <a href="https://www.linkedin.com/in/adnan-kashif-6825b9239/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a href="https://github.com/CODEBURNNER" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github github"></i>
        </a>
        <a href="https://wa.me/8382880399" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp whatsapp"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
