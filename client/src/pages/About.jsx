import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <main className="page about-page">
      <section className="page-hero about-hero">
        <p className="eyebrow">About</p>
        <h1>About Asiduo Enterprises</h1>
        <p>
          Precision-first metrology solutions backed by responsive service and
          audit-ready documentation.
        </p>
      </section>
      <section className="section about-wrap">
        <div className="info-card">
          <h3>Our Story</h3>
          <div className="card-underline" />
          <p>
            Welcome to Asiduo Enterprises, a growing force in metrology and
            calibration services. We support manufacturers with precision
            instruments, reliable traceability, and audit-ready documentation.
          </p>
          <p>
            Our product range spans dimensional tools, surface measurement
            systems, torque and force solutions, and advanced metrology
            accessories. Every solution is backed by expert guidance and
            responsive service.
          </p>
          <p>
            Beyond our core offerings, we focus on continuous improvement and
            customer success, ensuring quality teams can measure with confidence
            at every stage of production.
          </p>
        </div>

        <div className="info-card">
          <h3>Company Details</h3>
          <div className="card-underline" />
          <div className="details-grid">
            <div className="detail-item">
              <span>Company Name</span>
              <strong>ASIDUO ENTERPRISES</strong>
            </div>
            <div className="detail-item">
              <span>Year Established</span>
              <strong>2009</strong>
            </div>
            <div className="detail-item">
              <span>Business Type</span>
              <strong>Service Provider, Distributor</strong>
            </div>
            <div className="detail-item">
              <span>Main Products</span>
              <strong>Precision Metrology Instruments</strong>
            </div>
            <div className="detail-item">
              <span>Location</span>
              <strong>Chennai, Bangalore, Coimbatore</strong>
            </div>
            <div className="detail-item">
              <span>Employees</span>
              <strong>50+ People</strong>
            </div>
          </div>
        </div>

        <div className="cta-card">
          <h3>Ready to experience the Asiduo difference?</h3>
          <p>
            Join hundreds of satisfied customers who improved their measurement
            capabilities with our precision tools and expert support.
          </p>
          <NavLink className="btn btn-primary" to="/contact">
            Contact Us Today
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default About;
