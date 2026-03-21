import React from "react";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Calibration Services",
    desc: "Dimensional, force, pressure, and torque calibration aligned to national standards.",
  },
  {
    title: "Metrology Equipment Supply",
    desc: "Precision gauges, CMM accessories, surface plates, and measurement fixtures.",
  },
  {
    title: "Installation & Commissioning",
    desc: "On-site setup, validation, and uncertainty studies for new measurement systems.",
  },
  {
    title: "Training & Support",
    desc: "Operator training, SOP creation, and audit-ready documentation support.",
  },
];

const products = [
  {
    name: "Digital Height Gauge",
    description: "High-accuracy gauges with SPC-ready output and granite base.",
    category: "Dimensional",
  },
  {
    name: "Surface Roughness Tester",
    description: "Portable, shop-floor roughness measurement with profile export.",
    category: "Surface",
  },
  {
    name: "Torque Wrench Calibrator",
    description: "Bench-top calibration system with traceable load cells.",
    category: "Torque",
  },
];

const Home = () => {
  return (
    <main>
      <Hero />

      <section className="section about">
        <div>
          <p className="eyebrow">About Asiduo</p>
          <h2>Metrology partners focused on accuracy, speed, and compliance</h2>
          <p>
            We help manufacturing teams maintain measurement integrity with
            calibrated instruments, audited processes, and reliable reporting.
            Our engineers support projects from setup to uncertainty studies,
            ensuring quality is never in doubt.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>Consultative Support</h3>
            <p>
              We analyze your measurement workflow and recommend the right
              instrumentation mix.
            </p>
          </div>
          <div className="about-card">
            <h3>Traceable Results</h3>
            <p>
              Every certificate references national and international standards
              for audit readiness.
            </p>
          </div>
          <div className="about-card">
            <h3>Fast Turnaround</h3>
            <p>
              Structured intake and dispatch systems reduce downtime for your
              production lines.
            </p>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Comprehensive metrology solutions</h2>
          <p>
            From lab calibration to onsite commissioning, we support your
            measurement infrastructure end-to-end.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section products-preview">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h2>Precision instruments and accessories</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <div className="section-actions">
          <NavLink className="btn btn-primary" to="/products">
            View All Products
          </NavLink>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">Clients</p>
          <h2>Trusted by quality leaders</h2>
        </div>
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

      <section className="section cta">
        <div>
          <h2>Need urgent calibration support?</h2>
          <p>
            Our team can prioritize critical instruments to reduce downtime.
          </p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          Talk to an Expert
        </NavLink>
      </section>
    </main>
  );
};

export default Home;
