import React from "react";
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const pageContent = {
  "English (USA)": {
    eyebrow: "Metrology & Calibration",
    title: "Services designed for compliance and speed",
    intro:
      "We help you maintain measurement integrity across the full calibration lifecycle from instrumentation planning to final audit documentation.",
    services: [
      ["Dimensional Calibration", "Micrometers, calipers, gauges, and precision tools calibrated to national standards."],
      ["Force & Torque", "Traceable calibration for torque wrenches, load cells, and force gauges."],
      ["Pressure & Vacuum", "Pressure gauges, transducers, and vacuum sensors with uncertainty budgets."],
      ["Surface & Profile", "Roughness, surface plates, and form measurement systems."],
      ["On-site Services", "Plant-side calibration and validation to minimize downtime."],
      ["Training & Documentation", "SOPs, uncertainty studies, and audit-ready reporting assistance."],
    ],
    onsiteTitle: "Need On-Site Calibration?",
    onsiteCopy:
      "Our mobile calibration units can come to your facility for on-site calibrations.",
    onsiteButton: "Contact Us",
    whyTitle: "Why Choose Asiduo Calibration?",
    why: [
      ["NABL Accredited", "Our calibration centers are aligned to ISO/IEC 17025 standards, ensuring trusted results."],
      ["Responsive Support", "With support coordinated from our Ghaziabad office, we provide dependable response for industrial customers."],
      ["Mobile Calibration", "Our mobile calibration service brings expert support directly to your doorstep."],
    ],
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Metrologia e Taratura",
    title: "Servizi pensati per conformita e rapidita",
    intro:
      "Ti aiutiamo a mantenere l'integrita della misura lungo l'intero ciclo di taratura, dalla pianificazione alla documentazione finale.",
    services: [
      ["Taratura dimensionale", "Micrometri, calibri e strumenti di precisione tarati secondo standard nazionali."],
      ["Forza e coppia", "Taratura tracciabile per chiavi dinamometriche, celle di carico e dinamometri."],
      ["Pressione e vuoto", "Manometri, trasduttori e sensori di vuoto con budget di incertezza."],
      ["Superficie e profilo", "Rugosita, piani di riscontro e sistemi di misura di forma."],
      ["Servizi in sede", "Taratura e validazione direttamente in impianto per ridurre i fermi."],
      ["Formazione e documentazione", "SOP, studi di incertezza e assistenza per report pronti agli audit."],
    ],
    onsiteTitle: "Hai bisogno di una taratura in sede?",
    onsiteCopy: "Le nostre unita mobili possono raggiungere la tua struttura per interventi in sede.",
    onsiteButton: "Contattaci",
    whyTitle: "Perche scegliere Asiduo Calibration?",
    why: [
      ["Accreditamento NABL", "I nostri centri sono allineati agli standard ISO/IEC 17025."],
      ["Supporto rapido", "Coordinato dal nostro ufficio di Ghaziabad per clienti industriali."],
      ["Taratura mobile", "Portiamo il supporto tecnico direttamente presso la tua sede."],
    ],
  },
  Spanish: {
    eyebrow: "Metrologia y Calibracion",
    title: "Servicios disenados para cumplimiento y rapidez",
    intro:
      "Le ayudamos a mantener la integridad de medicion durante todo el ciclo de calibracion, desde la planificacion hasta la documentacion final.",
    services: [
      ["Calibracion dimensional", "Micrometros, calibradores y herramientas de precision calibradas segun normas nacionales."],
      ["Fuerza y torque", "Calibracion trazable para llaves dinamometricas, celdas de carga y medidores de fuerza."],
      ["Presion y vacio", "Manometros, transductores y sensores de vacio con presupuestos de incertidumbre."],
      ["Superficie y perfil", "Rugosidad, placas de superficie y sistemas de medicion de forma."],
      ["Servicios en sitio", "Calibracion y validacion en planta para reducir tiempos muertos."],
      ["Capacitacion y documentacion", "SOP, estudios de incertidumbre y asistencia documental lista para auditoria."],
    ],
    onsiteTitle: "Necesita calibracion en sitio?",
    onsiteCopy: "Nuestras unidades moviles pueden visitar su instalacion para calibraciones en sitio.",
    onsiteButton: "Contactanos",
    whyTitle: "Por que elegir Asiduo Calibration?",
    why: [
      ["Acreditacion NABL", "Nuestros centros estan alineados con ISO/IEC 17025."],
      ["Soporte rapido", "Coordinado desde Ghaziabad para clientes industriales."],
      ["Calibracion movil", "Llevamos soporte experto directamente a sus instalaciones."],
    ],
  },
  German: {
    eyebrow: "Metrologie und Kalibrierung",
    title: "Dienstleistungen fur Konformitat und Tempo",
    intro:
      "Wir helfen Ihnen, die Messintegritat uber den gesamten Kalibrierzyklus hinweg zu sichern, von der Planung bis zur Auditdokumentation.",
    services: [
      ["Dimensionskalibrierung", "Mikrometer, Messschieber und Prazisionswerkzeuge nach nationalen Standards kalibriert."],
      ["Kraft und Drehmoment", "Ruckverfolgbare Kalibrierung fur Drehmomentschlussel, Lastzellen und Kraftmesser."],
      ["Druck und Vakuum", "Druckmessgerate, Transducer und Vakuumsensoren mit Unsicherheitsbudgets."],
      ["Oberflache und Profil", "Rauheit, Messplatten und Formmesssysteme."],
      ["Vor-Ort-Services", "Kalibrierung und Validierung im Werk zur Minimierung von Stillstanden."],
      ["Schulung und Dokumentation", "SOPs, Unsicherheitsstudien und auditfahige Berichte."],
    ],
    onsiteTitle: "Benotigen Sie eine Vor-Ort-Kalibrierung?",
    onsiteCopy: "Unsere mobilen Einheiten konnen Ihre Anlage fur Vor-Ort-Kalibrierungen besuchen.",
    onsiteButton: "Kontakt",
    whyTitle: "Warum Asiduo Calibration?",
    why: [
      ["NABL-akkreditiert", "Unsere Zentren sind an ISO/IEC 17025 ausgerichtet."],
      ["Reaktionsstarker Support", "Koordiniert von unserem Buro in Ghaziabad fur Industriekunden."],
      ["Mobile Kalibrierung", "Wir bringen Expertenunterstutzung direkt zu Ihnen."],
    ],
  },
};
pageContent["English (India)"] = pageContent["English (USA)"];

