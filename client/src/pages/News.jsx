import React from "react";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineMapPin,
} from "react-icons/hi2";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "News",
    title: "Latest News & Events",
    intro: "Stay updated with our latest calibration projects, events, and industry insights.",
    introTitle: "Stay Updated with Asiduo",
    introCopy: "Follow the latest achievements, collaborations, and training programs.",
    tag: "Celebration",
    featureTitle: "Women's Day Celebration",
    featureCopy:
      "Our team celebrated Women's Day with gratitude and recognition for the amazing professionals who power our labs and field service operations.",
    stayTitle: "Want to stay updated?",
    stayCopy: "Subscribe to our newsletter to receive updates directly in your inbox.",
    button: "Subscribe Now",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Notizie",
    title: "Ultime notizie ed eventi",
    intro: "Resta aggiornato sui nostri progetti di taratura, eventi e approfondimenti di settore.",
    introTitle: "Resta aggiornato con Asiduo",
    introCopy: "Segui i risultati, le collaborazioni e i programmi di formazione piu recenti.",
    tag: "Celebrazione",
    featureTitle: "Celebrazione della Giornata della Donna",
    featureCopy:
      "Il nostro team ha celebrato la Giornata della Donna con gratitudine e riconoscimento per le professioniste che sostengono i nostri laboratori e servizi sul campo.",
    stayTitle: "Vuoi restare aggiornato?",
    stayCopy: "Iscriviti alla newsletter per ricevere aggiornamenti direttamente nella tua casella di posta.",
    button: "Iscriviti ora",
  },
  Spanish: {
    eyebrow: "Noticias",
    title: "Ultimas noticias y eventos",
    intro: "Mantengase al dia con nuestros ultimos proyectos de calibracion, eventos y novedades del sector.",
    introTitle: "Mantengase actualizado con Asiduo",
    introCopy: "Siga los ultimos logros, colaboraciones y programas de formacion.",
    tag: "Celebracion",
    featureTitle: "Celebracion del Dia de la Mujer",
    featureCopy:
      "Nuestro equipo celebro el Dia de la Mujer con gratitud y reconocimiento a las profesionales que impulsan nuestros laboratorios y servicios de campo.",
    stayTitle: "Quiere mantenerse actualizado?",
    stayCopy: "Suscribase a nuestro boletin para recibir actualizaciones directamente en su correo.",
    button: "Suscribirse ahora",
  },
  German: {
    eyebrow: "Neuigkeiten",
    title: "Aktuelle Nachrichten und Veranstaltungen",
    intro: "Bleiben Sie uber unsere neuesten Kalibrierprojekte, Veranstaltungen und Brancheneinblicke informiert.",
    introTitle: "Mit Asiduo auf dem Laufenden bleiben",
    introCopy: "Verfolgen Sie aktuelle Erfolge, Kooperationen und Schulungsprogramme.",
    tag: "Feier",
    featureTitle: "Weltfrauentag-Feier",
    featureCopy:
      "Unser Team feierte den Weltfrauentag mit Dankbarkeit und Anerkennung fur die Fachkrafte, die unsere Labore und AuBendienste tragen.",
    stayTitle: "Mochten Sie informiert bleiben?",
    stayCopy: "Abonnieren Sie unseren Newsletter, um Updates direkt in Ihr Postfach zu erhalten.",
    button: "Jetzt abonnieren",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const News = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page news-page">
      <section className="page-hero news-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="drop-in"
          staggerMs={19}
          durationMs={720}
        />
        <p>{copy.intro}</p>
      </section>

      <section className="section news-intro">
        <div className="news-intro-icon" aria-hidden="true">
          {copy.eyebrow}
        </div>
        <h2>{copy.introTitle}</h2>
        <p>{copy.introCopy}</p>
      </section>

      <section className="section news-feature">
        <div className="news-image">Event photo</div>
        <div className="news-card">
          <span className="news-tag">{copy.tag}</span>
          <h3>{copy.featureTitle}</h3>
          <p>{copy.featureCopy}</p>
          <div className="news-meta">
            <span>
              <HiOutlineCalendarDays /> Mar 8, 2026
            </span>
            <span>
              <HiOutlineClock /> 3:30 PM
            </span>
            <span>
              <HiOutlineMapPin /> Asiduo Enterprises
            </span>
          </div>
        </div>
      </section>

      <section className="section news-cta">
        <div>
          <h2>{copy.stayTitle}</h2>
          <p>{copy.stayCopy}</p>
        </div>
        <button className="btn btn-primary">{copy.button}</button>
      </section>
    </main>
  );
};

export default News;
