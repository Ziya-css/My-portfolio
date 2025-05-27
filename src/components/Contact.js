import React from "react";
import { useNavigate } from "react-router-dom";
import ShareButtons from "./ShareButtons";
import "./contact.css";


function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h1 className="contact-title">Свяжитесь со мной</h1>
      <p className="contact-subtitle">
        Ниже вы найдёте моё местоположение, контактную информацию и соцсети.
        Также можете написать мне сообщение!
      </p>

      <div className="contact-map">
        <iframe
          title="My location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.93739987475027!2d49.9500548!3d40.3756275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030636fb7c984c9%3A0x754fe75bba95416b!2sX%C9%99tai-10%20MMMC!5e0!3m2!1sen!2saz!4v1748175459207!5m2!1sen!2saz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-info">
        <p>📍 Баку, Азербайджан</p>
        <p>
          📞 <a href="tel:+994706380333">+994 70 638 03 33</a>
        </p>
        <p>
          📧 <a href="mailto:ziya@example.com">ziya@example.com</a>
        </p>
      </div>

      <div className="contact-buttons">
        <button onClick={() => navigate("/")} className="return-btn-global">
          ⬅ Вернуться на главную
        </button>
      </div>

      <ShareButtons />
    </div>
  );
}

export default Contact;