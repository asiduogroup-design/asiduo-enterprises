import React from "react";

const Clients = () => {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Clients</p>
        <h1>Manufacturers who trust Asiduo Enterprises</h1>
        <p>
          We support quality teams across automotive, aerospace, medical, and
          precision engineering industries.
        </p>
      </section>
      <section className="section testimonials">
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Asiduo Enterprises helped us stabilize our gauge calibration
              cycle and improved audit readiness.”
            </p>
            <span>Quality Manager, Auto Components</span>
          </div>
          <div className="testimonial-card">
            <p>
              “Their team is responsive and precise. The uncertainty study was
              detailed and easy to follow.”
            </p>
            <span>Plant Head, Precision Engineering</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
