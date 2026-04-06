import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import api from "../services/api.js";

const FILTERS = ["All", "Electrical", "Fire Safety", "Civil", "HVAC/AC", "Petroleum"];

const staticProjects = [
  {
    id: 1,
    title: "Upgradation of Bunglow No. 26, Lodhi Estate — Electrical Wiring, Cabling & Post Top Lights",
    client: "CPWD, DED-11",
    location: "New Delhi",
    value: "₹16.71L",
    tags: ["Electrical"],
  },
  {
    id: 2,
    title: "Upgradation of Bunglow No. 26, Lodhi Estate (Tenure Pool Bunglow of SCI) — SITC of Ceiling Fans",
    client: "CPWD, DED-11",
    location: "New Delhi",
    value: "₹88K",
    tags: ["Electrical"],
  },
  {
    id: 3,
    title: "Maintenance of E&M Services, IG Stadium — Replacement / Re-routing / Shifting of Sprinkler & Hydrant Lines (NBCC New Hostel Site)",
    client: "CPWD",
    location: "New Delhi",
    value: "₹15.70L",
    tags: ["Fire Safety"],
  },
  {
    id: 4,
    title: "Providing & Fixing Split Type AC Units (1.5 TR) in Various Rooms — New Guest House, Ayog Sachivalaya Building",
    client: "UPSC",
    location: "New Delhi",
    value: "₹4.06L",
    tags: ["HVAC/AC"],
  },
  {
    id: 5,
    title: "Providing & Fixing Split Type AC Units (1.5 TR) in Various Rooms — Ayog Sachivalaya Building Guest House",
    client: "UPSC",
    location: "New Delhi",
    value: "₹2.24L",
    tags: ["HVAC/AC"],
  },
  {
    id: 6,
    title: "MOEI & Fans incl. Street Lights, CPWD Office Dehradun — SITC of AC & Electrical Works",
    client: "CPWD",
    location: "Dehradun",
    value: "₹4.5L",
    tags: ["Electrical", "HVAC/AC"],
  },
  {
    id: 7,
    title: "E&M Services at HAF GZB — Urgent Replacement of Faulty Cable of Fire System at BP No. 10, WSA",
    client: "Indian Air Force Station, Hindan",
    location: "Ghaziabad",
    value: "₹4.75L",
    tags: ["Fire Safety", "Electrical"],
  },
  {
    id: 8,
    title: "Provision of Water Saving Taps in MD Accommodation",
    client: "Indian Air Force Station, Hindan",
    location: "Ghaziabad",
    value: "₹7.75L",
    tags: ["Civil"],
  },
  {
    id: 9,
    title: "O&M of Indira Paryawaran Bhawan, Jor Bagh — Supply & Replacement of Hand Dryers, LED Bollards & LED Step Lights",
    client: "Indira Paryawaran Bhawan",
    location: "New Delhi",
    value: "₹3.88L",
    tags: ["Electrical"],
  },
  {
    id: 10,
    title: "RMO of E&M Services, MeitY Building CGO Complex — Replacement of Old Fire Fighting Panel in Pump Room",
    client: "MeitY, CGO Complex",
    location: "Lodhi Road, New Delhi",
    value: "₹4.32L",
    tags: ["Fire Safety"],
  },
  {
    id: 11,
    title: "MOEI & Fans in CPWD Office Building, Dehradun — Data Entry Operator Services, Electrical Division",
    client: "CPWD",
    location: "Dehradun",
    value: "₹3.32L",
    tags: ["Electrical"],
  },
  {
    id: 12,
    title: "Renovation of DSO Section at Survey of India, Hathibarkala — Cassette AC & Electrical Works, NGDC Building",
    client: "Survey of India",
    location: "Dehradun",
    value: "₹9.71L",
    tags: ["Electrical", "HVAC/AC"],
  },
  {
    id: 13,
    title: "MOEI & Fans in CPWD Office Building, Dehradun — Data Entry Operator Services, Electrical Division",
    client: "CPWD",
    location: "Dehradun",
    value: "₹1.1L",
    tags: ["Electrical"],
  },
  {
    id: 14,
    title: "MOEI & Fans in CPWD Office Building, Dehradun — Data Entry Operator Services, Electrical Division",
    client: "CPWD",
    location: "Dehradun",
    value: "₹2.6L",
    tags: ["Electrical"],
  },
  {
    id: 15,
    title: "A/R & M/O DAB at AFS Hindan, Ghaziabad — Plastering Work in Ceiling & Wall at SMQ Quarters",
    client: "Indian Air Force Station, Hindan",
    location: "Ghaziabad",
    value: "₹9.8L",
    tags: ["Civil"],
  },
  {
    id: 16,
    title: "RMO of E&M Services, NDTL Building at JLN Stadium — SITC of Hot & Cold Air Purifiers",
    client: "JLN Stadium",
    location: "New Delhi",
    value: "₹1.4L",
    tags: ["HVAC/AC"],
  },
  {
    id: 17,
    title: "MOEI & Fans at Andrewsganj — Automatic Monitoring, Control & Regulation of Water Supply via BMS",
    client: "Andrewsganj",
    location: "New Delhi",
    value: "₹5.81L",
    tags: ["Electrical"],
  },
  {
    id: 18,
    title: "ARMO of Atal Akshay Urja Bhawan, CGO Complex — Water Level Indicator in Existing Tank",
    client: "CGO Complex",
    location: "New Delhi",
    value: "₹3.6L",
    tags: ["Electrical", "Civil"],
  },
  {
    id: 19,
    title: "O&M of Substation Equipment incl. DG Sets, MOEI, Fire Fighting & UPS System at INCP South Block — New ACB Retrofitting",
    client: "South Block",
    location: "New Delhi",
    value: "₹2.5L",
    tags: ["Electrical", "Fire Safety"],
  },
  {
    id: 20,
    title: "SITC of Electrical 3-Phase Voltage Stabilizer 30 KVA at BPCL Petrol Pump — Deepal Auto, East Delhi",
    client: "BPCL",
    location: "East Delhi",
    value: "₹1.10L",
    tags: ["Electrical", "Petroleum"],
  },
  {
    id: 21,
    title: "MOEI & Fans in Division Office & Guest House, CPWD Satwari Jammu — Annual Maintenance of Electrical, DG Set & Pump Set",
    client: "CPWD",
    location: "Satwari, Jammu",
    value: "₹19.5L",
    tags: ["Electrical"],
  },
  {
    id: 22,
    title: "Setting up of AMF Panel & Replacement of Existing Weatherproof Socket Fittings at Ex. PM Bungalows",
    client: "Ex. PM Bungalows",
    location: "New Delhi",
    value: "₹4.28L",
    tags: ["Electrical"],
  },
  {
    id: 23,
    title: "SITC of Gas Suppression System at Reprography Area, Library Building",
    client: "PMM&L",
    location: "New Delhi",
    value: "₹12L",
    tags: ["Fire Safety"],
  },
  {
    id: 24,
    title: "Repair & Refilling of Existing Gas Suppression System at IHC Blocks",
    client: "PMM&L",
    location: "New Delhi",
    value: "₹6L",
    tags: ["Fire Safety"],
  },
  {
    id: 25,
    title: "RMO Inspection Vehicle Services, SD-III / DED-102 — Driver Services for CE/NDZ-1",
    client: "CPWD, SD-III",
    location: "New Delhi",
    value: "₹1.7L",
    tags: ["Electrical"],
  },
];

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
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectsList, setProjectsList] = useState(staticProjects);

  useEffect(() => {
    api
      .get("/api/projects")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProjectsList(res.data);
        }
      })
      .catch(() => {
        // API unavailable — keep static data
      });
  }, []);

  const filtered =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.tags.includes(activeFilter));

  return (
    <main className="page">
      <section className="page-hero projects-hero">
        <p className="eyebrow">Completed Works</p>
        <AnimatedHeadline
          text="Project Portfolio"
          variant="swing-up"
          staggerMs={20}
          durationMs={760}
        />
        <p>
          25+ government and defence projects executed across electrical, fire safety, civil, HVAC, and petroleum sectors. Total value: ₹1.87 Cr+
        </p>
      </section>

      <section className="section projects-stats">
        <div className="projects-stats-grid">
          <div className="projects-stat">
            <span className="projects-stat-number">₹1.87 Cr+</span>
            <span className="projects-stat-label">Total Project Value</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat-number">25+</span>
            <span className="projects-stat-label">Projects Completed</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat-number">10+</span>
            <span className="projects-stat-label">Client Organisations</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat-number">Pan India</span>
            <span className="projects-stat-label">Coverage</span>
          </div>
        </div>
        <p className="projects-clients-line">
          CPWD · UPSC · IAF Hindan · MeitY · Survey of India · JLN Stadium · South Block · BPCL · PMM&L · NMRC · DMRC
        </p>
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
              {f}
              {f !== "All" && (
                <span className="projects-filter-count">
                  {projectsList.filter((p) => p.tags.includes(f)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="projects-empty">No projects found for this filter.</p>
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
          <h2>Ready to work with us on your next project?</h2>
          <p>
            With proven delivery across government, defence, and petroleum sectors — get in touch to discuss your scope and timeline.
          </p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          Request a Quote
        </NavLink>
      </section>
    </main>
  );
};

export default Projects;
