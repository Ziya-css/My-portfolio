import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import "./ShareButtons.css"; // стили отдельно

function ShareButtons() {
  const shareUrl = "https://your-website.com"; // Замени на свою ссылку
  
  return (
    <div className="share-buttons">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href={`https://www.instagram.com/`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn instagram"
      >
        <FaInstagram />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn linkedin"
      >
        <FaLinkedinIn />
      </a>

     <a href="https://wa.me/994706380333" target="_blank" rel="noopener noreferrer" className="share-btn whatsapp">
  <FaWhatsapp />
</a>

      <a
        href="https://t.me/Xxx_068"
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn telegram"
      >
        <FaTelegramPlane />
      </a>
    </div>
  );
}

export default ShareButtons;
