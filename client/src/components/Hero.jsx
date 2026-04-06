import React from "react";

const heroImageUrl =
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775457009/ChatGPT_Image_Apr_5_2026_11_38_53_AM_kohezu.png";

const Hero = () => {
  return (
    <section className="hero hero-image-only-section" aria-label="Hero image">
      <img
        className="hero-image-only"
        src={heroImageUrl}
        alt="Asiduo Enterprises hero"
      />
    </section>
  );
};

export default Hero;
