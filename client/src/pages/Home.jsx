import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  "English (USA)": {
    aboutEyebrow: "About Asiduo",
    aboutTitle: "Metrology partners focused on accuracy, speed, and compliance",
    aboutCopy:
      "We help manufacturing teams maintain measurement integrity with calibrated instruments, audited processes, and reliable reporting.",
    aboutCards: [
      ["Consultative Support", "We analyze your measurement workflow and recommend the right instrumentation mix."],
      ["Traceable Results", "Every certificate references national and international standards for audit readiness."],
      ["Fast Turnaround", "Structured intake and dispatch systems reduce downtime for your production lines."],
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Comprehensive metrology solutions",
    servicesCopy:
      "From lab calibration to onsite commissioning, we support your measurement infrastructure end-to-end.",
    services: [
      ["Calibration Services", "Dimensional, force, pressure, and torque calibration aligned to national standards."],
      ["Metrology Equipment Supply", "Precision gauges, CMM accessories, surface plates, and measurement fixtures."],
      ["Installation & Commissioning", "On-site setup, validation, and uncertainty studies for new measurement systems."],
      ["Training & Support", "Operator training, SOP creation, and audit-ready documentation support."],
    ],
    productsEyebrow: "Products",
    productsTitle: "Precision instruments and accessories",
    products: [
      ["Digital Height Gauge", "High-accuracy gauges with SPC-ready output and granite base.", "Dimensional"],
      ["Surface Roughness Tester", "Portable, shop-floor roughness measurement with profile export.", "Surface"],
      ["Torque Wrench Calibrator", "Bench-top calibration system with traceable load cells.", "Torque"],
    ],
    viewAll: "View All Products",
    clientsEyebrow: "Clients",
    clientsTitle: "Trusted by quality leaders",
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
    ],
    servicesEyebrow: "Servizi",
    servicesTitle: "Soluzioni metrologiche complete",
    servicesCopy:
      "Dalla taratura in laboratorio alla messa in servizio in sede, supportiamo tutta la tua infrastruttura di misura.",
    services: [
      ["Servizi di taratura", "Taratura dimensionale, forza, pressione e coppia secondo standard nazionali."],
      ["Fornitura di strumenti metrologici", "Calibri di precisione, accessori CMM, piani di riscontro e attrezzature di misura."],
      ["Installazione e messa in servizio", "Configurazione in sede, validazione e studi di incertezza per nuovi sistemi."],
      ["Formazione e supporto", "Formazione operatori, SOP e supporto documentale per audit."],
    ],
    productsEyebrow: "Prodotti",
    productsTitle: "Strumenti e accessori di precisione",
    products: [
      ["Altimetro digitale", "Strumento ad alta precisione con uscita SPC e base in granito.", "Dimensionale"],
      ["Tester di rugosita superficiale", "Misura portatile della rugosita con esportazione del profilo.", "Superficie"],
      ["Calibratore per chiavi dinamometriche", "Sistema da banco con celle di carico tracciabili.", "Coppia"],
    ],
    viewAll: "Vedi tutti i prodotti",
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
    ],
    servicesEyebrow: "Servicios",
    servicesTitle: "Soluciones integrales de metrologia",
    servicesCopy:
      "Desde calibracion en laboratorio hasta puesta en marcha en sitio, apoyamos toda su infraestructura de medicion.",
    services: [
      ["Servicios de calibracion", "Calibracion dimensional, fuerza, presion y torque alineada con normas nacionales."],
      ["Suministro de equipos de metrologia", "Calibres de precision, accesorios CMM, placas de superficie y fijaciones."],
      ["Instalacion y puesta en marcha", "Configuracion en sitio, validacion y estudios de incertidumbre."],
      ["Capacitacion y soporte", "Formacion de operadores, SOP y apoyo documental listo para auditoria."],
    ],
    productsEyebrow: "Productos",
    productsTitle: "Instrumentos y accesorios de precision",
    products: [
      ["Calibrador de altura digital", "Equipo de alta precision con salida SPC y base de granito.", "Dimensional"],
      ["Probador de rugosidad superficial", "Medicion portatil de rugosidad con exportacion de perfil.", "Superficie"],
      ["Calibrador de llave dinamometrica", "Sistema de banco con celdas de carga trazables.", "Torque"],
    ],
    viewAll: "Ver todos los productos",
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
    ],
    servicesEyebrow: "Dienstleistungen",
    servicesTitle: "Umfassende metrologische Losungen",
    servicesCopy:
      "Von der Laborkalibrierung bis zur Inbetriebnahme vor Ort unterstutzen wir Ihre gesamte Messinfrastruktur.",
    services: [
      ["Kalibrierdienstleistungen", "Dimensions-, Kraft-, Druck- und Drehmomentkalibrierung nach nationalen Standards."],
      ["Lieferung von Metrologiegeraten", "Prazisionslehren, CMM-Zubehor, Messplatten und Vorrichtungen."],
      ["Installation und Inbetriebnahme", "Vor-Ort-Einrichtung, Validierung und Unsicherheitsstudien fur neue Systeme."],
      ["Schulung und Support", "Bedienerschulung, SOP-Erstellung und auditfahige Dokumentation."],
    ],
    productsEyebrow: "Produkte",
    productsTitle: "Prazisionsinstrumente und Zubehor",
    products: [
      ["Digitales Hohenmessgerat", "Hochgenaues Gerat mit SPC-Ausgang und Granitbasis.", "Dimensional"],
      ["Oberflachenrauheitsprufer", "Tragbares Rauheitsmessgerat mit Profilexport.", "Oberflache"],
      ["Drehmomentschlussel-Kalibrator", "Tischsystem mit ruckverfolgbaren Lastzellen.", "Drehmoment"],
    ],
    viewAll: "Alle Produkte ansehen",
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

  return (
    <main>
      <Hero />

      <section className="section about">
        <div>
          <p className="eyebrow">{copy.aboutEyebrow}</p>
          <h2>{copy.aboutTitle}</h2>
          <p>{copy.aboutCopy}</p>
        </div>
        <div className="about-grid">
          {copy.aboutCards.map(([title, desc]) => (
            <div className="about-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="section-heading">
          <p className="eyebrow">{copy.servicesEyebrow}</p>
          <h2>{copy.servicesTitle}</h2>
          <p>{copy.servicesCopy}</p>
        </div>
        <div className="card-grid">
          {copy.services.map(([title, desc]) => (
            <ServiceCard key={title} title={title} desc={desc} />
          ))}
        </div>
      </section>

      <section className="section products-preview">
        <div className="section-heading">
          <p className="eyebrow">{copy.productsEyebrow}</p>
          <h2>{copy.productsTitle}</h2>
        </div>
        <div className="product-grid">
          {copy.products.map(([name, description, category]) => (
            <ProductCard
              key={name}
              name={name}
              description={description}
              category={category}
            />
          ))}
        </div>
        <div className="section-actions">
          <NavLink className="btn btn-primary" to="/products">
            {copy.viewAll}
          </NavLink>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">{copy.clientsEyebrow}</p>
          <h2>{copy.clientsTitle}</h2>
        </div>
        <div className="testimonial-grid">
          {copy.quotes.map(([text, by]) => (
            <div className="testimonial-card" key={by}>
              <p>{text}</p>
              <span>{by}</span>
            </div>
          ))}
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
