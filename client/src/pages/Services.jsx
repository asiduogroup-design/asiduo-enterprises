import React from "react";
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
    </main>
  );
};

export default Services;