const Services = () => {
  const { language } = useLanguage();
  const copy = pageContent[language] || pageContent["English (USA)"];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="flip-up"
          staggerMs={24}
          durationMs={760}
        />
        <p>{copy.intro}</p>
      </section>
      <section className="section services">
        <div className="card-grid">
          {copy.services.map(([title, desc]) => (
            <ServiceCard key={title} title={title} desc={desc} />
          ))}
        </div>
      </section>

      <section className="section onsite-cta">
        <div className="onsite-card">
          <div>
            <h4>{copy.onsiteTitle}</h4>
            <p>{copy.onsiteCopy}</p>
          </div>
          <NavLink className="btn btn-primary" to="/contact">
            {copy.onsiteButton}
          </NavLink>
        </div>
      </section>

      <section className="section why-choose">
        <div className="info-card">
          <h3>{copy.whyTitle}</h3>
          <div className="card-underline" />
          <div className="why-grid">
            {copy.why.map(([title, desc], index) => (
              <div className="why-item" key={title}>
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {index === 0 && <path d="M6 12l4 4 8-8" />}
                    {index === 1 && (
                      <>
                        <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <rect x="4" y="7" width="12" height="10" rx="2" />
                        <path d="M16 9h2a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-3" />
                        <circle cx="8" cy="18" r="2" />
                        <circle cx="16" cy="18" r="2" />
                      </>
                    )}
                  </svg>
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
