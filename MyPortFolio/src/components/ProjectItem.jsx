// src/components/ProjectItem.jsx

import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, description, image, link }) => {
  return (
    <div className="project-item">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title anton-sc-regular">{title}</h3>
      <p className="project-description raleway-desc">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="project-button anton-sc-regular">View Project</button>
      </a>
    </div>
  );
};

export default ProjectItem;
