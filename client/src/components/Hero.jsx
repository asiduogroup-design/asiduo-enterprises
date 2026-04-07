import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const heroImageUrl =
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775457009/ChatGPT_Image_Apr_5_2026_11_38_53_AM_kohezu.png";

const heroCopy = {
  "English (USA)": {
    ariaLabel: "Hero image",
    alt: "Asiduo Enterprises hero",
  },
  "English (India)": null,
  Italian: {
    ariaLabel: "Immagine hero",
    alt: "Hero di Asiduo Enterprises",
  },
  Spanish: {
    ariaLabel: "Imagen principal",
    alt: "Hero de Asiduo Enterprises",
  },
  German: {
    ariaLabel: "Hero-Bild",
    alt: "Hero von Asiduo Enterprises",
  },
};
heroCopy["English (India)"] = heroCopy["English (USA)"];

const Hero = () => {
  const { language } = useLanguage();
  const copy = heroCopy[language] || heroCopy["English (USA)"];

  return (
    <section className="hero hero-image-only-section" aria-label={copy.ariaLabel}>
      <img
        className="hero-image-only"
        src={heroImageUrl}
        alt={copy.alt}
      />
    </section>
  );
};

export default Hero;
