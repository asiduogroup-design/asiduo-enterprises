import React from "react";

const About = () => {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Company</p>
        <h1>About Asiduo Enterprises</h1>
        <p>
          Asiduo Enterprises is a metrology partner for manufacturers who demand
          accuracy, speed, and compliance. We support measurement systems across
          dimensional, force, pressure, and torque domains with traceable
          calibration and audit-ready documentation.
        </p>
      </section>

      <section className="section about">
        <div>
          <h2>Our Mission</h2>
          <p>
            To deliver reliable measurement confidence that helps our clients
            manufacture with zero compromise. We combine experienced engineers,
            modern labs, and clear reporting to keep your quality systems
            always audit-ready.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>Dedicated Engineering</h3>
            <p>
              Specialists who understand your production timelines and quality
              standards.
            </p>
          </div>
          <div className="about-card">
            <h3>Transparent Reporting</h3>
            <p>
              Clean, traceable certificates with uncertainty budgets and
              compliance references.
            </p>
          </div>
          <div className="about-card">
            <h3>Responsive Support</h3>
            <p>
              Rapid turnaround schedules and on-site service availability across
              India.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
