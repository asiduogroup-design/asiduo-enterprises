import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const ProductCard = ({ name, description, category }) => {
  const { language } = useLanguage();
  const labels = {
    "English (USA)": "Request Quote",
    "English (India)": "Request Quote",
    Italian: "Richiedi preventivo",
    Spanish: "Solicitar cotizacion",
    German: "Angebot anfordern",
  };

  return (
    <div className="product-card">
      <div className="product-tag">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="link-btn">
        {labels[language] || labels["English (USA)"]}
      </button>
    </div>
  );
};

export default ProductCard;
