import React from "react";
import { NavLink, useParams } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "What We Deliver",
    notFound: "Service Not Found",
    overview: "Overview",
    deliverables: "What We Deliver",
    services: [
      {
        title: "Electrical",
        description: "Power distribution, lighting systems, emergency backups, and switchgear installation for government, defence, and enterprise facilities. CPWD and DMRC compliant execution.",
        fullDetails: "Our electrical services provide complete HT/LT (High Tension/Low Tension) electrical installations for government, defence, and industrial facilities. Every installation is executed per IS and CPWD standards. We specialize in comprehensive electrical infrastructure for critical projects.",
        services: [
          "HT/LT Panel Installation & Commissioning",
          "Substation & Transformer Works",
          "Voltage Stabilizer & UPS Systems",
          "AMF Panel & DG Set Works",
          "Earthing & Lightning Protection",
          "Internal & External Electrification",
        ],
      },
      {
        title: "Fire Safety Systems",
        description: "Fire detection, suppression, and evacuation systems designed to BIS/IS and NFPA standards. Commissioning and statutory compliance for high-occupancy and critical infrastructure sites.",
        fullDetails: "End-to-end fire detection, suppression, and protection systems meeting NFPA, IS, and TAC standards. From automated fire alarm networks to foam flooding systems, we ensure every site is protected with redundant systems and statutory compliance.",
        services: [
          "Fire Hydrant & Sprinkler Systems",
          "Gas Suppression Systems (FM-200/CO₂)",
          "Addressable Fire Alarm & Detection",
          "Fire Fighting Pump Panels",
          "Foam Flooding (Petroleum Ready)",
          "Repair & Refilling of Existing Systems",
        ],
      },
      {
        title: "Civil Works",
        description: "Structural finishes, MEP rough-ins, foundation work, and site-specific modifications. Execution aligned to architectural specs and permit requirements across India.",
        fullDetails: "Structural and finishing civil works for metro rail, defence, and government infrastructure projects across India. From RCC structures to specialized plumbing, we deliver quality construction aligned to architectural specifications and permit requirements.",
        services: [
          "RCC Structures & Foundations",
          "Plastering, Masonry & Finishing",
          "Underground Drainage & Piping",
          "Road & Pavement Works",
          "Renovation & Refurbishment",
          "Water Supply & Plumbing Works",
        ],
      },
      {
        title: "CCTV & Surveillance",
        description: "Integrated video surveillance, access control, and monitoring systems for perimeter and facility-wide security. Installation and integration on government and defence sites.",
        fullDetails: "Surveillance and electronic security systems for metro stations, defence bases, and public infrastructure. Our systems integrate CCTV, access control, and building management for comprehensive facility protection.",
        services: [
          "IP & Analog CCTV Installation",
          "NVR/DVR Setup & Configuration",
          "Access Control Systems",
          "Building Management Systems (BMS)",
          "Public Address (PA) Systems",
          "Structured Cabling (LAN/Fiber)",
        ],
      },
      {
        title: "HVAC & Air Conditioning",
        description: "Supply, installation, and maintenance of air conditioning systems for government offices, guesthouses, and institutional buildings.",
        fullDetails: "Complete HVAC and air conditioning services including supply, installation, commissioning, and maintenance. We handle everything from cassette AC units to centralised air conditioning systems with annual maintenance contracts.",
        services: [
          "Cassette AC Installation & Commissioning",
          "Split Type AC (1.5TR/2TR) Supply, Installation & Testing",
          "Window & Inverter AC Works",
          "Centralised AC System Maintenance",
          "Annual Maintenance Contracts (AMC)",
          "Duct Cleaning & Filter Replacement",
        ],
      },
    ],
    backButton: "Back to Services",
    ctaTitle: "Need this service for your project?",
    ctaCopy: "Contact our team to discuss your specific requirements and project timeline.",
    ctaButton: "Schedule a Consultation",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Cosa Consegniamo",
    notFound: "Servizio Non Trovato",
    overview: "Panoramica",
    deliverables: "Cosa Consegniamo",
    services: [
      {
        title: "Impianti Elettrici",
        description: "Distribuzione elettrica, sistemi di illuminazione, backup di emergenza e installazioni di switchgear per strutture governative, difensive e aziendali. Esecuzione conforme CPWD e DMRC.",
        fullDetails: "I nostri servizi elettrici forniscono complete installazioni HT/LT per strutture governative, difensive e industriali. Ogni installazione viene eseguita secondo gli standard IS e CPWD. Siamo specializzati in infrastrutture elettriche complete per progetti critici.",
        services: [
          "Installazione e Commissioning Pannelli HT/LT",
          "Lavori di Sottostazione e Trasformatore",
          "Sistemi di Stabilizzatore di Tensione e UPS",
          "Lavori Pannello AMF e DG Set",
          "Protezione da Messa a Terra e Fulmine",
          "Elettrificazione Interna ed Esterna",
        ],
      },
      {
        title: "Sistemi Antincendio",
        description: "Tubi di rilevazione, sistemi di soppressione ed evacuazione progettati secondo BIS/IS e NFPA. Messa in servizio e conformita normativa per siti ad alta occupazione e infrastrutture critiche.",
        fullDetails: "Sistemi integrati di rilevazione antincendio, soppressione e protezione conforme agli standard NFPA, IS e TAC. Da reti di allarme incendio automatizzate a sistemi di inondazione con schiuma, garantiamo che ogni sito sia protetto.",
        services: [
          "Sistemi di Idrante e Sprinkler",
          "Sistemi di Soppressione a Gas (FM-200/CO₂)",
          "Allarme Antincendio Indirizzabile e Rilevamento",
          "Pannelli Pompa Antincendio",
          "Inondazione con Schiuma (Pronta per Petrolio)",
          "Riparazione e Riempimento di Sistemi Esistenti",
        ],
      },
      {
        title: "Lavori Civili",
        description: "Finiture strutturali, rough-ins MEP, lavori di fondazione e modifiche specifiche del sito. Esecuzione allineata alle specifiche architettoniche e ai requisiti sui permessi.",
        fullDetails: "Lavori strutturali e di finitura civile per progetti ferroviari metropolitani, difensivi e governativi in tutta l'India. Dalle strutture RCC agli impianti specializzati, consegniamo costruzioni di qualità.",
        services: [
          "Strutture e Fondazioni RCC",
          "Intonacatura, Muratura e Finitura",
          "Drenaggio Sotterraneo e Tubazioni",
          "Lavori di Strada e Pavimentazione",
          "Ristrutturazione e Rinnovamento",
          "Acqua e Lavori Idraulici",
        ],
      },
      {
        title: "CCTV e Sorveglianza",
        description: "Sistemi integrati di videosorveglianza, controllo accessi e monitoraggio per la sicurezza perimetrale e dell'intera struttura. Installazione e integrazione in siti governativi e difensive.",
        fullDetails: "Sistemi di sorveglianza e sicurezza elettronica per stazioni metropolitane, basi difensive e infrastrutture pubbliche. I nostri sistemi integrano CCTV, controllo accessi e gestione degli edifici.",
        services: [
          "Installazione CCTV IP e Analogico",
          "Configurazione NVR/DVR",
          "Sistemi di Controllo Accessi",
          "Sistemi di Gestione Edifici (BMS)",
          "Sistemi di Indirizzo Pubblico (PA)",
          "Cablaggio Strutturato (LAN/Fibra)",
        ],
      },
    ],
    backButton: "Torna ai Servizi",
    ctaTitle: "Hai bisogno di questo servizio per il tuo progetto?",
    ctaCopy: "Contatta il nostro team per discutere i tuoi requisiti specifici e la tempistica del progetto.",
    ctaButton: "Pianifica una Consulenza",
  },
  Spanish: {
    eyebrow: "Que Entregamos",
    notFound: "Servicio No Encontrado",
    overview: "Resumen",
    deliverables: "Que Entregamos",
    services: [
      {
        title: "Electricidad",
        description: "Distribucion electrica, sistemas de iluminacion, respaldos de emergencia e instalacion de equipos de maniobra para instalaciones gubernamentales, de defensa y empresariales. Ejecucion conforme a CPWD y DMRC.",
        fullDetails: "Nuestros servicios electricos proporcionan instalaciones completas HT/LT para instalaciones gubernamentales, de defensa e industriales. Cada instalacion se ejecuta conforme a normas IS y CPWD.",
        services: [
          "Instalacion y Comisionamiento de Paneles HT/LT",
          "Trabajos de Subestacion y Transformador",
          "Sistemas de Estabilizador de Voltaje y UPS",
          "Trabajos de Panel AMF y DG Set",
          "Protecion de Puesta a Tierra y Rayo",
          "Electrificacion Interna y Externa",
        ],
      },
      {
        title: "Sistemas de Seguridad contra Incendios",
        description: "Sistemas de deteccion, supresion y evacuacion contra incendios diseñados segun normas BIS/IS y NFPA. Puesta en marcha y cumplimiento normativo para sitios de alta ocupacion e infraestructuras criticas.",
        fullDetails: "Sistemas integrados de deteccion, supresion y proteccion contra incendios que cumplen normas NFPA, IS y TAC. Desde redes de alarma automatizadas hasta sistemas de inundacion con espuma.",
        services: [
          "Sistemas de Hidrante y Rociador",
          "Sistemas de Supresion por Gas (FM-200/CO₂)",
          "Alarma y Deteccion de Incendios Direccionable",
          "Paneles de Bomba de Extincion de Incendios",
          "Inundacion con Espuma (Lista para Petroleo)",
          "Reparacion y Recarga de Sistemas Existentes",
        ],
      },
      {
        title: "Trabajos Civiles",
        description: "Acabados estructurales, roughins MEP, trabajos de cimentacion y modificaciones especificas del sitio. Ejecucion alineada con especificaciones arquitectonicas y requisitos de permisos.",
        fullDetails: "Trabajos estructurales y de acabado civil para proyectos de ferrocarril metropolitano, defensa e infraestructura gubernamental en toda India.",
        services: [
          "Estructuras y Cimientos RCC",
          "Enlucido, Albañileria y Acabado",
          "Drenaje Subterraneo y Tuberias",
          "Trabajos de Carreteras y Pavimentacion",
          "Renovacion y Remodelacion",
          "Suministro de Agua y Trabajos Hidraulicos",
        ],
      },
      {
        title: "CCTV y Vigilancia",
        description: "Sistemas integrados de videovigilancia, control de acceso y monitoreo para seguridad perimetral e instalaciones completas. Instalacion e integracion en sitios gubernamentales y de defensa.",
        fullDetails: "Sistemas de vigilancia y seguridad electronica para estaciones de metro, bases de defensa e infraestructura publica.",
        services: [
          "Instalacion de CCTV IP y Analogico",
          "Configuracion de NVR/DVR",
          "Sistemas de Control de Acceso",
          "Sistemas de Gestion de Edificios (BMS)",
          "Sistemas de Direccion Publica (PA)",
          "Cableado Estructurado (LAN/Fibra)",
        ],
      },
    ],
    backButton: "Volver a Servicios",
    ctaTitle: "¿Necesitas este servicio para tu proyecto?",
    ctaCopy: "Contacta a nuestro equipo para discutir tus requisitos especificos y cronograma del proyecto.",
    ctaButton: "Programar una Consulta",
  },
  German: {
    eyebrow: "Was Wir Leisten",
    notFound: "Service Nicht Gefunden",
    overview: "Uberblick",
    deliverables: "Was Wir Leisten",
    services: [
      {
        title: "Elektrik",
        description: "Stromverteilung, Beleuchtungssysteme, Notrueckfuehrung und Schaltgeraeteinstallation fuer Regierungs-, Verteidigungs- und Unternehmenseinrichtungen. CPWD und DMRC konforme Ausfuehrung.",
        fullDetails: "Unsere Elektrodienstleistungen bieten vollstaendige HT/LT-Installationen fuer Regierungs-, Verteidigungs- und Industrieanlagen. Jede Installation wird gemaess IS- und CPWD-Standards ausgefuehrt.",
        services: [
          "HT/LT-Panelinstallation und Inbetriebnahme",
          "Transformatoren- und Umspannwerksarbeiten",
          "Spannungsstabilisator- und USV-Systeme",
          "AMF-Panel- und DG-Set-Arbeiten",
          "Erdung und Blitzschutz",
          "Innen- und Aussenelektrifikation",
        ],
      },
      {
        title: "Brandschutzsysteme",
        description: "Nach BIS/IS und NFPA-Standards entworfene Branderkennung, Loeschtechnik und Evakuierungssysteme. Inbetriebnahme und gesetzliche Konformitaet fuer hochfrequentierte und kritische Infrastrukturstandorte.",
        fullDetails: "End-to-End-Branderkennungs-, Loeschtechnik- und Schutzsysteme nach NFPA-, IS- und TAC-Standards. Von automatisierten Brandmeldenetzen bis zu Schaumflutanlagen.",
        services: [
          "Feuerloeschhhydrant- und Sprinklersysteme",
          "Gassuppressionsanlagen (FM-200/CO₂)",
          "Brandalarm und Detektion",
          "Loeschpumpenpaneele",
          "Schaumflutung (Erdoelbereit)",
          "Reparatur und Neufuellung bestehender Systeme",
        ],
      },
      {
        title: "Tiefbau",
        description: "Strukturelle Oberflaechenbehandlung, MEP-Rohinstallation, Fundierungsarbeiten und spezifische Standortmodifikationen. Ausfuehrung gemaess Architekturvorgaben und Genehmigungsanforderungen.",
        fullDetails: "Strukturelle und Abschlussarbeiten im Tiefbau fuer Stadtbahn-, Verteidigungs- und Regierungsinfrastrukturprojekte in ganz Indien.",
        services: [
          "RCC-Strukturen und Fundamente",
          "Verputz, Maurerwerk und Oberflaechenbehandlung",
          "Unterirdische Entwaesserung und Rohrleitungen",
          "Strassen- und Pflasterarbeiten",
          "Renovierung und Sanierung",
          "Wasser- und Sanitaerinstallationen",
        ],
      },
      {
        title: "CCTV und Ueberwachung",
        description: "Integrierte Videoueberwachungs-, Zugangsschutz- und Ueberwachungssysteme fuer Umkreis- und anlagenbereite Sicherheit. Installation und Integration auf Regierungs- und Verteidigungsstandorten.",
        fullDetails: "Ueberwachungs- und elektronische Sicherheitssysteme fuer U-Bahn-Stationen, Verteidigungsbasen und oeffentliche Infrastruktur.",
        services: [
          "IP- und Analog-CCTV-Installation",
          "NVR/DVR-Einrichtung und Konfiguration",
          "Zugangsschutz",
          "Gebaeudemanagementsysteme (BMS)",
          "Durchsagesysteme (PA)",
          "Strukturierte Verkabelung (LAN/Glasfaser)",
        ],
      },
    ],
    backButton: "Zurueck zu Services",
    ctaTitle: "Benoetigen Sie diesen Service fuer Ihr Projekt?",
    ctaCopy: "Kontaktieren Sie unser Team, um Ihre spezifischen Anforderungen und Projektzeitplan zu besprechen.",
    ctaButton: "Termin Vereinbaren",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const ServiceDetail = () => {
  const { language } = useLanguage();
  const { serviceSlug } = useParams();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  const service = copy.services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === serviceSlug
  );

  if (!service) {
    return (
      <main className="page services-detail-page">
        <section className="page-hero services-hero">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.notFound}</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="page services-detail-page">
      <section className="page-hero services-hero">
        <NavLink to="/services" className="back-link">
          ← {copy.backButton}
        </NavLink>
        <h1>{service.title}</h1>
        <p className="service-intro">{service.description}</p>
      </section>

      <section className="section service-detail-content">
        <div className="service-full-details">
          <h2>{copy.overview}</h2>
          <p>{service.fullDetails}</p>
        </div>

        {service.services && service.services.length > 0 && (
          <div className="service-deliverables">
            <h2>{copy.deliverables}</h2>
            <ul className="service-list">
              {service.services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
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

export default ServiceDetail;
