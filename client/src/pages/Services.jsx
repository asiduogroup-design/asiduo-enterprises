import React from "react";
import { NavLink, useParams } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "What We Deliver",
    title: "Four Disciplines, One Accountable Partner",
    intro: "Specialised execution across critical infrastructure projects.",
    services: [
      {
        title: "Electrical",
        description: "Power distribution, lighting systems, emergency backups, and switchgear installation for government, defence, and enterprise facilities. CPWD and DMRC compliant execution.",
      },
      {
        title: "Fire Safety Systems",
        description: "Fire detection, suppression, and evacuation systems designed to BIS/IS and NFPA standards. Commissioning and statutory compliance for high-occupancy and critical infrastructure sites.",
      },
      {
        title: "Civil Works",
        description: "Structural finishes, MEP rough-ins, foundation work, and site-specific modifications. Execution aligned to architectural specs and permit requirements across India.",
      },
      {
        title: "CCTV & Surveillance",
        description: "Integrated video surveillance, access control, and monitoring systems for perimeter and facility-wide security. Installation and integration on government and defence sites.",
      },
    ],
    ctaTitle: "Ready to work with us?",
    ctaCopy: "Contact our team to discuss your project scope, timeline, and compliance requirements.",
    ctaButton: "Schedule a Consultation",
    learnMore: "Learn More",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Cosa Consegniamo",
    title: "Quattro Discipline, Un Partner Affidabile",
    intro: "Esecuzione specializzata su progetti infrastrutturali critici.",
    services: [
      {
        title: "Impianti Elettrici",
        description: "Distribuzione elettrica, sistemi di illuminazione, backup di emergenza e installazioni di switchgear per strutture governative, difensive e aziendali. Esecuzione conforme CPWD e DMRC.",
      },
      {
        title: "Sistemi Antincendio",
        description: "Tubi di rilevazione, sistemi di soppressione ed evacuazione progettati secondo BIS/IS e NFPA. Messa in servizio e conformita normativa per siti ad alta occupazione e infrastrutture critiche.",
      },
      {
        title: "Lavori Civili",
        description: "Finiture strutturali, rough-ins MEP, lavori di fondazione e modifiche specifiche del sito. Esecuzione allineata alle specifiche architettoniche e ai requisiti sui permessi.",
      },
      {
        title: "CCTV e Sorveglianza",
        description: "Sistemi integrati di videosorveglianza, controllo accessi e monitoraggio per la sicurezza perimetrale e dell'intera struttura. Installazione e integrazione in siti governativi e difensive.",
      },
    ],
    ctaTitle: "Pronto a lavorare con noi?",
    ctaCopy: "Contatta il nostro team per discutere l'ambito del tuo progetto, la tempistica e i requisiti di conformita.",
    ctaButton: "Pianifica una Consulenza",
    learnMore: "Scopri di Piu",
  },
  Spanish: {
    eyebrow: "Que Entregamos",
    title: "Cuatro Disciplinas, Un Socio Responsable",
    intro: "Ejecucion especializada en proyectos de infraestructura critica.",
    services: [
      {
        title: "Electricidad",
        description: "Distribucion electrica, sistemas de iluminacion, respaldos de emergencia e instalacion de equipos de maniobra para instalaciones gubernamentales, de defensa y empresariales. Ejecucion conforme a CPWD y DMRC.",
      },
      {
        title: "Sistemas de Seguridad contra Incendios",
        description: "Sistemas de deteccion, supresion y evacuacion contra incendios diseñados segun normas BIS/IS y NFPA. Puesta en marcha y cumplimiento normativo para sitios de alta ocupacion e infraestructuras criticas.",
      },
      {
        title: "Trabajos Civiles",
        description: "Acabados estructurales, roughins MEP, trabajos de cimentacion y modificaciones especificas del sitio. Ejecucion alineada con especificaciones arquitectonicas y requisitos de permisos.",
      },
      {
        title: "CCTV y Vigilancia",
        description: "Sistemas integrados de videovigilancia, control de acceso y monitoreo para seguridad perimetral e instalaciones completas. Instalacion e integracion en sitios gubernamentales y de defensa.",
      },
    ],
    ctaTitle: "Listo para trabajar con nosotros?",
    ctaCopy: "Contacta a nuestro equipo para discutir el alcance de tu proyecto, cronograma y requisitos de cumplimiento.",
    ctaButton: "Programar una Consulta",
    learnMore: "Ver Mas",
  },
  German: {
    eyebrow: "Was Wir Leisten",
    title: "Vier Disziplinen, Ein Verantwortlicher Partner",
    intro: "Spezialisierte Ausfuhrung bei kritischen Infrastrukturprojekten.",
    services: [
      {
        title: "Elektrik",
        description: "Stromverteilung, Beleuchtungssysteme, Notrueckfuehrung und Schaltgeraeteinstallation fuer Regierungs-, Verteidigungs- und Unternehmenseinrichtungen. CPWD und DMRC konforme Ausfuehrung.",
      },
      {
        title: "Brandschutzsysteme",
        description: "Nach BIS/IS und NFPA-Standards entworfene Branderkennung, Loeschtechnik und Evakuierungssysteme. Inbetriebnahme und gesetzliche Konformitaet fuer hochfrequentierte und kritische Infrastrukturstandorte.",
      },
      {
        title: "Tiefbau",
        description: "Strukturelle Oberflaechenbehandlung, MEP-Rohinstallation, Fundierungsarbeiten und spezifische Standortmodifikationen. Ausfuehrung gemaess Architekturvorgaben und Genehmigungsanforderungen.",
      },
      {
        title: "CCTV und Ueberwachung",
        description: "Integrierte Videoueberwachungs-, Zugangsschutz- und Ueberwachungssysteme fuer Umkreis- und anlagenbereite Sicherheit. Installation und Integration auf Regierungs- und Verteidigungsstandorten.",
      },
    ],
    ctaTitle: "Bereit, mit uns zu arbeiten?",
    ctaCopy: "Kontaktiere unser Team, um dein Projektumfang, Zeitplan und Konformitaetsanforderungen zu besprechen.",
    ctaButton: "Termin Vereinbaren",
    learnMore: "Mehr Erfahren",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const Services = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page services-page">
      <section className="page-hero services-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="pop-spin"
          staggerMs={20}
          durationMs={720}
        />
        <p>{copy.intro}</p>
      </section>

      <section className="section services-grid-section">
        <div className="services-grid">
          {copy.services.map((service) => {
            const slug = service.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <NavLink className="service-card-button" to={`/services/${slug}`}>
                  {copy.learnMore} →
                </NavLink>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section services-cta">
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

export default Services;
