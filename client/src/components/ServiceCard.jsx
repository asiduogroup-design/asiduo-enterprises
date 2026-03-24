import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const ServiceCard = ({ title, desc }) => {
  const { language } = useLanguage();
  const labels = {
    "English (USA)": "Learn more",
    "English (India)": "Learn more",
    Italian: "Scopri di piu",
    Spanish: "Saber mas",
    German: "Mehr erfahren",
  };

  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="link-btn">
        {labels[language] || labels["English (USA)"]}
      </button>
    </div>
  );
};

export default ServiceCard;
