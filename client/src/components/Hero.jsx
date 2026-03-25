import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import AnimatedHeadline from "./AnimatedHeadline.jsx";

const heroContent = {
  "English (USA)": {
    eyebrow: "Precision Metrology & Calibration",
    title: "Confidence in Every Measurement for India's Manufacturers",
    sub: "Asiduo Enterprises delivers traceable calibration, metrology solutions, and equipment support with fast turnaround and audit-ready reporting.",
    primary: "Schedule Calibration",
    secondary: "Download Capability Sheet",
    stats: [
      { value: "15+ Years", label: "Metrology Expertise" },
      { value: "ISO/IEC 17025", label: "Traceable Calibration" },
      { value: "24-48 Hrs", label: "Typical Turnaround" },
      { value: "Pan-India", label: "Service Coverage" },
    ],
    panelTitle: "Our Core Labs",
    panelItems: [
      "Dimensional & Gauge Calibration",
      "Torque, Force & Pressure",
      "Surface & Profile Measurements",
      "On-site & In-lab Services",
    ],
    panelCopy:
      "Dedicated engineers ensure traceability and compliance for every instrument.",
  },
  "English (India)": {
    eyebrow: "Precision Metrology & Calibration",
    title: "Confidence in Every Measurement for India's Manufacturers",
    sub: "Asiduo Enterprises delivers traceable calibration, metrology solutions, and equipment support with fast turnaround and audit-ready reporting.",
    primary: "Schedule Calibration",
    secondary: "Download Capability Sheet",
    stats: [
      { value: "15+ Years", label: "Metrology Expertise" },
      { value: "ISO/IEC 17025", label: "Traceable Calibration" },
      { value: "24-48 Hrs", label: "Typical Turnaround" },
      { value: "Pan-India", label: "Service Coverage" },
    ],
    panelTitle: "Our Core Labs",
    panelItems: [
      "Dimensional & Gauge Calibration",
      "Torque, Force & Pressure",
      "Surface & Profile Measurements",
      "On-site & In-lab Services",
    ],
    panelCopy:
      "Dedicated engineers ensure traceability and compliance for every instrument.",
  },
  Italian: {
    eyebrow: "Metrologia e Taratura di Precisione",
    title: "Fiducia in ogni misurazione per i produttori indiani",
    sub: "Asiduo Enterprises offre tarature tracciabili, soluzioni metrologiche e supporto alle attrezzature con tempi rapidi e report pronti per gli audit.",
    primary: "Pianifica la taratura",
    secondary: "Scarica la scheda tecnica",
    stats: [
      { value: "15+ Anni", label: "Esperienza metrologica" },
      { value: "ISO/IEC 17025", label: "Taratura tracciabile" },
      { value: "24-48 Ore", label: "Tempi tipici" },
      { value: "Tutta l'India", label: "Copertura del servizio" },
    ],
    panelTitle: "I nostri laboratori principali",
    panelItems: [
      "Taratura dimensionale e calibri",
      "Coppia, forza e pressione",
      "Misure di superficie e profilo",
      "Servizi in sede e in laboratorio",
    ],
    panelCopy:
      "Ingegneri dedicati garantiscono tracciabilita e conformita per ogni strumento.",
  },
  Spanish: {
    eyebrow: "Metrologia y Calibracion de Precision",
    title: "Confianza en cada medicion para los fabricantes de India",
    sub: "Asiduo Enterprises ofrece calibracion trazable, soluciones de metrologia y soporte de equipos con tiempos rapidos y reportes listos para auditorias.",
    primary: "Programar calibracion",
    secondary: "Descargar ficha tecnica",
    stats: [
      { value: "15+ Anos", label: "Experiencia en metrologia" },
      { value: "ISO/IEC 17025", label: "Calibracion trazable" },
      { value: "24-48 Hrs", label: "Tiempo habitual" },
      { value: "Toda India", label: "Cobertura del servicio" },
    ],
    panelTitle: "Nuestros laboratorios principales",
    panelItems: [
      "Calibracion dimensional y de calibres",
      "Torque, fuerza y presion",
      "Mediciones de superficie y perfil",
      "Servicios en sitio y en laboratorio",
    ],
    panelCopy:
      "Ingenieros especializados garantizan trazabilidad y cumplimiento para cada instrumento.",
  },
  German: {
    eyebrow: "Prazisionsmetrologie und Kalibrierung",
    title: "Vertrauen in jede Messung fur Indiens Hersteller",
    sub: "Asiduo Enterprises bietet ruckverfolgbare Kalibrierung, metrologische Losungen und Gerateunterstutzung mit schneller Bearbeitung und auditgerechter Dokumentation.",
    primary: "Kalibrierung planen",
    secondary: "Leistungsblatt herunterladen",
    stats: [
      { value: "15+ Jahre", label: "Metrologie-Expertise" },
      { value: "ISO/IEC 17025", label: "Ruckverfolgbare Kalibrierung" },
      { value: "24-48 Std", label: "Typische Bearbeitungszeit" },
      { value: "Ganz Indien", label: "Serviceabdeckung" },
    ],
    panelTitle: "Unsere Kernlabore",
    panelItems: [
      "Dimensions- und Lehrenkalibrierung",
      "Drehmoment, Kraft und Druck",
      "Oberflachen- und Profilmessung",
      "Vor-Ort- und Laborservices",
    ],
    panelCopy:
      "Spezialisierte Ingenieure sichern Ruckverfolgbarkeit und Konformitat fur jedes Instrument.",
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const copy = heroContent[language] || heroContent["English (USA)"];

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="hero-lift"
          staggerMs={20}
          durationMs={760}
        />
        <p className="sub">{copy.sub}</p>
        <div className="hero-actions">
          <NavLink className="btn btn-primary" to="/contact">
            {copy.primary}
          </NavLink>
          <button className="btn btn-ghost">{copy.secondary}</button>
        </div>
        <div className="hero-stats">
          {copy.stats.map((stat, index) => (
            <div
              className="stat"
              key={stat.label}
              style={{ "--stat-index": index }}
            >
              <span>{stat.value}</span>
              <strong>{stat.label}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-panel">
        <div className="panel-card">
          <div className="panel-sparkles" aria-hidden="true">
            <span className="panel-sparkle" />
            <span className="panel-sparkle" />
            <span className="panel-sparkle" />
            <span className="panel-sparkle" />
            <span className="panel-sparkle" />
          </div>
          <h3>{copy.panelTitle}</h3>
          <ul>
            {copy.panelItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="panel-divider" />
          <p>{copy.panelCopy}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
