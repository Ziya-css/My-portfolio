import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./About.css";

import profile from "../assets/profile.jpg";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";

import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";

const images = [profile, work1, work2];

while (images.length < 10) {
  images.push(images[images.length % 3]);
}

const About = () => {
  const navigate = useNavigate(); // ✅ правильно размещено

  useEffect(() => {
    let xPos = 0;

    const getBgPos = (i) => {
      const ring = document.querySelector(".ring");
      if (!ring) return "0px 0px";
      const rotationY = gsap.getProperty(ring, "rotationY");
      return (
        100 -
        (gsap.utils.wrap(0, 360, rotationY - 180 - i * 36) / 360) * 500 +
        "px 0px"
      );
    };

    gsap.timeline()
      .set(".ring", { rotationY: 180, cursor: "grab" })
      .set(".img", {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) => `url(${images[i]})`,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(".img", {
        duration: 1.2,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
      })
      .add(() => {
        document.querySelectorAll(".img").forEach((img) => {
          img.addEventListener("mouseenter", (e) => {
            const current = e.currentTarget;
            gsap.to(".img", {
              opacity: (i, t) => (t === current ? 1 : 0.5),
              ease: "power3",
            });
          });

          img.addEventListener("mouseleave", () => {
            gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
          });
        });
      }, "-=0.5");

    const dragStart = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;
      xPos = Math.round(e.clientX);
      gsap.set(".ring", { cursor: "grabbing" });
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", drag);
    };

    const drag = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;
      gsap.to(".ring", {
        rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
        onUpdate: () => {
          gsap.set(".img", {
            backgroundPosition: (i) => getBgPos(i),
          });
        },
      });
      xPos = Math.round(e.clientX);
    };

    const dragEnd = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      gsap.set(".ring", { cursor: "grab" });
    };

    document.addEventListener("mousedown", dragStart);
    document.addEventListener("touchstart", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);

    return () => {
      document.removeEventListener("mousedown", dragStart);
      document.removeEventListener("touchstart", dragStart);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchend", dragEnd);
    };
  }, []);

  return (
    <div className="stage">
      {/* Кнопка возврата на главную */}
      <div className="contact-buttons">
        <button onClick={() => navigate("/")} className="return-btn-global">
          ⬅ Вернуться на главную
        </button>
      </div>

      <div className="Bio">
        <h1>Hello, I am Ziya</h1>
        <p>
          I am a junior frontend developer. I’m 25 years old and passionate
          about web development. I enjoy creating beautiful and interactive user
          interfaces, and I’m constantly learning new technologies to grow and
          improve in my career.
        </p>
      </div>

      <div className="container">
        <div className="ring">
          {images.map((img, i) => (
            <div key={i} className="img" />
          ))}
        </div>
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
};

export default About;

