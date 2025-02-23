// src/components/Projects.jsx

import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';
import burnedSalesImage from '/src/assets/BurnedSales.png';
import confettiCalculatorImage from '/src/assets/ConfettiCalculator.png';
import chaskaImage from '/src/assets/chaska.png';
import kkImage from '/src/assets/kk.png';

const Projects = () => {
  const projectList = [
    {
      title: 'XYZ',
      description: 'MERN Based E-commerce platform, includes a Node.js and Express backend with RESTful API endpoints for user authentication (registration and login with JWT), product management (CRUD operations for admins), and shopping cart functionality. The React frontend interacts with these APIs, featuring components for authentication forms, product listings, product details, and a shopping cart, managed with Redux for state management and React Router for navigation.',
      image: burnedSalesImage,
      link: 'https://github.com/CODEBURNNER/XYZ-Shopping--E-commerce-platform.git'
    },
    {
      title: 'Confetti Calculator',
      description: 'Full Working React-based clone of the macOS Scientific Calculator using React. Includes all basic arithmetic operations, advanced functions, logarithms, exponents, & special functions. Explosion occurs if calculation between 5 and 6 is being performed.',
      image: confettiCalculatorImage,
      link: 'https://calculatorburned.netlify.app/'
    },
    {
      title: 'Chaska Eats',
      description: 'Have built the dynamic Restaurant website. This contains a total of 14+ different beautiful pages. Also have added dynamic features like login, registration and add to cart facility for customers. Have also added the database file in this. Have Made this project while exploring JSP, Servlet, JDBC.',
      image: chaskaImage,
      link: 'https://github.com/CODEBURNNER/restaurant-website.git'
    },
    {
      title: 'Kashmir Kaksha',
      description: 'Built an online platform using HTML, CSS, JAVASCRIPT for vendors of kashmir to sell their products locally & promote kashmiri culture and heritage.',
      image: kkImage,
      link: 'https://burnedtrails.github.io/KK/'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading anton-sc-regular">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
