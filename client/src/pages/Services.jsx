import React from "react";
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";

const services = [
  {
    title: "Dimensional Calibration",
    desc: "Micrometers, calipers, gauges, and precision tools calibrated to national standards.",
  },
  {
    title: "Force & Torque",
    desc: "Traceable calibration for torque wrenches, load cells, and force gauges.",
  },
  {
    title: "Pressure & Vacuum",
    desc: "Pressure gauges, transducers, and vacuum sensors with uncertainty budgets.",
  },
  {
    title: "Surface & Profile",
    desc: "Roughness, surface plates, and form measurement systems.",
  },
  {
    title: "On-site Services",
    desc: "Plant-side calibration and validation to minimize downtime.",
  },
  {
    title: "Training & Documentation",
    desc: "SOPs, uncertainty studies, and audit-ready reporting assistance.",
  },
];

const Services = () => {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Metrology & Calibration</p>
        <h1>Services designed for compliance and speed</h1>
        <p>
          We help you maintain measurement integrity across the full
          calibration lifecycle—from instrumentation planning to final audit
          documentation.
        </p>
      </section>
      <section className="section services">
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section onsite-cta">
        <div className="onsite-card">
          <div>
            <h4>Need On-Site Calibration?</h4>
            <p>
              Our mobile calibration units can come to your facility for
              on-site calibrations.
            </p>
          </div>
          <NavLink className="btn btn-primary" to="/contact">
            Contact Us
          </NavLink>
        </div>
      </section>

      <section className="section why-choose">
        <div className="info-card">
          <h3>Why Choose Asiduo Calibration?</h3>
          <div className="card-underline" />
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 12l4 4 8-8" />
                </svg>
              </div>
              <h4>NABL Accredited</h4>
              <p>
                Our calibration centers are aligned to ISO/IEC 17025 standards,
                ensuring trusted results.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h4>Multiple Locations</h4>
              <p>
                With facilities in Chennai, Bangalore, and Coimbatore, we offer
                convenient access across South India.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="7" width="12" height="10" rx="2" />
                  <path d="M16 9h2a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-3" />
                  <circle cx="8" cy="18" r="2" />
                  <circle cx="16" cy="18" r="2" />
                </svg>
              </div>
              <h4>Mobile Calibration</h4>
              <p>
                Our mobile calibration service brings expert support directly to
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
