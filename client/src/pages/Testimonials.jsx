import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Track Record",
    title: "Proven Delivery Excellence",
    intro: "A decade of trusted partnership with India's most critical organisations.",
    projectValue: "₹1.87 Cr+",
    projectValueLabel: "TOTAL PROJECT VALUE EXECUTED",
    projectStats: "25 Projects · 10+ Client Organisations",
    clientOrganizations: "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    ctaTitle: "Ready to partner with a trusted contractor?",
    ctaCopy: "We deliver compliance-led solutions across Electrical, Fire Safety, Civil, and CCTV disciplines.",
    ctaButton: "Schedule a Consultation",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Track Record",
    title: "Eccellenza di esecuzione provata",
    intro: "Un decennio di partnership fidata con le organizzazioni piu critiche dell'India.",
    projectValue: "₹1.87 Cr+",
    projectValueLabel: "VALORE TOTALE DEL PROGETTO ESEGUITO",
    projectStats: "25 Progetti · 10+ Organizzazioni clienti",
    clientOrganizations: "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    ctaTitle: "Pronto a collaborare con un appaltatore affidabile?",
    ctaCopy: "Forniamo soluzioni conformi ai regolamenti nei settori Elettrico, Sicurezza Antincendio, Civile e CCTV.",
    ctaButton: "Pianifica una consulenza",
  },
  Spanish: {
    eyebrow: "Track Record",
    title: "Excelencia en Entrega Comprobada",
    intro: "Una decada de asociacion confiable con las organizaciones mas criticas de India.",
    projectValue: "₹1.87 Cr+",
    projectValueLabel: "VALOR TOTAL DEL PROYECTO EJECUTADO",
    projectStats: "25 Proyectos · 10+ Organizaciones clientas",
    clientOrganizations: "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    ctaTitle: "Listo para asociarse con un contratista confiable?",
    ctaCopy: "Entregamos soluciones cumplidas en disciplinas Electrica, Seguridad contra Incendios, Civil y CCTV.",
    ctaButton: "Programar una consulta",
  },
  German: {
    eyebrow: "Track Record",
    title: "Bewiesene Lieferexzellenz",
    intro: "Ein Jahrzehnt vertrauensvoller Partnerschaft mit Indiens wichtigsten Organisationen.",
    projectValue: "₹1.87 Cr+",
    projectValueLabel: "GESAMTWERT AUSGEFUHRTER PROJEKTE",
    projectStats: "25 Projekte · 10+ Kundenorganisationen",
    clientOrganizations: "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    ctaTitle: "Bereit, mit einem vertrauenswurdigen Auftragnehmer zu arbeiten?",
    ctaCopy: "Wir liefern konforme Losungen in den Bereichen Elektrik, Brandschutz, Tiefbau und CCTV.",
    ctaButton: "Termin vereinbaren",
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

      <section className="section testimonials-achievement">
        <article className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-figure">{copy.projectValue}</div>
            <div className="testimonials-card-label">{copy.projectValueLabel}</div>
          </div>
          <div className="testimonials-card-body">
            <p className="testimonials-stats">{copy.projectStats}</p>
            <p className="testimonials-clients">{copy.clientOrganizations}</p>
          </div>
        </article>
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
