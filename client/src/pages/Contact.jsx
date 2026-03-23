import React, { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  const locations = [
    {
      key: "Chennai",
      name: "Chennai Branch",
      address: "Asiduo Enterprises, Industrial Estate, India",
      phone: "+91 90000 00000",
      email: "info@asiduo.com",
    },
    {
      key: "Coimbatore",
      name: "Coimbatore Branch",
      address: "Asiduo Enterprises, Industrial Estate, India",
      phone: "+91 90000 00000",
      email: "info@asiduo.com",
    },
    {
      key: "Bangalore",
      name: "Bangalore Branch",
      address: "Asiduo Enterprises, Industrial Estate, India",
      phone: "+91 90000 00000",
      email: "info@asiduo.com",
    },
    {
      key: "Pune",
      name: "Pune Branch",
      address: "Asiduo Enterprises, Industrial Estate, India",
      phone: "+91 90000 00000",
      email: "info@asiduo.com",
    },
  ];
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <main className="page">
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk about your measurement goals</h1>
        <p>
          Tell us about your instruments or calibration schedule and our
          engineers will respond within a business day.
        </p>
      </section>
      <section className="section contact-grid">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p>
            Have a question or need more information? Fill out the form and our
            team will reach you quickly.
          </p>
          <ContactForm />
        </div>
        <div className="contact-card">
          <h2>Contact Information</h2>
          <div className="contact-info-list">
            <div>
              <h4>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M6.5 3.5l3 3-2 2c1.4 2.6 3.5 4.7 6.1 6.1l2-2 3 3-2.2 2.2c-.5.5-1.2.7-1.9.5-3.2-.7-6.1-2.2-8.5-4.6S2.5 7.8 1.8 4.6c-.2-.7 0-1.4.5-1.9L4.5 1.5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Phone
              </h4>
              <p>+91 90000 00000</p>
            </div>
            <div>
              <h4>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M22 8l-10 7L2 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Email
              </h4>
              <p>info@asiduo.com</p>
            </div>
            <div>
              <h4>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                Address
              </h4>
              <p>Asiduo Enterprises, Industrial Estate, India</p>
            </div>
          </div>
          <div className="contact-map">Map preview</div>
        </div>
      </section>

      <section className="section locate-section">
        <div className="section-heading">
          <p className="eyebrow">Locate us</p>
          <h2>Find our offices across India</h2>
        </div>
        <div className="location-tabs">
          {locations.map((loc) => (
            <button
              key={loc.key}
              className={loc.key === activeLocation.key ? "active" : ""}
              onClick={() => setActiveLocation(loc)}
            >
              {loc.key}
            </button>
          ))}
        </div>
        <div className="location-grid">
          <div className="location-map">Map preview</div>
          <div className="location-card">
            <h3>{activeLocation.name}</h3>
            <div className="contact-info-list">
              <div>
                <h4>
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path
                        d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  Address
                </h4>
                <p>{activeLocation.address}</p>
              </div>
              <div>
                <h4>
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path
                        d="M6.5 3.5l3 3-2 2c1.4 2.6 3.5 4.7 6.1 6.1l2-2 3 3-2.2 2.2c-.5.5-1.2.7-1.9.5-3.2-.7-6.1-2.2-8.5-4.6S2.5 7.8 1.8 4.6c-.2-.7 0-1.4.5-1.9L4.5 1.5z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Phone
                </h4>
                <p>{activeLocation.phone}</p>
              </div>
              <div>
                <h4>
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path
                        d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M22 8l-10 7L2 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Email
                </h4>
                <p>{activeLocation.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-cta">
        <div>
          <h2>Need immediate assistance?</h2>
          <p>Our experts are ready to help you find the right solution.</p>
        </div>
        <div className="contact-cta-actions">
          <button className="btn btn-primary">Call Us Now</button>
          <button className="btn btn-ghost">Email Us</button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
