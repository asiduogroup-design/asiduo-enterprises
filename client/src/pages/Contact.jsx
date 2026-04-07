import React, { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Get in Touch",
    title: "Let's Discuss Your Project",
    intro:
      "Looking for a reliable, compliant, multi-discipline contractor? Share your scope, location, timeline, and compliance requirements. We respond to all enquiries within 24 hours.",
    touchTitle: "Get in Touch",
    touchCopy:
      "Use the form to submit your requirement for Electrical, Fire Safety, Civil, CCTV, HVAC, or petroleum-sector support.",
    infoTitle: "Business Details",
    phone: "Phone",
    email: "Email",
    address: "Base Location",
    person: "Proprietor",
    extension: "Registration",
    map: "Pan India Operations",
    locateEyebrow: "Service Footprint",
    locateTitle: "Operating from Faridabad across India",
    ctaTitle: "Need to speak with the team directly?",
    ctaCopy:
      "Reach out for bid discussions, compliance-led execution, and multi-discipline project coordination.",
    call: "Call / WhatsApp",
    mail: "Email Enquiry",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Contattaci",
    title: "Parliamo del tuo progetto",
    intro:
      "Cerchi un appaltatore affidabile, conforme e multi-disciplinare? Condividi ambito, localita, tempistiche e requisiti normativi. Rispondiamo entro 24 ore.",
    touchTitle: "Mettiti in contatto",
    touchCopy:
      "Usa il modulo per inviare la tua richiesta per supporto Elettrico, Antincendio, Civile, CCTV, HVAC o settore petrolifero.",
    infoTitle: "Dettagli Aziendali",
    phone: "Telefono",
    email: "Email",
    address: "Sede Base",
    person: "Titolare",
    extension: "Registrazione",
    map: "Operazioni Pan India",
    locateEyebrow: "Copertura Operativa",
    locateTitle: "Operativi da Faridabad in tutta l'India",
    ctaTitle: "Vuoi parlare direttamente con il team?",
    ctaCopy:
      "Contattaci per discussioni di gara, esecuzione conforme e coordinamento multi-disciplinare del progetto.",
    call: "Chiama / WhatsApp",
    mail: "Invia Email",
  },
  Spanish: {
    eyebrow: "Contactenos",
    title: "Hablemos de su proyecto",
    intro:
      "Busca un contratista confiable, cumplido y multidisciplinario? Comparta alcance, ubicacion, cronograma y requisitos normativos. Respondemos en 24 horas.",
    touchTitle: "Ponerse en contacto",
    touchCopy:
      "Use el formulario para enviar su requerimiento de soporte Electrico, Contra Incendios, Civil, CCTV, HVAC o sector petroleo.",
    infoTitle: "Detalles del Negocio",
    phone: "Telefono",
    email: "Correo",
    address: "Ubicacion Base",
    person: "Propietario",
    extension: "Registro",
    map: "Operaciones Pan India",
    locateEyebrow: "Cobertura de Servicio",
    locateTitle: "Operando desde Faridabad en toda India",
    ctaTitle: "Necesita hablar directamente con el equipo?",
    ctaCopy:
      "Contactenos para discusiones de licitacion, ejecucion orientada a cumplimiento y coordinacion multidisciplinaria.",
    call: "Llamar / WhatsApp",
    mail: "Enviar Correo",
  },
  German: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns Ihr Projekt besprechen",
    intro:
      "Suchen Sie einen zuverlassigen, konformen und multidisziplinaren Auftragnehmer? Teilen Sie Umfang, Standort, Zeitplan und Compliance-Anforderungen. Wir antworten innerhalb von 24 Stunden.",
    touchTitle: "Kontakt aufnehmen",
    touchCopy:
      "Nutzen Sie das Formular fur Anfragen zu Elektrik, Brandschutz, Tiefbau, CCTV, HVAC oder Petroleum-Projekten.",
    infoTitle: "Unternehmensdetails",
    phone: "Telefon",
    email: "E-Mail",
    address: "Standort",
    person: "Inhaber",
    extension: "Registrierung",
    map: "Pan India Einsatze",
    locateEyebrow: "Serviceabdeckung",
    locateTitle: "Von Faridabad aus in ganz Indien aktiv",
    ctaTitle: "Mochten Sie direkt mit dem Team sprechen?",
    ctaCopy:
      "Kontaktieren Sie uns fur Angebotsgesprache, compliance-orientierte Ausfuhrung und multidisziplinare Projektkoordination.",
    call: "Anrufen / WhatsApp",
    mail: "E-Mail Anfrage",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];
copyByLanguage.Italian = copyByLanguage["English (USA)"];
copyByLanguage.Spanish = copyByLanguage["English (USA)"];
copyByLanguage.German = copyByLanguage["English (USA)"];

const location = {
  key: "Faridabad",
  name: "Abhishek Singh Contractors",
  address: "Faridabad, Haryana - Pan India Operations",
  phone: "+91 XXXXX XXXXX",
  extension: "Abhishek Singh Contractors (Proprietorship)",
  email: "[email protected]",
  contactPerson: "Abhishek Singh",
};

const Contact = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];
  const [activeLocation] = useState(location);

  return (
    <main className="page">
      <section className="page-hero contact-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="swing-up"
          staggerMs={20}
          durationMs={760}
        />
        <p>{copy.intro}</p>
      </section>
      <section className="section contact-grid">
        <div className="contact-card">
          <h2>{copy.touchTitle}</h2>
          <p>{copy.touchCopy}</p>
          <ContactForm />
        </div>
        <div className="contact-card">
          <h2>{copy.infoTitle}</h2>
          <div className="contact-info-list">
            <div><h4>{copy.phone}</h4><p>{activeLocation.phone}</p></div>
            <div><h4>{copy.email}</h4><p>{activeLocation.email}</p></div>
            <div><h4>{copy.address}</h4><p>{activeLocation.address}</p></div>
            <div><h4>{copy.person}</h4><p>{activeLocation.contactPerson}</p></div>
            <div><h4>{copy.extension}</h4><p>{activeLocation.extension}</p></div>
          </div>
          <div className="contact-map">{copy.map}</div>
        </div>
      </section>

      <section className="section locate-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.locateEyebrow}</p>
          <h2>{copy.locateTitle}</h2>
        </div>
        <div className="location-grid">
          <div className="location-map">{copy.map}</div>
          <div className="location-card">
            <h3>{activeLocation.name}</h3>
            <div className="contact-info-list">
              <div><h4>{copy.address}</h4><p>{activeLocation.address}</p></div>
              <div><h4>{copy.phone}</h4><p>{activeLocation.phone}</p></div>
              <div><h4>{copy.email}</h4><p>{activeLocation.email}</p></div>
              <div><h4>{copy.person}</h4><p>{activeLocation.contactPerson}</p></div>
              <div><h4>{copy.extension}</h4><p>{activeLocation.extension}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-cta">
        <div>
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaCopy}</p>
        </div>
        <div className="contact-cta-actions">
          <a className="btn btn-primary contact-cta-link" href="tel:+91XXXXXXXXXX">
            <span>{copy.call}</span>
          </a>
          <a className="btn btn-ghost contact-cta-link" href="mailto:[email protected]">
            <span>{copy.mail}</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
