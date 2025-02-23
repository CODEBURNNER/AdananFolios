// src/App.jsx

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Typewriter from 'typewriter-effect';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'; // Import App.css for overall layout styles
import './Home.css'; // Import Home.css for home section styles
import './About.css'; // Import About.css for about section styles
import './Skills.css'; // Import Skills.css for skills section styles
import './HireMe.css'; // Import Hire Me.css for hire me section styles
import BurnedSales from './assets/BurnedSales.png';
import CarousalImg1 from './assets/carousalImg1.png';
import CarousalImg2 from './assets/carousalImg2.png';
import CarousalImg3 from './assets/carousalImg3.png';
import CarousalImg4 from './assets/carousalImg4.png';
import CarousalImg5 from './assets/carousalImg5.png';
import CarousalImg6 from './assets/carousalImg6.png';
import Resume from './assets/Resume.pdf';
import profile from './assets/profile.png';
import reactIcon from '/src/assets/icons/react.png';
import nodeIcon from '/src/assets/icons/node.png';
import expressIcon from '/src/assets/icons/express.png';
import javascriptIcon from '/src/assets/icons/javascript.png';
import mongodbIcon from '/src/assets/icons/mongodb.png';
import htmlIcon from '/src/assets/icons/html.png';
import tailwindIcon from '/src/assets/icons/tailwind.png';
import githubIcon from '/src/assets/icons/github.png';
import sqlIcon from '/src/assets/icons/sql.png';
import firebaseIcon from '/src/assets/icons/firebase.png';
import cIcon from '/src/assets/icons/c.png';
import cppIcon from '/src/assets/icons/cpp.png';
import pythonIcon from '/src/assets/icons/python.png';
import javaIcon from '/src/assets/icons/java.png';


