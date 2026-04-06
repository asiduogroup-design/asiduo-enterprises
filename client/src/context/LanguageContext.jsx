import React, { createContext, useContext, useMemo, useState } from "react";

const translations = {
  "English (USA)": {
    nav: {
      home: "Home",
      products: "Products",
      metrology: "Metrology",
      clients: "Clients",
      services: "Services",
      company: "Company",
      about: "About",
      aboutDesc: "Learn about our company values",
      testimonials: "Testimonials",
      testimonialsDesc: "What our clients say about us",
      news: "News",
      newsDesc: "Upcoming events and updates",
      career: "Career",
      projects: "Projects",
      admin: "Admin",
      login: "Login",
      logout: "Logout",
      contactUs: "Contact Us",
      selectLanguage: "Select language",
      searchLabel: "Search products",
      searchPlaceholder: "Search products",
    },
    footer: {
      aboutUs: "About Us",
      aboutCopy:
        "Your trusted partner in precision since 1983. As leading manufacturers, importers, and distributors of metrology instruments, we are committed to delivering accuracy, innovation, and reliability for every industrial application.",
      quickLinks: "Quick Links",
      products: "Products",
      services: "Services",
      clients: "Clients",
      careers: "Careers",
      contactUs: "Contact Us",
      qrCode: "QR Code",
      scanWebsite: "Scan to visit our website",
      contactTitle: "Contact Us",
      contactNow: "Contact Now",
      rights:
        "© 2026 Asiduo Enterprises. All rights reserved. Website by Asiduo Solutions",
    },
  },
  "English (India)": {
    nav: {
      home: "Home",
      products: "Products",
      metrology: "Metrology",
      clients: "Clients",
      services: "Services",
      company: "Company",
      about: "About",
      aboutDesc: "Know more about our company values",
      testimonials: "Testimonials",
      testimonialsDesc: "See what our clients say about us",
      news: "News",
      newsDesc: "Upcoming events and updates",
      career: "Career",
      projects: "Projects",
      admin: "Admin",
      login: "Login",
      logout: "Logout",
      contactUs: "Contact Us",
      selectLanguage: "Select language",
      searchLabel: "Search products",
      searchPlaceholder: "Search products",
    },
    footer: {
      aboutUs: "About Us",
      aboutCopy:
        "Your trusted partner in precision since 1983. As leading manufacturers, importers, and distributors of metrology instruments, we are committed to delivering accuracy, innovation, and reliability for every industrial application.",
      quickLinks: "Quick Links",
      products: "Products",
      services: "Services",
      clients: "Clients",
      careers: "Careers",
      contactUs: "Contact Us",
      qrCode: "QR Code",
      scanWebsite: "Scan to visit our website",
      contactTitle: "Contact Us",
      contactNow: "Contact Now",
      rights:
        "© 2026 Asiduo Enterprises. All rights reserved. Website by Asiduo Solutions",
    },
  },
  Italian: {
    nav: {
      home: "Home",
      products: "Prodotti",
      metrology: "Metrologia",
      clients: "Clienti",
      services: "Servizi",
      company: "Azienda",
      about: "Chi Siamo",
      aboutDesc: "Scopri i valori della nostra azienda",
      testimonials: "Testimonianze",
      testimonialsDesc: "Cosa dicono di noi i clienti",
      news: "Notizie",
      newsDesc: "Eventi e aggiornamenti",
      career: "Carriere",
      projects: "Progetti",
      admin: "Admin",
      login: "Accedi",
      logout: "Esci",
      contactUs: "Contattaci",
      selectLanguage: "Seleziona lingua",
      searchLabel: "Cerca prodotti",
      searchPlaceholder: "Cerca prodotti",
    },
    footer: {
      aboutUs: "Chi Siamo",
      aboutCopy:
        "Il tuo partner di fiducia nella precisione dal 1983. Come produttori, importatori e distributori di strumenti di metrologia, ci impegniamo a offrire accuratezza, innovazione e affidabilita per ogni applicazione industriale.",
      quickLinks: "Link Rapidi",
      products: "Prodotti",
      services: "Servizi",
      clients: "Clienti",
      careers: "Carriere",
      contactUs: "Contattaci",
      qrCode: "Codice QR",
      scanWebsite: "Scansiona per visitare il sito web",
      contactTitle: "Contattaci",
      contactNow: "Contatta Ora",
      rights:
        "© 2026 Asiduo Enterprises. Tutti i diritti riservati. Website by Asiduo Solutions",
    },
  },
  Spanish: {
    nav: {
      home: "Inicio",
      products: "Productos",
      metrology: "Metrologia",
      clients: "Clientes",
      services: "Servicios",
      company: "Empresa",
      about: "Sobre Nosotros",
      aboutDesc: "Conoce los valores de nuestra empresa",
      testimonials: "Testimonios",
      testimonialsDesc: "Lo que dicen nuestros clientes",
      news: "Noticias",
      newsDesc: "Proximos eventos y novedades",
      career: "Carreras",
      projects: "Proyectos",
      admin: "Admin",
      login: "Iniciar sesion",
      logout: "Cerrar sesion",
      contactUs: "Contactanos",
      selectLanguage: "Seleccionar idioma",
      searchLabel: "Buscar productos",
      searchPlaceholder: "Buscar productos",
    },
    footer: {
      aboutUs: "Sobre Nosotros",
      aboutCopy:
        "Su socio de confianza en precision desde 1983. Como fabricantes, importadores y distribuidores de instrumentos de metrologia, estamos comprometidos con ofrecer exactitud, innovacion y fiabilidad para cada aplicacion industrial.",
      quickLinks: "Enlaces Rapidos",
      products: "Productos",
      services: "Servicios",
      clients: "Clientes",
      careers: "Carreras",
      contactUs: "Contactanos",
      qrCode: "Codigo QR",
      scanWebsite: "Escanee para visitar nuestro sitio web",
      contactTitle: "Contactanos",
      contactNow: "Contactar Ahora",
      rights:
        "© 2026 Asiduo Enterprises. Todos los derechos reservados. Website by Asiduo Solutions",
    },
  },
  German: {
    nav: {
      home: "Startseite",
      products: "Produkte",
      metrology: "Metrologie",
      clients: "Kunden",
      services: "Dienstleistungen",
      company: "Unternehmen",
      about: "Uber Uns",
      aboutDesc: "Erfahren Sie mehr uber unsere Werte",
      testimonials: "Referenzen",
      testimonialsDesc: "Was unsere Kunden uber uns sagen",
      news: "Neuigkeiten",
      newsDesc: "Kommende Veranstaltungen und Updates",
      career: "Karriere",
      projects: "Projekte",
      admin: "Admin",
      login: "Anmelden",
      logout: "Abmelden",
      contactUs: "Kontakt",
      selectLanguage: "Sprache wahlen",
      searchLabel: "Produkte suchen",
      searchPlaceholder: "Produkte suchen",
    },
    footer: {
      aboutUs: "Uber Uns",
      aboutCopy:
        "Ihr zuverlassiger Partner fur Prazision seit 1983. Als Hersteller, Importeure und Vertriebspartner von Messinstrumenten stehen wir fur Genauigkeit, Innovation und Zuverlassigkeit in jeder industriellen Anwendung.",
      quickLinks: "Schnellzugriffe",
      products: "Produkte",
      services: "Dienstleistungen",
      clients: "Kunden",
      careers: "Karriere",
      contactUs: "Kontakt",
      qrCode: "QR-Code",
      scanWebsite: "Scannen Sie, um unsere Website zu besuchen",
      contactTitle: "Kontakt",
      contactNow: "Jetzt Kontaktieren",
      rights:
        "© 2026 Asiduo Enterprises. Alle Rechte vorbehalten. Website by Asiduo Solutions",
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("site_language") || "English (USA)"
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        setLanguage(nextLanguage);
        localStorage.setItem("site_language", nextLanguage);
      },
      t: translations[language] || translations["English (USA)"],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
