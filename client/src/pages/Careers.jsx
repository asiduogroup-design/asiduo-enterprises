import React from "react";
import { NavLink } from "react-router-dom";

const Careers = () => {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Careers</p>
        <h1>Build precision careers at Asiduo Enterprises</h1>
        <p>
          We are growing our calibration and metrology teams across India.
          Explore roles in lab operations, field service, and quality
          documentation.
        </p>
      </section>
      <section className="section cta">
        <div>
          <h2>Open Roles</h2>
          <p>
            Share your profile and we&apos;ll contact you when a suitable role
            opens.
          </p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          Apply Now
        </NavLink>
      </section>
    </main>
  );
};

export default Careers;