function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const skillIcons = {
    react: reactIcon,
    node: nodeIcon,
    express: expressIcon,
    javascript: javascriptIcon,
    mongodb: mongodbIcon,
    html: htmlIcon,
    tailwind: tailwindIcon,
    github: githubIcon,
    sql: sqlIcon,
    firebase: firebaseIcon,
    c: cIcon,
    cpp: cppIcon,
    python: pythonIcon,
    java: javaIcon,
  };

  return (
    <div className="App">
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div className={`content ${isNavbarOpen ? '' : 'full-width'}`}>
        <div className="hamburger" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </div>
        <div id="home" className="home-section">
          <div className="home-content">
            <h1 className="home-title anton-sc-regular">
              Adanan Kasif 
            </h1>
            <div className="typewriter-container">
              <p>I'm a</p>
              <div className="typewriter-text anton-sc-regular">
                <Typewriter
                  options={{
                    strings: ["Full Stack Developer", "Web Developer", "Competitive Programmer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="home-buttons">
              <a href={Resume} download>
                <button className="resume-button">Resume</button>
              </a>
              <button className="contact-button" onClick={() => document.getElementById('hireme').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="home-carousel">
            <h1 className='anton-sc-regular'>My Recent Project</h1>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div className="carousel-item active">
              <img src={BurnedSales} alt="Burned Sales" />
            </div>
            <div className="carousel-item">
              <img src={CarousalImg1} alt="Carousel Image 1" />
            </div>
            <div className="carousel-item">
              <img src={CarousalImg2} alt="Carousel Image 2" />
            </div>
            <div className="carousel-item">
              <img src={CarousalImg3} alt="Carousel Image 3" />
            </div>
            <div className="carousel-item">
              <img src={CarousalImg4} alt="Carousel Image 4" />
            </div>
            <div className="carousel-item">
              <img src={CarousalImg5} alt="Carousel Image 5" />
            </div>
            <div className="carousel-item">
              <img src={CarousalImg6} alt="Carousel Image 6" />
            </div>
            </Carousel>
          </div>
        </div>
        <section id="about" className="about-section">
          <div className="about-content">            
            <div className="about-text raleway-desc">
            <h1 className='anton-sc-regular'>About Me</h1>
              <p className='para1'>
              I am a Full stack web developer who is passionate about revolutionizing the world through Web Technology. With a solid background in Computer Science, I am a hardworker,good learner and opportunist person.
              </p> <br />
              <p className='para2'>I've already worked on a few projects where I've worked on various technologies. My hobbies includes coding,travelling & Content Writting.</p> <br />
              <p className='para3'>I am not content with just the basics. I am eager to learn more about Web3.0 technologies and DevOps. I am seeking the opportunity to work with a team of experienced Web developers and contribute to real-world projects.</p>
              
              <a href="https://leetcode.com/u/Adnan_5057/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode" className="leetcode-icon">
                  <path fill="#B3B1B0" d="M22,14.355c0-0.742-0.564-1.345-1.26-1.345H10.676c-0.696,0-1.26,0.604-1.26,1.345c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355z"></path>
                  <path fill="#9C9A99" d="M22,14.355H9.416l0,0c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355L22,14.355z"></path>
                  <path fill="#C98F1B" d="M4.781,14.355H4.735c0.015,0.736,0.315,1.474,0.897,2.068c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.31,0.449-0.71,0.729-1.271,0.729c-0.02,0-0.041,0-0.062-0.001c-0.2-0.007-0.364-0.087-0.53-0.181c-0.035-0.02-0.07-0.04-0.104-0.062C8.963,23.593,10.221,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.272-0.275-0.627-0.413-0.978-0.413c-0.332,0-0.659,0.124-0.906,0.374l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363C5.024,15.716,4.79,15.052,4.781,14.355L4.781,14.355z"></path>
                  <path fill="#060605" d="M4.735,14.355H1.918c0.006,1.485,0.595,2.945,1.739,4.101c1.324,1.336,2.657,2.663,3.984,3.996c0.113,0.114,0.236,0.215,0.37,0.3c0.034,0.021,0.068,0.042,0.104,0.062c0.166,0.094,0.33,0.174,0.53,0.181c0.021,0.001,0.041,0.001,0.062,0.001c0.561,0,0.961-0.28,1.271-0.729c0.291-0.421,0.286-1.368-0.182-1.671l-0.204-0.198c-1.321-1.324-2.652-2.638-3.96-3.974C5.05,15.83,4.75,15.091,4.735,14.355L4.735,14.355z"></path>
                  <path fill="#E7A41F" d="M3.483,18.187l4.312,4.361C8.767,23.527,10.113,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.53-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363c-0.463-0.468-0.697-1.15-0.697-1.863c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635c-0.648-0.646-1.471-1.116-2.392-1.33l-0.033-0.006l2.447-2.504c0.512-0.514,0.494-1.366-0.037-1.901c-0.53-0.535-1.376-0.553-1.887-0.038L3.483,10.476C2.509,11.458,2,12.814,2,14.312S2.509,17.206,3.483,18.187L3.483,18.187z"></path>
                  <path fill="#070706" d="M8.115,22.814c-0.176-0.097-0.332-0.219-0.474-0.361c-1.327-1.333-2.66-2.66-3.984-3.996c-1.988-2.009-2.302-4.936-0.785-7.32c0.234-0.37,0.529-0.694,0.839-1.004c3.208-3.214,6.415-6.43,9.623-9.644c0.625-0.626,1.497-0.652,2.079-0.066c0.559,0.562,0.527,1.455-0.077,2.065c-0.77,0.776-1.54,1.55-2.31,2.325c-0.041,0.122-0.14,0.2-0.226,0.287c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-1.136,1.167-1.096,2.938,0.068,4.128c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.321,0.466-0.739,0.75-1.333,0.728C8.445,22.987,8.281,22.907,8.115,22.814L8.115,22.814z"></path>
                  <path fill="#EAB03C" d="M13.021,4.826c-0.044,0.115-0.138,0.19-0.221,0.273c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-0.58,0.596-0.853,1.349-0.827,2.102h0.046C4.781,14.368,4.78,14.339,4.78,14.31c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.248,0.251,0.576,0.375,0.908,0.375c0.35,0,0.705-0.138,0.977-0.413c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635C14.757,5.51,13.938,5.041,13.021,4.826L13.021,4.826z M14.4,0c-0.194,0.001-0.386,0.045-0.562,0.132C14.021,0.049,14.212,0.005,14.4,0L14.4,0z"></path>
                  <path fill="#272726" d="M14.432,0c-0.01,0-0.021,0-0.031,0c-0.189,0.004-0.379,0.049-0.562,0.132c-0.178,0.081-0.349,0.2-0.504,0.356c-3.208,3.214-6.416,6.43-9.623,9.644c-0.31,0.31-0.604,0.634-0.839,1.004c-0.652,1.025-0.966,2.151-0.954,3.262h2.818c-0.026-0.753,0.248-1.506,0.827-2.102c1.402-1.442,2.842-2.849,4.265-4.272c0.111-0.119,0.261-0.189,0.372-0.305c0.849-0.889,1.737-1.742,2.6-2.619c0.083-0.084,0.177-0.159,0.221-0.273c0.002-0.005,0.003-0.009,0.005-0.014c0.77-0.775,1.54-1.549,2.31-2.325c0.604-0.61,0.637-1.503,0.077-2.065C15.133,0.14,14.786,0,14.432,0L14.432,0z"></path>
                </svg>
              </a>
              
            </div>
            <div className="about-image">
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <div className="about-decoration"></div>
        </section>
       

<section id="skills" className="skills-section">
  <h2 className='anton-sc-regular'>Skills</h2>
  <div className="skills-container">
    {[
      'react', 'node', 'express', 'javascript', 'mongodb', 'html', 'tailwind', 
      'github', 'sql', 'firebase', 'python', 'java'
    ].map(skill => (
      <div key={skill} className="skill-item">
        <img className='skillImg' src={skillIcons[skill]} alt={`${skill} icon`} />
      </div>
    ))}
  </div>
</section>

        <Projects/>
        <section id="hireme" className="hireme-section raleway-desc">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Greater Noida, Uttar Pradesh 201310</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>adanankasifcsai21130@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91-8382880399</p>
            </div>
          </div>
          <div className="contact-form">
            <form action="mailto:adanankasifcsai21130@gmail.com" method="post" enctype="text/plain">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
