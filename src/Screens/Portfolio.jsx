import React, { useEffect, useRef } from 'react';
import js from '../Images/js.png';
import html from '../Images/html.png';
import css from '../Images/css.png';
import tailwind from '../Images/tailwind.png';
import react from '../Images/React.png';
import firebase from '../Images/firebase.png';
import java from '../Images/java.png';
import python from '../Images/python.png';
import github from '../Images/github.png';
import figma from '../Images/figma.png';
import coffe from '../Images/coffe.png';
import animixplay from '../Images/animixplay.png';
import merzi from '../Images/merzci.png';
import Header from './Header';
import me from '../Images/me.png';

function Portfolio() {
const currentYear = new Date().getFullYear();

  const follower = (e) => {
    let i = document.getElementById('follower');

    i.style.left = (e.pageX) + 'px'; 
    i.style.top = (e.pageY) + 'px'; 
  }
  document.addEventListener('mousemove', follower);



    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
        const ab = document.getElementById('abspan');
        const abp = document.getElementById('abp');
        const Ahr = document.getElementById('Ahr');
        const Skills = document.getElementById('Skills');
        const Shr = document.getElementById('Shr');
        const skil1 = document.getElementById('skill1');
        const skil2 = document.getElementById('skill2');
        const projects = document.getElementById('Project');
        const Phr = document.getElementById('Phr');
        const Animixplay = document.getElementById('Animixplay');
        const Coffee = document.getElementById('Coffee');
        const Merzci = document.getElementById('Merzci');
        const ampic = document.getElementById('ampic');
        
       if (scrollPosition >= 150) {
        ab.style.transform = 'translateY(0vw)';
        abp.style.transform = 'translateY(0vw)';
        ampic.style.transform = 'translateY(0vw)';
        Ahr.style.width = '90%';
      }
      else{
        ab.style.transform = 'translateY(20vw)';
        abp.style.transform = 'translateY(20vw)';
        ampic.style.transform = 'translateY(20vw)';
        Ahr.style.width = '1%';
      }
      if (scrollPosition >= 700) {
        Skills.style.transform = 'translateY(0vw)';
        skil1.style.transform = 'translateY(0vw)';
        skil2.style.transform = 'translateY(0vw)'; 
        Shr.style.width = '90%';
      }
       else{
        Skills.style.transform = 'translateY(20vw)';
        skil1.style.transform = 'translateY(300%)';
        skil2.style.transform = 'translateY(300%)'; 
        Shr.style.width = '1%';
      }
      if (scrollPosition >= 1500) {
        projects.style.transform = 'translateY(0%)';
        Phr.style.width = '90%';
      }
       else{
        projects.style.transform = 'translateY(20vw)';
        Phr.style.width = '1%';
      }
      if (scrollPosition >= 1600) {
        Coffee.style.transform = 'translateY(0vw)';
      }
      else {
        Coffee.style.transform = 'translateY(100%)';
      }
      if (scrollPosition >= 2300) {
        Animixplay.style.transform = 'translateY(0vw)';
      }
      else {
        Animixplay.style.transform = 'translateY(100%)';
      }
      if (scrollPosition >= 2600) {
        Merzci.style.transform = 'translateY(0vw)';
      }
      else {
        Merzci.style.transform = 'translateY(100%)';
      }
    
    });

  return (
    <>
    <div className="bg">
      <div className="blob1"></div>
      <div className="blb1"></div>
      <div className="blob2"></div>
      <div className="blob3"></div>
      <div className="blob3"></div>
      <div className="blob3"></div>
      <div id="follower"></div>
    </div>
    <main>
      <Header></Header>
        <div className="introduction">
          <div className="name">
          <h1>Helllo I'm</h1>
          <h1>Jovianne Octaviano</h1>
          <h1>I design & code for web.</h1>
          <p>Web Developer with experience of Frontend Web Designs. I Love fun Web UI, collaboration and making web.
            <br /> <br />
            I prioritize clear content structure, clean design patterns, and meaningful user interactions.
          </p>
        </div>

        </div>

        <div className="About" id='aboutt'>
          <span id='abspan'><h1>About</h1> <hr id='Ahr' /></span>
          <p id='abp'>I'm Jovianne 4th year Student of STI West Negros University (STIWNU) Persuing my degree in bachelor of Information Technology, I have a keen interest in Problems Solving and Finding new and Dynamic ideas.

                I am a Machine Learning Enthusiast & Front-end Web Developer I can provide clean code and pixel perfect design </p>
        <img id='ampic' src={me} alt="" />
        </div>

        <div className="skills" id='skil'>
          <span id='Skills'><h1>Skills</h1><hr id='Shr' /></span>
          <div className="skills-tiles">
          <ul id='skill1'>
            <li className='e'><h1>HTML</h1> <img src={html} alt="HTML" /></li>
            <li><h1>CSS</h1><img src={css} alt="CSS" /></li>
            <li><h1>JS</h1><img src={js} alt="JavaScript" /></li>
            <li><h1>REACT</h1><img src={react} alt="React" /></li>
            <li><h1>TAILWIND</h1><img src={tailwind} alt="Tailwind CSS" /></li>
          </ul>
          <ul id='skill2'>
            <li><h1>JAVA</h1><img src={java} alt="Java" /></li>
            <li><h1>PYTHON</h1><img src={python} alt="Python" /></li>
            <li><h1>FIREBASE</h1><img src={firebase} alt="Firebase" /></li>
            <li><h1>GITHUB</h1><img src={github} alt="GitHub" /></li>
            <li><h1>FIGMA</h1><img src={figma} alt="Figma" /></li>
          </ul>
          </div>
        </div>

        <div className="projects" id='Projects'>
          <span id='Project'><h1>Projects</h1><hr id='Phr' /></span>
          <div className="project-container">
            <div id='Coffee'><h2>Coffee</h2> <p>
              My coffee website features a professional design with smooth animations, including fade-ins, hover effects, and parallax scrolling, all crafted using HTML, CSS, and JavaScript to create a modern and engaging user experience.
              </p>
              <a href="https://byte-code-x.github.io/coffee/">Live view</a>
              <img src={coffe} alt="" /></div>
            <div id='Animixplay'><h2>Animixplay</h2> <p>
              Animixplay is an anime streaming website I designed using HTML, CSS, and JavaScript, featuring a sleek and professional layout with smooth animations, responsive design, and interactive elements that enhance user engagement and provide a seamless viewing experience.
              </p>
              <a href="https://byte-code-x.github.io/VD/">Live view</a>
              <img src={animixplay} alt="" /></div>
            <div id='Merzci'><h2>Merzci</h2> <p>
              Merzci is an online ordering website I developed using HTML, CSS, and JavaScript, featuring a clean and professional design with smooth animations, intuitive navigation, and responsive layouts to make browsing products and placing orders easy and convenient for users.
              </p>
              <a href="https://byte-code-x.github.io/MERZCI/">Live view</a>
              <img src={merzi} alt="" /></div>
          </div>
        </div>
        
        <footer id='info'>
          <h1>Get in Touch </h1>
          <ul>
              <li>
    <a href="mailto:jovianne6756@gmail.com" target="_blank">
      <ion-icon name="mail-outline"></ion-icon>
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/jovianne.octaviano.2024" target="_blank">
      <ion-icon name="logo-facebook"></ion-icon>
    </a>
  </li>
  <li>
    <a href="https://github.com/Byte-Code-X" target="_blank">
      <ion-icon name="logo-github"></ion-icon>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank">
      <ion-icon name="logo-linkedin"></ion-icon>
    </a>
  </li>
          </ul>
               <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </footer>
    </main>
    </>
  )


  

  
}




export default Portfolio
