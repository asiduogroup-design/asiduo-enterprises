import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Testimonials = () => {
  return (
    <main className="page testimonials-page">
      <section className="page-hero testimonials-hero">
        <p className="eyebrow">Testimonials</p>
        <h1>Client Testimonials</h1>
        <p>Hear from businesses that trust our precision services.</p>
      </section>

      <section className="section testimonials-intro">
        <div className="testimonials-icon" aria-hidden="true">
          <HiOutlineChatBubbleLeftRight />
        </div>
        <h2>What Our Clients Say</h2>
        <p>
          Don&apos;t just take our word for it. Our partners rely on Asiduo for
          accuracy, accountability, and fast support.
        </p>
      </section>

      <section className="section testimonials-cta">
        <div>
          <h2>Ready to experience the Asiduo difference?</h2>
          <p>
            Join teams that have improved their measurement capabilities with
            our support.
          </p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          Contact Us Today
        </NavLink>
      </section>
    </main>
  );
};

export default Testimonials;
