import React from "react";
import { NavLink } from "react-router-dom";

const Careers = () => {
  return (
    <main className="page">
      <section className="page-hero careers-hero">
        <p className="eyebrow">Careers</p>
        <h1>Build precision careers at Asiduo Enterprises</h1>
        <p>
          Join a team delivering trusted calibration and metrology services
          across India. We invest in hands-on growth, mentorship, and long-term
          expertise.
        </p>
        <div className="careers-hero-actions">
          <NavLink className="btn btn-primary" to="/contact">
            Submit Your Profile
          </NavLink>
          <a className="btn btn-ghost" href="#open-roles">
            Explore Opportunities
          </a>
        </div>
        <div className="trust-grid">
          <div className="trust-card">
            <strong>10+ Years</strong>
            <span>Calibration experience</span>
          </div>
          <div className="trust-card">
            <strong>12+ Industries</strong>
            <span>Manufacturing, aerospace, pharma</span>
          </div>
          <div className="trust-card">
            <strong>ISO Aligned</strong>
            <span>Process-ready documentation</span>
          </div>
        </div>
      </section>

      <section className="section career-section">
        <div className="section-heading">
          <p className="eyebrow">Why work with us</p>
          <h2>Craft your future in metrology</h2>
          <p>Professional teams, practical exposure, and steady growth.</p>
        </div>
        <div className="why-work-grid">
          <div className="why-work-card">
            <h3>Leading Projects</h3>
            <p>Industry-grade calibration and metrology work.</p>
          </div>
          <div className="why-work-card">
            <h3>Hands-on Practice</h3>
            <p>Direct exposure to precision instruments and labs.</p>
          </div>
          <div className="why-work-card">
            <h3>Career Growth</h3>
            <p>Clear paths for skills, certifications, and progress.</p>
          </div>
        </div>
      </section>

      <section className="section career-section">
        <div className="section-heading">
          <p className="eyebrow">Why join us</p>
          <h2>People-first culture with measurable impact</h2>
        </div>
        <div className="why-join-pills">
          <div className="why-join-pill">
            <span className="why-join-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M3 8l9-4 9 4-9 4-9-4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10v4.5c0 .9 2.7 2.5 5 2.5s5-1.6 5-2.5V10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Professional Growth
          </div>
          <div className="why-join-pill">
            <span className="why-join-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <circle
                  cx="8"
                  cy="8"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="16"
                  cy="8"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M4 18c0-2.2 2-4 4.5-4S13 15.8 13 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M11 18c0-2 1.9-3.6 4.5-3.6S20 16 20 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Collaborative Environment
          </div>
          <div className="why-join-pill">
            <span className="why-join-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M3 12h18M12 3c2.8 2.7 2.8 15.3 0 18M12 3c-2.8 2.7-2.8 15.3 0 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Industry Exposure
          </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="section career-section roles-section"
      >
        <div className="section-heading">
          <p className="eyebrow">Open roles</p>
          <h2>We are not hiring right now</h2>
          <p>Submit your resume and we will contact you for future openings.</p>
        </div>
        <div className="roles-grid">
          <div className="roles-card">
            <h3>No openings currently</h3>
            <p>We keep every profile on file for upcoming requirements.</p>
          </div>
          <div className="roles-card roles-cta">
            <h3>Upload your resume</h3>
            <p>Share your profile and we will reach out soon.</p>
            <div className="resume-actions">
              <NavLink className="btn btn-primary" to="/contact">
                Submit Your Profile
              </NavLink>
              <NavLink className="btn btn-ghost" to="/contact">
                Explore Opportunities
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-section">
        <div className="section-heading">
          <p className="eyebrow">Hiring process</p>
          <h2>Clear steps from application to onboarding</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div>
              <h3>Profile review</h3>
              <p>We match your skills with upcoming requirements.</p>
            </div>
          </div>
          <div className="process-step">
            <div>
              <h3>Technical conversation</h3>
              <p>Meet our experts to align on tools and projects.</p>
            </div>
          </div>
          <div className="process-step">
            <div>
              <h3>Offer and onboarding</h3>
              <p>Transparent offer and a structured ramp-up plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-section contact-hr">
        <div>
          <p className="eyebrow">Contact HR</p>
          <h2>Have questions about careers?</h2>
          <p>Write to us and our team will respond within 48 hours.</p>
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          Contact HR
        </NavLink>
      </section>
    </main>
  );
};

export default Careers;
