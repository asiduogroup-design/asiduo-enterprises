import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Precision Metrology & Calibration</p>
        <h1>Confidence in Every Measurement for India&apos;s Manufacturers</h1>
        <p className="sub">
          Asiduo Enterprises delivers traceable calibration, metrology solutions,
          and equipment support with fast turnaround and audit-ready reporting.
        </p>
        <div className="hero-actions">
          <NavLink className="btn btn-primary" to="/contact">
            Schedule Calibration
          </NavLink>
          <button className="btn btn-ghost">Download Capability Sheet</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span>15+ Years</span>
            <strong>Metrology Expertise</strong>
          </div>
          <div className="stat">
            <span>ISO/IEC 17025</span>
            <strong>Traceable Calibration</strong>
          </div>
          <div className="stat">
            <span>24-48 Hrs</span>
            <strong>Typical Turnaround</strong>
          </div>
          <div className="stat">
            <span>Pan-India</span>
            <strong>Service Coverage</strong>
          </div>
        </div>
      </div>
      <div className="hero-panel">
        <div className="panel-card">
          <h3>Our Core Labs</h3>
          <ul>
            <li>Dimensional & Gauge Calibration</li>
            <li>Torque, Force & Pressure</li>
            <li>Surface & Profile Measurements</li>
            <li>On-site & In-lab Services</li>
          </ul>
          <div className="panel-divider" />
          <p>
            Dedicated engineers ensure traceability and compliance for every
            instrument.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
