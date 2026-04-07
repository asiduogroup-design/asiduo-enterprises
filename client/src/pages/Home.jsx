import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const clientShowcase = [
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

const aboutSectionImageUrl =
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775457009/ChatGPT_Image_Apr_5_2026_11_38_53_AM_kohezu.png";

const content = {
  "English (USA)": {
    aboutEyebrow: "About Asiduo",
    aboutTitle: "Built for Critical Projects Across India",
    aboutCopy:
      "Abhishek Singh Contractors delivers Electrical, Fire Safety, Civil, and CCTV works with compliance-led execution for government, defence, and enterprise environments.",
    aboutPoints: [
      "Government-grade compliance aligned to CPWD, DMRC, and BIS/IS standards.",
      "Single accountable contractor across four disciplines with no coordination gaps.",
      "Proven delivery in high-security and multi-location projects across India.",
    ],
    aboutStats: [
      { value: "2021", label: "Established" },
      { value: "25+", label: "Projects Completed" },
      { value: "4", label: "Service Disciplines" },
      { value: "PAN", label: "India Coverage" },
    ],
    aboutImageAlt: "Critical infrastructure contractor capabilities",
    servicesEyebrow: "What We Deliver",
    servicesTitle: "Four Disciplines, One Accountable Partner",
    servicesCopy:
      "Specialised execution across critical infrastructure projects.",
    servicesAction: "View",
    services: [
      { name: "Electrical", description: "Power distribution, lighting systems, emergency backups, and switchgear installation for government, defence, and enterprise facilities. CPWD and DMRC compliant execution." },
      { name: "Fire Safety Systems", description: "Fire detection, suppression, and evacuation systems designed to BIS/IS and NFPA standards. Commissioning and statutory compliance for high-occupancy and critical infrastructure sites." },
      { name: "Civil Works", description: "Structural finishes, MEP rough-ins, foundation work, and site-specific modifications. Execution aligned to architectural specs and permit requirements across India." },
      { name: "CCTV & Surveillance", description: "Integrated video surveillance, access control, and monitoring systems for perimeter and facility-wide security. Installation and integration on government and defence sites." },
    ],
    clientsEyebrow: "Who We Work With",
    clientsTitle: "Trusted by Public Infrastructure, Defence, and Enterprise Teams",
    clientsAction: "View All Clients",
    quotes: [
      ['"Asiduo Enterprises helped us stabilize our gauge calibration cycle and improved audit readiness."', "Quality Manager, Auto Components"],
      ['"Their team is responsive and precise. The uncertainty study was detailed and easy to follow."', "Plant Head, Precision Engineering"],
    ],
    ctaTitle: "Need urgent calibration support?",
    ctaCopy: "Our team can prioritize critical instruments to reduce downtime.",
    ctaButton: "Talk to an Expert",
  },
  "English (India)": null,
  Italian: {
    aboutEyebrow: "Su Asiduo",
    aboutTitle: "Partner metrologici focalizzati su precisione, rapidita e conformita",
    aboutCopy:
      "Aiutiamo i team produttivi a mantenere l'integrita delle misurazioni con strumenti tarati, processi controllati e report affidabili.",
    aboutCards: [
      ["Supporto consulenziale", "Analizziamo il flusso di misura e consigliamo la giusta combinazione di strumenti."],
      ["Risultati tracciabili", "Ogni certificato fa riferimento a standard nazionali e internazionali."],
      ["Tempi rapidi", "Processi strutturati riducono i tempi di fermo delle linee produttive."],
      ["Documentazione pronta per audit", "Certificati, etichette e registri di servizio mantengono ordinate le verifiche di conformita."],
      ["Coordinamento in sede", "Pianifichiamo ritiri, visite in sede e riconsegne in base alle priorita produttive."],
      ["Guida tecnica esperta", "I nostri tecnici aiutano il team a interpretare tolleranze, incertezza e intervalli di taratura."],
    ],
    servicesEyebrow: "Cosa Consegniamo",
    servicesTitle: "Quattro Discipline, Un Partner Affidabile",
    servicesCopy:
      "Esecuzione specializzata su progetti infrastrutturali critici.",
    services: [
      { name: "Impianti Elettrici", description: "Distribuzione elettrica, sistemi di illuminazione, backup di emergenza e installazioni di switchgear per strutture governative, difensive e aziendali. Esecuzione conforme CPWD e DMRC." },
      { name: "Sistemi Antincendio", description: "Tubi di rilevazione, sistemi di soppressione ed evacuazione progettati secondo BIS/IS e NFPA. Messa in servizio e conformita normativa per siti ad alta occupazione e infrastrutture critiche." },
      { name: "Lavori Civili", description: "Finiture strutturali, rough-ins MEP, lavori di fondazione e modifiche specifiche del sito. Esecuzione allineata alle specifiche architettoniche e ai requisiti sui permessi." },
      { name: "CCTV e Sorveglianza", description: "Sistemi integrati di videosorveglianza, controllo accessi e monitoraggio per la sicurezza perimetrale e dell'intera struttura. Installazione e integrazione in siti governativi e difensive." },
    ],
    clientsEyebrow: "Clienti",
    clientsTitle: "Scelti dai leader della qualita",
    quotes: [
      ['"Asiduo Enterprises ci ha aiutato a stabilizzare il ciclo di taratura e a migliorare la preparazione agli audit."', "Responsabile qualita, componenti auto"],
      ['"Il team e reattivo e preciso. Lo studio di incertezza era dettagliato e chiaro."', "Direttore di stabilimento, ingegneria di precisione"],
    ],
    ctaTitle: "Serve supporto urgente per la taratura?",
    ctaCopy: "Il nostro team puo dare priorita agli strumenti critici per ridurre il fermo impianto.",
    ctaButton: "Parla con un esperto",
  },
  Spanish: {
    aboutEyebrow: "Sobre Asiduo",
    aboutTitle: "Socios de metrologia enfocados en precision, rapidez y cumplimiento",
    aboutCopy:
      "Ayudamos a los equipos de manufactura a mantener la integridad de medicion con instrumentos calibrados, procesos auditados e informes confiables.",
    aboutCards: [
      ["Soporte consultivo", "Analizamos su flujo de medicion y recomendamos la combinacion correcta de instrumentos."],
      ["Resultados trazables", "Cada certificado hace referencia a normas nacionales e internacionales."],
      ["Respuesta rapida", "Procesos estructurados reducen el tiempo de inactividad en produccion."],
      ["Documentacion lista para auditoria", "Certificados, etiquetas y registros de servicio mantienen ordenadas sus revisiones de cumplimiento."],
      ["Coordinacion en sitio", "Planificamos recolecciones, visitas tecnicas y entregas segun sus prioridades de produccion."],
      ["Asesoria experta", "Nuestros ingenieros ayudan a interpretar tolerancias, incertidumbre e intervalos de calibracion."],
    ],
    servicesEyebrow: "Que Entregamos",
    servicesTitle: "Cuatro Disciplinas, Un Socio Responsable",
    servicesCopy:
      "Ejecucion especializada en proyectos de infraestructura critica.",
    services: [
      { name: "Electricidad", description: "Distribucion electrica, sistemas de iluminacion, respaldos de emergencia e instalacion de equipos de maniobra para instalaciones gubernamentales, de defensa y empresariales. Ejecucion conforme a CPWD y DMRC." },
      { name: "Sistemas de Seguridad contra Incendios", description: "Sistemas de deteccion, supresion y evacuacion contra incendios diseñados segun normas BIS/IS y NFPA. Puesta en marcha y cumplimiento normativo para sitios de alta ocupacion e infraestructuras criticas." },
      { name: "Trabajos Civiles", description: "Acabados estructurales, roughins MEP, trabajos de cimentacion y modificaciones especificas del sitio. Ejecucion alineada con especificaciones arquitectonicas y requisitos de permisos." },
      { name: "CCTV y Vigilancia", description: "Sistemas integrados de videovigilancia, control de acceso y monitoreo para seguridad perimetral e instalaciones completas. Instalacion e integracion en sitios gubernativos y de defensa." },
    ],
    clientsEyebrow: "Clientes",
    clientsTitle: "Con la confianza de lideres de calidad",
    quotes: [
      ['"Asiduo Enterprises nos ayudo a estabilizar el ciclo de calibracion y mejorar la preparacion para auditorias."', "Gerente de calidad, autopartes"],
      ['"Su equipo es preciso y atento. El estudio de incertidumbre fue claro y detallado."', "Jefe de planta, ingenieria de precision"],
    ],
    ctaTitle: "Necesita soporte urgente de calibracion?",
    ctaCopy: "Nuestro equipo puede priorizar instrumentos criticos para reducir paradas.",
    ctaButton: "Hablar con un experto",
  },
  German: {
    aboutEyebrow: "Uber Asiduo",
    aboutTitle: "Metrologiepartner mit Fokus auf Genauigkeit, Tempo und Konformitat",
    aboutCopy:
      "Wir helfen Fertigungsteams, die Messintegritat mit kalibrierten Instrumenten, gepruften Prozessen und zuverlassiger Dokumentation zu sichern.",
    aboutCards: [
      ["Beratende Unterstutzung", "Wir analysieren Ihren Messablauf und empfehlen die passende Instrumentierung."],
      ["Ruckverfolgbare Ergebnisse", "Jedes Zertifikat verweist auf nationale und internationale Standards."],
      ["Schnelle Bearbeitung", "Strukturierte Ablaufe reduzieren Stillstandszeiten in Ihrer Produktion."],
      ["Auditbereite Dokumentation", "Zertifikate, Kennzeichnungen und Serviceprotokolle halten Ihre Konformitatsprufungen ubersichtlich."],
      ["Vor-Ort-Koordination", "Wir planen Abholung, Vor-Ort-Termine und Rucklieferung nach Ihren Produktionsprioritaten."],
      ["Technische Fachberatung", "Unsere Ingenieure helfen bei Toleranzen, Unsicherheit und passenden Kalibrierintervallen."],
    ],
    servicesEyebrow: "Was Wir Leisten",
    servicesTitle: "Vier Disziplinen, Ein Verantwortlicher Partner",
    servicesCopy:
      "Spezialisierte Ausfuehrung bei kritischen Infrastrukturprojekten.",
    services: [
      { name: "Elektrik", description: "Stromverteilung, Beleuchtungssysteme, Notrueckfuehrung und Schaltgeraeteinstallation fuer Regierungs-, Verteidigungs- und Unternehmenseinrichtungen. CPWD und DMRC konforme Ausfuehrung." },
      { name: "Brandschutzsysteme", description: "Nach BIS/IS und NFPA-Standards entworfene Branderkennung, Loeschtechnik und Evakuierungssysteme. Inbetriebnahme und gesetzliche Konformitaet fuer hochfrequentierte und kritische Infrastrukturstandorte." },
      { name: "Tiefbau", description: "Strukturelle Oberflaechenbehandlung, MEP-Rohinstallation, Fundierungsarbeiten und spezifische Standortmodifikationen. Ausfuehrung gemaess Architekturvorgaben und Genehmigungsanforderungen." },
      { name: "CCTV und Ueberwachung", description: "Integrierte Videoueberwachungs-, Zugangsschutz- und Ueberwachungssysteme fuer Umkreis- und anlagenbereite Sicherheit. Installation und Integration auf Regierungs- und Verteidigungsstandorten." },
    ],
    clientsEyebrow: "Kunden",
    clientsTitle: "Vertrauen von Qualitatsfuhrern",
    quotes: [
      ['"Asiduo Enterprises half uns, den Kalibrierzyklus zu stabilisieren und die Auditbereitschaft zu verbessern."', "Qualitatsmanager, Autokomponenten"],
      ['"Das Team arbeitet reaktionsschnell und prazise. Die Unsicherheitsstudie war klar und detailliert."', "Werksleiter, Prazisionstechnik"],
    ],
    ctaTitle: "Benotigen Sie dringende Kalibrierunterstutzung?",
    ctaCopy: "Unser Team kann kritische Instrumente priorisieren, um Ausfallzeiten zu senken.",
    ctaButton: "Mit einem Experten sprechen",
  },
};
content["English (India)"] = content["English (USA)"];

const Home = () => {
  const { language } = useLanguage();
  const copy = content[language] || content["English (USA)"];
  const aboutPoints = copy.aboutPoints || content["English (USA)"].aboutPoints;
  const aboutStats = copy.aboutStats || content["English (USA)"].aboutStats;
  const aboutImageAlt = copy.aboutImageAlt || content["English (USA)"].aboutImageAlt;

  return (
    <main>
      <Hero />

      <section className="section-about">
        <div className="home-about-shell">
          <div className="home-about-copy">
            <p className="eyebrow">{copy.aboutEyebrow}</p>
            <h2>{copy.aboutTitle}</h2>
            <p>{copy.aboutCopy}</p>
            <ul className="home-about-points">
              {aboutPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="home-about-stats" aria-label="Company highlights">
              {aboutStats.map((stat) => (
                <article className="home-about-stat" key={stat.label}>
                  <span>{stat.value}</span>
                  <strong>{stat.label}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="section-heading section-heading-with-action">
          <div>
            <p className="eyebrow">{copy.servicesEyebrow}</p>
            <h2>{copy.servicesTitle}</h2>
            <p>{copy.servicesCopy}</p>
          </div>
          <NavLink className="btn btn-primary" to="/services">
            {copy.servicesAction || "View"}
          </NavLink>
        </div>
        <div className="services-grid-home">
          {copy.services.map((service) => (
            <article className="service-card-home" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">{copy.clientsEyebrow}</p>
          <h2>{copy.clientsTitle}</h2>
        </div>
        <div className="clients-grid">
          {clientShowcase.map((client) => (
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
        <div className="section-actions">
          <NavLink className="btn btn-primary" to="/clients">
            {copy.clientsAction || "View All Clients"}
          </NavLink>
        </div>
      </section>

      <section className="section cta">
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

export default Home;
