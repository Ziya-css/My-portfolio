import React from "react";
import { useNavigate } from "react-router-dom";
import "./Myproject.css";

function Myproject() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Сайт магазин",
      link:"https://Dentaluxacademy.com"
    },
    {
      title: "Сайт визитка",
      link:"https://precious-marshmallow-fc2ba3.netlify.app/"
    },
  ];

  return (
    <div className="myproject-page">
      <div className="contact-buttons">
        <button onClick={() => navigate("/")} className="return-btn-global">
          ⬅ Go back
        </button>
      </div>

      <h1 className="nameProject">💻 My project</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <iframe
              src={project.link}
              title={project.title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🔗 Go to website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myproject;
