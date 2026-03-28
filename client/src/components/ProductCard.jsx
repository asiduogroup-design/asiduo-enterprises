import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);

const ProductCard = ({ name, description, category, image }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [imageError, setImageError] = React.useState(false);
  const labels = {
    "English (USA)": "Request Quote",
    "English (India)": "Request Quote",
    Italian: "Richiedi preventivo",
    Spanish: "Solicitar cotizacion",
    German: "Angebot anfordern",
  };
  const imageAlt = `${name} product image`;
  const imageSrc = image
    ? isAbsoluteUrl(image) || image.startsWith("data:")
      ? image
      : `${window.location.origin}${image.startsWith("/") ? image : `/${image}`}`
    : "";
  const handleRequestQuote = () => {
    const params = new URLSearchParams({
      interest: category,
      subject: `Quote request for ${name}`,
      message: `I would like a quote for ${name}. Please share the details.`,
    });
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="product-card">
      {imageSrc && !imageError ? (
        <div className="product-image-wrap">
          <img
            className="product-image"
            src={imageSrc}
            alt={imageAlt}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="product-image product-image-fallback" aria-hidden="true">
          <span>{category}</span>
        </div>
      )}
      <div className="product-tag">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="link-btn" type="button" onClick={handleRequestQuote}>
        {labels[language] || labels["English (USA)"]}
      </button>
    </div>
  );
};

export default ProductCard;
