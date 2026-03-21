import React from "react";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk about your measurement goals</h1>
        <p>
          Tell us about your instruments or calibration schedule and our
          engineers will respond within a business day.
        </p>
      </section>
      <section className="section contact">
        <div className="contact-info">
          <h2>Reach Asiduo Enterprises</h2>
          <p>
            We support manufacturers with on-site and in-lab calibration across
            India. Share your requirements and we will prepare a plan quickly.
          </p>
          <div className="contact-cards">
            <div>
              <h4>Address</h4>
              <p>Asiduo Enterprises, Industrial Estate, India</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 90000 00000</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>info@asiduo.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
