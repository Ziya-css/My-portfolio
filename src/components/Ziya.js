import React from "react";
import { useNavigate } from "react-router-dom";

function Ziya() {
  const navigate = useNavigate();

  const items = [
    { icon: "blogging.png", label: "My projects" , link:"/projects"},
    { icon: "confirmation.png", label: "About me", link: "/Aboutme" },
    { icon: "folder (1).png", label: "My blog" , link:"/Myblog" },
    { icon: "man.png", label: "Contact me", link: "/contact" },
  ];

  return (
    <div className="ziya">
      {items.map((item, index) => (
        <div
          className="ziya-block"
          key={index}
          onClick={() => item.link && navigate(item.link)}
          style={{ cursor: item.link ? "pointer" : "default" }}
        >
          <img
            className="img-icon"
            src={`${process.env.PUBLIC_URL}/icons/${item.icon}`}
            alt={`icon-${index}`}
          />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Ziya;

