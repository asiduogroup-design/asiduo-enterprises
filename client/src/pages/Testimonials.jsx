import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Testimonials",
    title: "Client Testimonials",
    intro: "Hear from businesses that trust our precision services.",
    introTitle: "What Our Clients Say",
    introCopy:
      "Our partners rely on Asiduo for accuracy, accountability, and fast support.",
    ctaTitle: "Ready to experience the Asiduo difference?",
    ctaCopy: "Join teams that have improved their measurement capabilities with our support.",
    ctaButton: "Contact Us Today",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Testimonianze",
    title: "Testimonianze dei clienti",
    intro: "Ascolta le aziende che si affidano ai nostri servizi di precisione.",
    introTitle: "Cosa dicono i nostri clienti",
    introCopy: "I nostri partner si affidano ad Asiduo per precisione, responsabilita e supporto rapido.",
    ctaTitle: "Pronto a vivere la differenza Asiduo?",
    ctaCopy: "Unisciti ai team che hanno migliorato le loro capacita di misura con il nostro supporto.",
    ctaButton: "Contattaci oggi",
  },
  Spanish: {
    eyebrow: "Testimonios",
    title: "Testimonios de clientes",
    intro: "Escuche a las empresas que confian en nuestros servicios de precision.",
    introTitle: "Lo que dicen nuestros clientes",
    introCopy: "Nuestros socios confian en Asiduo por su precision, responsabilidad y soporte rapido.",
    ctaTitle: "Listo para experimentar la diferencia Asiduo?",
    ctaCopy: "Unase a los equipos que han mejorado sus capacidades de medicion con nuestro apoyo.",
    ctaButton: "Contactenos hoy",
  },
  German: {
    eyebrow: "Referenzen",
    title: "Kundenstimmen",
    intro: "Erfahren Sie von Unternehmen, die unseren Prazisionsservices vertrauen.",
    introTitle: "Was unsere Kunden sagen",
    introCopy: "Unsere Partner verlassen sich auf Asiduo fur Genauigkeit, Verantwortung und schnellen Support.",
    ctaTitle: "Mochten Sie den Asiduo-Unterschied erleben?",
    ctaCopy: "SchlieBen Sie sich Teams an, die ihre Messfahigkeiten mit unserer Hilfe verbessert haben.",
    ctaButton: "Heute kontaktieren",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const Testimonials = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page testimonials-page">
      <section className="page-hero testimonials-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="pop-spin"
          staggerMs={20}
          durationMs={720}
        />
        <p>{copy.intro}</p>
      </section>

      <section className="section testimonials-intro">
        <div className="testimonials-icon" aria-hidden="true">
          <HiOutlineChatBubbleLeftRight />
        </div>
        <h2>{copy.introTitle}</h2>
        <p>{copy.introCopy}</p>
      </section>

      <section className="section testimonials-cta">
        <div>
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaCopy}</p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          {copy.ctaButton}
        </NavLink>
      </section>
    </main>
  );
};

export default Testimonials;
