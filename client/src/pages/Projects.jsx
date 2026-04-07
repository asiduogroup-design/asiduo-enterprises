import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import api from "../services/api.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const FILTERS = ["All", "Electrical", "Fire Safety", "Civil", "HVAC/AC", "Petroleum"];

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Completed Works",
    title: "Project Portfolio",
    intro:
      "Government and defence projects executed across electrical, fire safety, civil, HVAC, and petroleum sectors.",
    stats: {
      totalValue: "Total Project Value",
      projectsCompleted: "Projects Completed",
      clientOrganizations: "Client Organisations",
      coverage: "Coverage",
      coverageValue: "Pan India",
    },
    clientsLine:
      "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    filterLabels: {
      All: "All",
      Electrical: "Electrical",
      "Fire Safety": "Fire Safety",
      Civil: "Civil",
      "HVAC/AC": "HVAC/AC",
      Petroleum: "Petroleum",
    },
    loading: "Loading projects...",
    empty: "No projects found for this filter.",
    ctaTitle: "Ready to work with us on your next project?",
    ctaCopy:
      "With proven delivery across government, defence, and petroleum sectors, get in touch to discuss your scope and timeline.",
    ctaButton: "Request a Quote",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Lavori Completati",
    title: "Portfolio Progetti",
    intro:
      "Progetti governativi e difensivi eseguiti nei settori elettrico, antincendio, civile, HVAC e petrolifero.",
    stats: {
      totalValue: "Valore Totale Progetti",
      projectsCompleted: "Progetti Completati",
      clientOrganizations: "Organizzazioni Clienti",
      coverage: "Copertura",
      coverageValue: "Pan India",
    },
    clientsLine:
      "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    filterLabels: {
      All: "Tutti",
      Electrical: "Elettrico",
      "Fire Safety": "Sicurezza Antincendio",
      Civil: "Civile",
      "HVAC/AC": "HVAC/AC",
      Petroleum: "Petrolio",
    },
    loading: "Caricamento progetti...",
    empty: "Nessun progetto trovato per questo filtro.",
    ctaTitle: "Pronto a lavorare con noi sul tuo prossimo progetto?",
    ctaCopy:
      "Con consegne comprovate nei settori governativo, difesa e petrolio, contattaci per discutere scope e tempistiche.",
    ctaButton: "Richiedi un Preventivo",
  },
  Spanish: {
    eyebrow: "Trabajos Completados",
    title: "Portafolio de Proyectos",
    intro:
      "Proyectos gubernamentales y de defensa ejecutados en sectores electrico, contra incendios, civil, HVAC y petroleo.",
    stats: {
      totalValue: "Valor Total de Proyectos",
      projectsCompleted: "Proyectos Completados",
      clientOrganizations: "Organizaciones Cliente",
      coverage: "Cobertura",
      coverageValue: "Pan India",
    },
    clientsLine:
      "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    filterLabels: {
      All: "Todos",
      Electrical: "Electrico",
      "Fire Safety": "Seguridad Contra Incendios",
      Civil: "Civil",
      "HVAC/AC": "HVAC/AC",
      Petroleum: "Petroleo",
    },
    loading: "Cargando proyectos...",
    empty: "No se encontraron proyectos para este filtro.",
    ctaTitle: "Listo para trabajar con nosotros en su proximo proyecto?",
    ctaCopy:
      "Con entrega comprobada en gobierno, defensa y petroleo, contactenos para revisar su alcance y cronograma.",
    ctaButton: "Solicitar Cotizacion",
  },
  German: {
    eyebrow: "Abgeschlossene Arbeiten",
    title: "Projektportfolio",
    intro:
      "Regierungs- und Verteidigungsprojekte in den Bereichen Elektrik, Brandschutz, Tiefbau, HVAC und Petroleum.",
    stats: {
      totalValue: "Gesamtprojektwert",
      projectsCompleted: "Abgeschlossene Projekte",
      clientOrganizations: "Kundenorganisationen",
      coverage: "Abdeckung",
      coverageValue: "Pan India",
    },
    clientsLine:
      "CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC",
    filterLabels: {
      All: "Alle",
      Electrical: "Elektrik",
      "Fire Safety": "Brandschutz",
      Civil: "Tiefbau",
      "HVAC/AC": "HVAC/AC",
      Petroleum: "Petroleum",
    },
    loading: "Projekte werden geladen...",
    empty: "Keine Projekte fur diesen Filter gefunden.",
    ctaTitle: "Bereit, mit uns am nachsten Projekt zu arbeiten?",
    ctaCopy:
      "Mit nachgewiesener Umsetzung in Regierung, Verteidigung und Petroleum kontaktieren Sie uns fur Umfang und Zeitplan.",
    ctaButton: "Angebot Anfordern",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const TAG_COLOURS = {
  Electrical: { bg: "#e8f1fc", text: "#1f66a8" },
  "Fire Safety": { bg: "#fdecea", text: "#b91c1c" },
  Civil: { bg: "#f0fdf4", text: "#166534" },
  "HVAC/AC": { bg: "#f0f9ff", text: "#0369a1" },
  Petroleum: { bg: "#fff7ed", text: "#c2410c" },
};

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-card-header">
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="project-tag"
            style={TAG_COLOURS[tag] ? { backgroundColor: TAG_COLOURS[tag].bg, color: TAG_COLOURS[tag].text } : {}}
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="project-value">{project.value}</span>
    </div>
    <h3 className="project-title">{project.title}</h3>
    <div className="project-meta">
      <span className="project-client">{project.client}</span>
      <span className="project-location">
        <svg viewBox="0 0 24 24" className="project-location-icon" aria-hidden="true">
          <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        {project.location}
      </span>
    </div>
  </div>
);

const Projects = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectsList, setProjectsList] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await api.get("/api/projects");
        setProjectsList(Array.isArray(res.data) ? res.data : []);
      } catch {
        setProjectsList([]);
      } finally {
        setLoadingProjects(false);
      }
    };

    loadProjects();
  }, []);

  const filtered =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.tags.includes(activeFilter));

  const uniqueClients = new Set(projectsList.map((project) => project.client)).size;

  return (
    <main className="page">
      <section className="page-hero projects-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="swing-up"
          staggerMs={20}
          durationMs={760}
        />
        <p>{copy.intro}</p>
      </section>

      <section className="section projects-stats">
        <div className="projects-stats-grid">
          <div className="projects-stat">
            <span className="projects-stat-number">₹1.87 Cr+</span>
            <span className="projects-stat-label">{copy.stats.totalValue}</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat-number">{projectsList.length}+</span>
            <span className="projects-stat-label">{copy.stats.projectsCompleted}</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat-number">{uniqueClients}+</span>
            <span className="projects-stat-label">{copy.stats.clientOrganizations}</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat-number">{copy.stats.coverageValue}</span>
            <span className="projects-stat-label">{copy.stats.coverage}</span>
          </div>
        </div>
        <p className="projects-clients-line">{copy.clientsLine}</p>
      </section>

      <section className="section projects-section">
        <div className="projects-filter-bar">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`projects-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
                {copy.filterLabels[f] || f}
              {f !== "All" && (
                <span className="projects-filter-count">
                  {projectsList.filter((p) => p.tags.includes(f)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {loadingProjects ? (
          <p className="projects-empty">{copy.loading}</p>
        ) : filtered.length === 0 ? (
          <p className="projects-empty">{copy.empty}</p>
        ) : (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project._id || project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      <section className="section projects-cta">
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

export default Projects;
