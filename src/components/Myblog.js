import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Myblog.css';
import myphoto from '../assets/Kiev.jpg';
// import myphoto1 from '../assets/Istanbul.jpg';

function Myblog() {
    const navigate = useNavigate();
  const [slides] = useState([
    {
      id: 1,
      title: "Lossless Youths",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://images.pexels.com/photos/3732500/pexels-photo-3732500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Estrange Bond",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "The Gate Keeper",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://images.pexels.com/photos/12778446/pexels-photo-12778446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Last Trace Of Us",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://images.pexels.com/photos/7539815/pexels-photo-7539815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Urban Decay",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://images.pexels.com/photos/15406805/pexels-photo-15406805/free-photo-of-a-view-of-the-city-of-istanbul-with-the-blue-mosque-in-the-background.jpeg"
    },
    {
      id: 6,
      title: "The Migration",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: myphoto
    }
  ]);

  const [currentSlides, setCurrentSlides] = useState(slides);

  const handleNext = () => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      const firstSlide = newSlides.shift();
      newSlides.push(firstSlide);
      return newSlides;
    });
  };

  const handlePrev = () => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      const lastSlide = newSlides.pop();
      newSlides.unshift(lastSlide);
      return newSlides;
    });
  };

  return (
    <main className="blog-slider-main">
      <ul className="slider">
        {currentSlides.map((slide, index) => (
          <li 
            key={slide.id} 
            className="item" 
            style={{backgroundImage: `url('${slide.image}')`}}
          >
            <div className="content">
              <h2 className="title">"{slide.title}"</h2>
              <p className="description">{slide.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={handlePrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="btn next" onClick={handleNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>
       <div className="contact-buttons">
        <button onClick={() => navigate("/")} className="return-btn-global">
          ⬅ Вернуться на главную
        </button>
      </div>
    </main>
  );
}

export default Myblog;