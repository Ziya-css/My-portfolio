import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";

  function About(){
    const navigate = useNavigate();
  return (
      <div className="contact-buttons">
        <button onClick={() => navigate("/")} className="return-btn-global">
          ⬅ Вернуться на главную
        </button>
      

      <div className="Bio">
        <h1>Hello, I am Ziya</h1>
        <p>
          I am a junior frontend developer. I’m 25 years old and passionate
          about web development. I enjoy creating beautiful and interactive user
          interfaces, and I’m constantly learning new technologies to grow and
          improve in my career.
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

