import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import profileImage from '../assets/Ziya.JPG';
import { gsap } from "gsap";

function About() {
  const navigate = useNavigate();
  return (
    <div className="contact-buttons">
      <button onClick={() => navigate("/")} className="return-btn-global">
        ⬅ Go back
      </button>
      <div className="Img-container">
        <img src={profileImage} alt="ziya" />
      </div>

      <div className="Bio">
        <h1>Biography</h1>
        <hr className="line" />
        <p className="ZZ">
          Hi, my name is Ziya.I’m a junior front-end developer with strong interest in building clean, user-friendly websites. I enjoy solving problems and learning new tools to improve my skills. I speak Azerbaijani, Russian, and Turkish fluently, and my English is at an upper-intermediate level.I come from a background in professional football and hospitality management, which means teamwork, discipline and staying calm under pressure are not strangers to me.
        </p>
        <p className="LL">  After studying Hospitality Management in Ukraine and working in restaurant management for years, I decided to embrace technology - learn coding to bring my customer-oriented mindset to front-end development while learning full-stack.

          I’m now looking for a professional opportunity where I can grow as a developer and contribute to real projects. Do you have a project or an opportunity for me to contribute and grow professionally? Contact me!
        </p>

      </div>



      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default About;

