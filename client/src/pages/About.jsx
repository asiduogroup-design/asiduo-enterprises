import React from "react";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const details = [
  { key: "nature", value: "Service Provider and Others" },
  { key: "type", value: "Merchant" },
  { key: "industry", value: "Trade Promotion Organisations, International Trade Organisations" },
  { key: "legal", value: "Proprietorship" },
  { key: "turnover", value: "0 - 40 L" },
  { key: "gstDate", value: "01-02-2023" },
  { key: "iec", value: "GFPPS1399A" },
  { key: "gst", value: "09GFPPS1399A1ZW" },
];

const copyByLanguage = {
  "English (USA)": {
    title: "About Us",
    paragraphs: [
      "We are engaged in the trade promotion sector, operating primarily from Ghaziabad, India. Our activities focus on supporting market access, business visibility, and commercial growth.",
      "Our approach is built around dependable service, alignment with standard commercial practices, and understanding the needs of buyers, suppliers, and business partners.",
    ],
    facts: "Company Facts",
    labels: {
      nature: "Nature of Business",
      type: "Incorporation Type",
      industry: "Industry",
      legal: "Legal Status of Firm",
      turnover: "Annual Turnover",
      gstDate: "GST Registration Date",
      iec: "Import Export Code (IEC)",
      gst: "GST Number",
    },
  },
  "English (India)": null,
  Italian: {
    title: "Chi Siamo",
    paragraphs: [
      "Operiamo nel settore della promozione commerciale principalmente da Ghaziabad, India, supportando accesso al mercato, visibilita aziendale e crescita commerciale.",
      "Il nostro approccio si basa su servizio affidabile, pratiche commerciali standard e comprensione delle esigenze di acquirenti, fornitori e partner.",
    ],
    facts: "Dati aziendali",
    labels: {
      nature: "Natura dell'attivita",
      type: "Tipo di incorporazione",
      industry: "Settore",
      legal: "Stato legale dell'impresa",
      turnover: "Fatturato annuo",
      gstDate: "Data registrazione GST",
      iec: "Codice Import Export (IEC)",
      gst: "Numero GST",
    },
  },
  Spanish: {
    title: "Sobre Nosotros",
    paragraphs: [
      "Operamos en el sector de promocion comercial principalmente desde Ghaziabad, India, apoyando acceso al mercado, visibilidad comercial y crecimiento.",
      "Nuestro enfoque se basa en un servicio confiable, practicas comerciales estandar y comprension de las necesidades de compradores, proveedores y socios.",
    ],
    facts: "Datos de la empresa",
    labels: {
      nature: "Naturaleza del negocio",
      type: "Tipo de constitucion",
      industry: "Industria",
      legal: "Estado legal de la firma",
      turnover: "Facturacion anual",
      gstDate: "Fecha de registro GST",
      iec: "Codigo de Importacion Exportacion (IEC)",
      gst: "Numero GST",
    },
  },
  German: {
    title: "Uber Uns",
    paragraphs: [
      "Wir sind im Bereich Handelsforderung tatig und arbeiten hauptsachlich von Ghaziabad, Indien, aus, um Marktzugang, Sichtbarkeit und Wachstum zu unterstutzen.",
      "Unser Ansatz basiert auf zuverlassigem Service, standardnahen Geschaftspraktiken und dem Verstandnis fur die Bedurfnisse von Kaufern, Lieferanten und Partnern.",
    ],
    facts: "Unternehmensdaten",
    labels: {
      nature: "Art des Geschafts",
      type: "Gesellschaftsform",
      industry: "Branche",
      legal: "Rechtsstatus des Unternehmens",
      turnover: "Jahresumsatz",
      gstDate: "GST-Registrierungsdatum",
      iec: "Import-Export-Code (IEC)",
      gst: "GST-Nummer",
    },
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const About = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page about-page">
      <section className="section about-profile">
        <div className="about-section-block">
          <AnimatedHeadline
            className="about-section-title"
            text={copy.title}
            variant="reveal-left"
            staggerMs={26}
            durationMs={760}
          />
          <div className="about-copy-card">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-section-block">
          <h2 className="about-section-title">{copy.facts}</h2>
          <div className="about-facts-card">
            <div className="about-facts-grid">
              {details.map((detail) => (
                <article className="about-fact" key={detail.key}>
                  <div className="about-fact-copy">
                    <span>{copy.labels[detail.key]}</span>
                    <strong>{detail.value}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
