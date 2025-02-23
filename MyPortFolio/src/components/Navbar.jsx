// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css';
import navbarImg from '../assets/navbarImg.png';

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="profile-image-container">
        <img src={navbarImg} alt="Profile" className="profile-image" />
      </div>
      <ul className="nav-links anton-sc-regular">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#hireme">Hire Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
