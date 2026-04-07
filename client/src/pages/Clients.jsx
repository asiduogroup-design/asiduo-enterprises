import React from "react";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Who We Work With",
    title: "Trusted by Public Infrastructure, Defence, and Enterprise Teams",
    intro:
      "A snapshot of organizations and institutions referenced in your portfolio, across electrical, fire safety, civil, CCTV, HVAC, and petroleum-related scopes.",
    activeTitle: "Active & Delivered Clients",
    targetTitle: "Actively Targeting",
    targetCopy:
      "With BPCL project exposure and multi-discipline compliance capability, we are positioned for empanelment with additional petroleum and energy leaders.",
    targetsNote: "Plus other petroleum and energy majors as part of ongoing expansion.",
    experienceIn: "project experience in",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Con Chi Lavoriamo",
    title: "Scelti da team di infrastrutture pubbliche, difesa e impresa",
    intro:
      "Una panoramica di organizzazioni e istituzioni presenti nel portafoglio, tra ambiti elettrici, antincendio, civili, CCTV, HVAC e petroliferi.",
    activeTitle: "Clienti Attivi e Consegnati",
    targetTitle: "In Fase di Target",
    targetCopy:
      "Con esperienza su progetti BPCL e capacita multi-disciplinare orientata alla conformita, siamo pronti per ulteriori empanelment nel settore energia.",
    targetsNote: "Inoltre altri grandi gruppi petroliferi ed energetici in espansione.",
    experienceIn: "esperienza progettuale in",
  },
  Spanish: {
    eyebrow: "Con Quienes Trabajamos",
    title: "Con la confianza de equipos de infraestructura publica, defensa y empresa",
    intro:
      "Una vista general de organizaciones e instituciones de su portafolio en ambitos electrico, contra incendios, civil, CCTV, HVAC y petroleo.",
    activeTitle: "Clientes Activos y Entregados",
    targetTitle: "En Objetivo Activo",
    targetCopy:
      "Con experiencia en proyectos BPCL y capacidad multidisciplinaria de cumplimiento, estamos posicionados para nuevas incorporaciones en energia y petroleo.",
    targetsNote: "Ademas de otros grandes actores de petroleo y energia en expansion.",
    experienceIn: "experiencia de proyecto en",
  },
  German: {
    eyebrow: "Mit Wem Wir Arbeiten",
    title: "Vertrauen von Teams aus Infrastruktur, Verteidigung und Unternehmen",
    intro:
      "Ein Einblick in Organisationen und Institutionen im Portfolio uber Elektrik, Brandschutz, Tiefbau, CCTV, HVAC und Petroleum.",
    activeTitle: "Aktive und Gelieferte Kunden",
    targetTitle: "Aktiv Im Fokus",
    targetCopy:
      "Mit BPCL-Projekterfahrung und multidisziplinarer Compliance-Kompetenz sind wir fur weitere Energie- und Petroleum-Empanelments positioniert.",
    targetsNote: "Sowie weitere fuhrende Energie- und Petroleumunternehmen in Expansion.",
    experienceIn: "Projekterfahrung in",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];
copyByLanguage.Italian = copyByLanguage["English (USA)"];
copyByLanguage.Spanish = copyByLanguage["English (USA)"];
copyByLanguage.German = copyByLanguage["English (USA)"];

const activeClients = [
  {
    code: "NMRC",
    name: "Noida Metro Rail Corporation",
    domains: ["Electrical", "Civil", "CCTV"],
  },
  {
    code: "IAF",
    name: "Indian Air Force - AFS Hindan, Ghaziabad",
    domains: ["Fire", "Civil", "Electrical"],
  },
  {
    code: "UPSC",
    name: "Union Public Service Commission",
    domains: ["HVAC/AC"],
  },
  {
    code: "MEITY",
    name: "Ministry of Electronics and Information Technology",
    domains: ["Fire Safety"],
  },
  {
    code: "BPCL",
    name: "Bharat Petroleum Corporation Limited",
    domains: ["Electrical", "Petroleum"],
  },
  {
    code: "SOI",
    name: "Survey of India, Dehradun",
    domains: ["Electrical", "HVAC/AC"],
  },
];

const targetAccounts = ["IOCL", "HPCL", "ONGC", "GAIL"];

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

      <section className="section clients-showcase">
        <div className="section-heading">
          <h2>{copy.activeTitle}</h2>
        </div>

        <div className="clients-grid">
          {activeClients.map((client) => (
            <article className="client-card" key={client.code}>
              <p className="client-code">{client.code}</p>
              <h3>{client.name}</h3>
              <div className="client-tags">
                {client.domains.map((domain) => (
                  <span key={`${client.code}-${domain}`}>{domain}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section clients-targets">
        <div className="clients-targets-card">
          <p className="eyebrow">{copy.targetTitle}</p>
          <p>{copy.targetCopy}</p>
          <div className="client-target-chips">
            {targetAccounts.map((account) => (
              <span key={account}>{account}</span>
            ))}
          </div>
          <p className="clients-targets-note">
            {copy.targetsNote}
          </p>
        </div>
      </section>

      <section className="section testimonials">
        <div className="testimonial-grid">
          {activeClients.slice(0, 2).map((client) => (
            <div className="testimonial-card" key={`proof-${client.code}`}>
              <p>
                {client.name} {copy.experienceIn} {client.domains.join(", ")}.
              </p>
              <span>{client.code}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Clients;
