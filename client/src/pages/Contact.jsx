import React, { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Contact",
    title: "Let's talk about your measurement goals",
    intro: "Tell us about your instruments or calibration schedule and our engineers will respond within a business day.",
    touchTitle: "Get in Touch",
    touchCopy: "Have a question or need more information? Fill out the form and our team will reach you quickly.",
    infoTitle: "Contact Information",
    phone: "Phone",
    email: "Email",
    address: "Address",
    person: "Contact Person",
    extension: "Dial Extension",
    map: "Map preview",
    locateEyebrow: "Locate us",
    locateTitle: "Visit our Ghaziabad office",
    ctaTitle: "Need immediate assistance?",
    ctaCopy: "Our experts are ready to help you find the right solution.",
    call: "Call Us Now",
    mail: "Email Us",
  },
  "English (India)": null,
  Italian: { eyebrow: "Contatto", title: "Parliamo dei tuoi obiettivi di misura", intro: "Raccontaci dei tuoi strumenti o del programma di taratura e i nostri ingegneri risponderanno entro un giorno lavorativo.", touchTitle: "Mettiti in contatto", touchCopy: "Hai una domanda o ti servono informazioni? Compila il modulo e il nostro team ti rispondera rapidamente.", infoTitle: "Informazioni di contatto", phone: "Telefono", email: "Email", address: "Indirizzo", person: "Referente", extension: "Interno", map: "Anteprima mappa", locateEyebrow: "Dove siamo", locateTitle: "Visita il nostro ufficio di Ghaziabad", ctaTitle: "Hai bisogno di assistenza immediata?", ctaCopy: "I nostri esperti sono pronti ad aiutarti.", call: "Chiama ora", mail: "Scrivici" },
  Spanish: { eyebrow: "Contacto", title: "Hablemos de sus objetivos de medicion", intro: "Cuentenos sobre sus instrumentos o calendario de calibracion y nuestros ingenieros responderan dentro de un dia habil.", touchTitle: "Pongase en contacto", touchCopy: "Tiene una pregunta o necesita mas informacion? Complete el formulario y nuestro equipo se comunicara pronto.", infoTitle: "Informacion de contacto", phone: "Telefono", email: "Correo", address: "Direccion", person: "Persona de contacto", extension: "Extension", map: "Vista previa del mapa", locateEyebrow: "Ubicacion", locateTitle: "Visite nuestra oficina de Ghaziabad", ctaTitle: "Necesita ayuda inmediata?", ctaCopy: "Nuestros expertos estan listos para ayudarle.", call: "Llamar ahora", mail: "Enviar correo" },
  German: { eyebrow: "Kontakt", title: "Sprechen wir uber Ihre Messziele", intro: "Erzahlen Sie uns von Ihren Instrumenten oder Ihrem Kalibrierplan, und unsere Ingenieure melden sich innerhalb eines Werktages.", touchTitle: "Kontakt aufnehmen", touchCopy: "Haben Sie eine Frage oder benotigen Sie weitere Informationen? Fullen Sie das Formular aus und unser Team meldet sich schnell.", infoTitle: "Kontaktinformationen", phone: "Telefon", email: "E-Mail", address: "Adresse", person: "Ansprechpartner", extension: "Durchwahl", map: "Kartenvorschau", locateEyebrow: "Standort", locateTitle: "Besuchen Sie unser Buro in Ghaziabad", ctaTitle: "Benotigen Sie sofortige Hilfe?", ctaCopy: "Unsere Experten helfen Ihnen gern bei der richtigen Losung.", call: "Jetzt anrufen", mail: "E-Mail senden" },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const location = {
  key: "Ghaziabad",
  name: "Ghaziabad Office",
  address:
    "Ganga Shopping Complex, Sec 16 B, Vasundhara, Ghaziabad, UP, Ghaziabad-201012, Uttar Pradesh, India",
  phone: "08047677121",
  extension: "5505 when connected",
  email: "sales@asiduoindia.com",
  contactPerson: "SUSHIL KUMAR SINGH",
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
          <a className="btn btn-primary contact-cta-link" href="tel:08047677121">
            <span>{copy.call}</span>
          </a>
          <a className="btn btn-ghost contact-cta-link" href="mailto:sales@asiduoindia.com">
            <span>{copy.mail}</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
