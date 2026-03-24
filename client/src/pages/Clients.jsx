import React from "react";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Clients",
    title: "Manufacturers who trust Asiduo Enterprises",
    intro:
      "We support quality teams across automotive, aerospace, medical, and precision engineering industries.",
    quotes: [
      ['"Asiduo Enterprises helped us stabilize our gauge calibration cycle and improved audit readiness."', "Quality Manager, Auto Components"],
      ['"Their team is responsive and precise. The uncertainty study was detailed and easy to follow."', "Plant Head, Precision Engineering"],
    ],
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Clienti",
    title: "Produttori che si affidano ad Asiduo Enterprises",
    intro: "Supportiamo team qualita nei settori automotive, aerospace, medicale e ingegneria di precisione.",
    quotes: [
      ['"Asiduo Enterprises ci ha aiutato a stabilizzare il ciclo di taratura e a migliorare la preparazione agli audit."', "Responsabile qualita, componenti auto"],
      ['"Il team e reattivo e preciso. Lo studio di incertezza era dettagliato e chiaro."', "Direttore di stabilimento, ingegneria di precisione"],
    ],
  },
  Spanish: {
    eyebrow: "Clientes",
    title: "Fabricantes que confian en Asiduo Enterprises",
    intro: "Apoyamos a equipos de calidad en automocion, aeroespacial, medico e ingenieria de precision.",
    quotes: [
      ['"Asiduo Enterprises nos ayudo a estabilizar el ciclo de calibracion y mejorar la preparacion para auditorias."', "Gerente de calidad, autopartes"],
      ['"Su equipo es preciso y atento. El estudio de incertidumbre fue claro y detallado."', "Jefe de planta, ingenieria de precision"],
    ],
  },
  German: {
    eyebrow: "Kunden",
    title: "Hersteller, die Asiduo Enterprises vertrauen",
    intro: "Wir unterstutzen Qualitatsteams in der Automobil-, Luftfahrt-, Medizin- und Prazisionstechnik.",
    quotes: [
      ['"Asiduo Enterprises half uns, den Kalibrierzyklus zu stabilisieren und die Auditbereitschaft zu verbessern."', "Qualitatsmanager, Autokomponenten"],
      ['"Das Team arbeitet reaktionsschnell und prazise. Die Unsicherheitsstudie war klar und detailliert."', "Werksleiter, Prazisionstechnik"],
    ],
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const Clients = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="drift-right"
          staggerMs={18}
          durationMs={740}
        />
        <p>{copy.intro}</p>
      </section>
      <section className="section testimonials">
        <div className="testimonial-grid">
          {copy.quotes.map(([text, by]) => (
            <div className="testimonial-card" key={by}>
              <p>{text}</p>
              <span>{by}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Clients;
