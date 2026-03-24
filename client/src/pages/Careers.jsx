import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Careers",
    title: "Build precision careers at Asiduo Enterprises",
    intro:
      "Join a team delivering trusted calibration and metrology services across India. We invest in hands-on growth, mentorship, and long-term expertise.",
    submit: "Submit Your Profile",
    explore: "Explore Opportunities",
    stats: [
      ["10+ Years", "Calibration experience"],
      ["12+ Industries", "Manufacturing, aerospace, pharma"],
      ["ISO Aligned", "Process-ready documentation"],
    ],
    whyEyebrow: "Why work with us",
    whyTitle: "Craft your future in metrology",
    whyCopy: "Professional teams, practical exposure, and steady growth.",
    cards: [
      ["Leading Projects", "Industry-grade calibration and metrology work."],
      ["Hands-on Practice", "Direct exposure to precision instruments and labs."],
      ["Career Growth", "Clear paths for skills, certifications, and progress."],
    ],
    joinEyebrow: "Why join us",
    joinTitle: "People-first culture with measurable impact",
    joinPills: [
      "Professional Growth",
      "Collaborative Environment",
      "Industry Exposure",
    ],
    rolesEyebrow: "Open roles",
    rolesTitle: "We are not hiring right now",
    rolesCopy: "Submit your resume and we will contact you for future openings.",
    rolesCards: [
      ["No openings currently", "We keep every profile on file for upcoming requirements."],
      ["Upload your resume", "Share your profile and we will reach out soon."],
    ],
    processEyebrow: "Hiring process",
    processTitle: "Clear steps from application to onboarding",
    processSteps: [
      ["Profile review", "We match your skills with upcoming requirements."],
      ["Technical conversation", "Meet our experts to align on tools and projects."],
      ["Offer and onboarding", "Transparent offer and a structured ramp-up plan."],
    ],
    hrEyebrow: "Contact HR",
    hrTitle: "Have questions about careers?",
    hrCopy: "Write to us and our team will respond within 48 hours.",
    hrButton: "Contact HR",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Carriere",
    title: "Costruisci una carriera di precisione con Asiduo Enterprises",
    intro:
      "Unisciti a un team che offre servizi affidabili di taratura e metrologia in tutta l'India. Investiamo in crescita pratica, mentoring ed esperienza a lungo termine.",
    submit: "Invia il tuo profilo",
    explore: "Esplora le opportunita",
    stats: [
      ["10+ Anni", "Esperienza nella taratura"],
      ["12+ Settori", "Produzione, aerospazio, pharma"],
      ["Allineati ISO", "Documentazione pronta per i processi"],
    ],
    whyEyebrow: "Perche lavorare con noi",
    whyTitle: "Costruisci il tuo futuro nella metrologia",
    whyCopy: "Team professionali, esperienza pratica e crescita costante.",
    cards: [
      ["Progetti importanti", "Lavoro di taratura e metrologia di livello industriale."],
      ["Pratica diretta", "Esposizione concreta a strumenti e laboratori di precisione."],
      ["Crescita professionale", "Percorsi chiari per competenze, certificazioni e progressi."],
    ],
    joinEyebrow: "Perche unirti a noi",
    joinTitle: "Cultura centrata sulle persone con impatto reale",
    joinPills: [
      "Crescita professionale",
      "Ambiente collaborativo",
      "Esperienza di settore",
    ],
    rolesEyebrow: "Posizioni aperte",
    rolesTitle: "Al momento non stiamo assumendo",
    rolesCopy: "Invia il tuo curriculum e ti contatteremo per future opportunita.",
    rolesCards: [
      ["Nessuna posizione aperta", "Conserviamo ogni profilo per esigenze future."],
      ["Carica il tuo curriculum", "Condividi il tuo profilo e ti contatteremo presto."],
    ],
    processEyebrow: "Processo di selezione",
    processTitle: "Passaggi chiari dalla candidatura all'onboarding",
    processSteps: [
      ["Revisione del profilo", "Allineiamo le tue competenze con le prossime esigenze."],
      ["Colloquio tecnico", "Incontra i nostri esperti per discutere strumenti e progetti."],
      ["Offerta e onboarding", "Offerta trasparente e percorso di inserimento strutturato."],
    ],
    hrEyebrow: "Contatta HR",
    hrTitle: "Hai domande sulle carriere?",
    hrCopy: "Scrivici e il nostro team rispondera entro 48 ore.",
    hrButton: "Contatta HR",
  },
  Spanish: {
    eyebrow: "Carreras",
    title: "Construya una carrera de precision en Asiduo Enterprises",
    intro:
      "Unase a un equipo que ofrece servicios confiables de calibracion y metrologia en toda India. Invertimos en crecimiento practico, mentoria y experiencia a largo plazo.",
    submit: "Enviar su perfil",
    explore: "Explorar oportunidades",
    stats: [
      ["10+ Anos", "Experiencia en calibracion"],
      ["12+ Industrias", "Manufactura, aeroespacial, pharma"],
      ["Alineado con ISO", "Documentacion lista para procesos"],
    ],
    whyEyebrow: "Por que trabajar con nosotros",
    whyTitle: "Construya su futuro en metrologia",
    whyCopy: "Equipos profesionales, experiencia practica y crecimiento constante.",
    cards: [
      ["Proyectos lideres", "Trabajo de calibracion y metrologia de nivel industrial."],
      ["Practica directa", "Exposicion a instrumentos y laboratorios de precision."],
      ["Crecimiento profesional", "Caminos claros para habilidades, certificaciones y progreso."],
    ],
    joinEyebrow: "Por que unirse a nosotros",
    joinTitle: "Cultura centrada en las personas con impacto medible",
    joinPills: [
      "Crecimiento profesional",
      "Entorno colaborativo",
      "Exposicion industrial",
    ],
    rolesEyebrow: "Vacantes",
    rolesTitle: "No estamos contratando ahora",
    rolesCopy: "Envie su curriculum y lo contactaremos para futuras vacantes.",
    rolesCards: [
      ["Sin vacantes por ahora", "Guardamos cada perfil para futuras necesidades."],
      ["Suba su curriculum", "Comparta su perfil y nos pondremos en contacto pronto."],
    ],
    processEyebrow: "Proceso de contratacion",
    processTitle: "Pasos claros desde la solicitud hasta la incorporacion",
    processSteps: [
      ["Revision de perfil", "Relacionamos sus habilidades con futuras necesidades."],
      ["Conversacion tecnica", "Conozca a nuestros expertos para alinear herramientas y proyectos."],
      ["Oferta e incorporacion", "Oferta transparente y un plan de integracion estructurado."],
    ],
    hrEyebrow: "Contactar RRHH",
    hrTitle: "Tiene preguntas sobre carreras?",
    hrCopy: "Escribanos y nuestro equipo respondera dentro de 48 horas.",
    hrButton: "Contactar RRHH",
  },
  German: {
    eyebrow: "Karriere",
    title: "Bauen Sie eine Prazisionskarriere bei Asiduo Enterprises auf",
    intro:
      "Werden Sie Teil eines Teams, das in ganz Indien zuverlassige Kalibrierungs- und Metrologiedienste liefert. Wir investieren in praxisnahes Wachstum, Mentoring und langfristige Expertise.",
    submit: "Profil senden",
    explore: "Moglichkeiten ansehen",
    stats: [
      ["10+ Jahre", "Erfahrung in der Kalibrierung"],
      ["12+ Branchen", "Fertigung, Luftfahrt, Pharma"],
      ["ISO-ausgerichtet", "Prozessfertige Dokumentation"],
    ],
    whyEyebrow: "Warum mit uns arbeiten",
    whyTitle: "Gestalten Sie Ihre Zukunft in der Metrologie",
    whyCopy: "Professionelle Teams, praktische Erfahrung und stetiges Wachstum.",
    cards: [
      ["Fuhrende Projekte", "Kalibrierungs- und Metrologiearbeit auf Industrieniveau."],
      ["Praxisnah", "Direkter Kontakt mit Prazisionsinstrumenten und Laboren."],
      ["Karrierewachstum", "Klare Wege fur Kompetenzen, Zertifizierungen und Fortschritt."],
    ],
    joinEyebrow: "Warum zu uns kommen",
    joinTitle: "Menschenorientierte Kultur mit messbarem Einfluss",
    joinPills: [
      "Berufliches Wachstum",
      "Kollaboratives Umfeld",
      "Branchenerfahrung",
    ],
    rolesEyebrow: "Offene Stellen",
    rolesTitle: "Wir stellen derzeit nicht ein",
    rolesCopy: "Senden Sie Ihren Lebenslauf und wir melden uns fur zukunftige Stellen.",
    rolesCards: [
      ["Derzeit keine offenen Stellen", "Wir behalten jedes Profil fur kommende Anforderungen."],
      ["Lebenslauf hochladen", "Teilen Sie Ihr Profil und wir melden uns bald."],
    ],
    processEyebrow: "Bewerbungsprozess",
    processTitle: "Klare Schritte von der Bewerbung bis zum Onboarding",
    processSteps: [
      ["Profilprufung", "Wir gleichen Ihre Fahigkeiten mit kommenden Anforderungen ab."],
      ["Technisches Gesprach", "Treffen Sie unsere Experten zur Abstimmung uber Tools und Projekte."],
      ["Angebot und Onboarding", "Transparentes Angebot und strukturierter Einstieg."],
    ],
    hrEyebrow: "HR kontaktieren",
    hrTitle: "Haben Sie Fragen zu Karrieren?",
    hrCopy: "Schreiben Sie uns und unser Team antwortet innerhalb von 48 Stunden.",
    hrButton: "HR kontaktieren",
  },
};

copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const renderJoinIcon = (index) => {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M3 8l9-4 9 4-9 4-9-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 10v4.5c0 .9 2.7 2.5 5 2.5s5-1.6 5-2.5V10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" role="presentation">
        <circle
          cx="8"
          cy="8"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="16"
          cy="8"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4 18c0-2.2 2-4 4.5-4S13 15.8 13 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M11 18c0-2 1.9-3.6 4.5-3.6S20 16 20 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" role="presentation">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 12h18M12 3c2.8 2.7 2.8 15.3 0 18M12 3c-2.8 2.7-2.8 15.3 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Careers = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page">
      <section className="page-hero careers-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="stack-rise"
          staggerMs={21}
          durationMs={780}
        />
        <p>{copy.intro}</p>
        <div className="careers-hero-actions">
          <NavLink className="btn btn-primary" to="/contact">
            {copy.submit}
          </NavLink>
          <a className="btn btn-ghost" href="#open-roles">
            {copy.explore}
          </a>
        </div>
        <div className="trust-grid">
          {copy.stats.map(([value, label]) => (
            <div className="trust-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section career-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.whyEyebrow}</p>
          <h2>{copy.whyTitle}</h2>
          <p>{copy.whyCopy}</p>
        </div>
        <div className="why-work-grid">
          {copy.cards.map(([title, desc]) => (
            <div className="why-work-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section career-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.joinEyebrow}</p>
          <h2>{copy.joinTitle}</h2>
        </div>
        <div className="why-join-pills">
          {copy.joinPills.map((pill, index) => (
            <div className="why-join-pill" key={pill}>
              <span className="why-join-icon" aria-hidden="true">
                {renderJoinIcon(index)}
              </span>
              {pill}
            </div>
          ))}
        </div>
      </section>

      <section id="open-roles" className="section career-section roles-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.rolesEyebrow}</p>
          <h2>{copy.rolesTitle}</h2>
          <p>{copy.rolesCopy}</p>
        </div>
        <div className="roles-grid">
          <div className="roles-card">
            <h3>{copy.rolesCards[0][0]}</h3>
            <p>{copy.rolesCards[0][1]}</p>
          </div>
          <div className="roles-card roles-cta">
            <h3>{copy.rolesCards[1][0]}</h3>
            <p>{copy.rolesCards[1][1]}</p>
            <div className="resume-actions">
              <NavLink className="btn btn-primary" to="/contact">
                {copy.submit}
              </NavLink>
              <NavLink className="btn btn-ghost" to="/contact">
                {copy.explore}
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.processEyebrow}</p>
          <h2>{copy.processTitle}</h2>
        </div>
        <div className="process-steps">
          {copy.processSteps.map(([title, desc]) => (
            <div className="process-step" key={title}>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section career-section contact-hr">
        <div>
          <p className="eyebrow">{copy.hrEyebrow}</p>
          <h2>{copy.hrTitle}</h2>
          <p>{copy.hrCopy}</p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          {copy.hrButton}
        </NavLink>
      </section>
    </main>
  );
};

export default Careers;
