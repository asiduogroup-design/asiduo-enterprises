import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>About Us</h4>
          <p>
            Your trusted partner in precision since 1983. As leading
            manufacturers, importers, and distributors of metrology
            instruments, we are committed to delivering accuracy, innovation,
            and reliability for every industrial application.
          </p>
          <div className="footer-socials">
            <span className="social-dot" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 9v9M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                <path d="M10 9v9M10 12c.7-1 1.7-1.5 3-1.5 2 0 3 1.2 3 3.6V18" />
              </svg>
            </span>
            <span className="social-dot" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M14 8h2V5h-2c-2 0-3.5 1.4-3.5 3.5V10H8v3h2.5v6H14v-6h2.5l.5-3H14V8.8c0-.5.3-.8.8-.8Z" />
              </svg>
            </span>
            <span className="social-dot" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M18 8a6 6 0 0 1-1.8.5A3 3 0 0 0 17.5 7a6 6 0 0 1-2 0.8A3 3 0 0 0 10 10a8.5 8.5 0 0 1-6-3 3 3 0 0 0 .9 4A3 3 0 0 1 3 10.5v.1a3 3 0 0 0 2.4 3 3 3 0 0 1-1.3.1 3 3 0 0 0 2.8 2.1A6 6 0 0 1 3 17.3 8.5 8.5 0 0 0 16.1 11c0-.2 0-.4-.1-.6A6 6 0 0 0 18 8Z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>

        <div className="footer-col">
          <h4>QR Code</h4>
          <div className="qr-box">
            <div className="qr-placeholder">QR</div>
          </div>
          <p className="qr-text">Scan to visit our website</p>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <strong>ASIDUO ENTERPRISES</strong>
            <span className="muted">(A GROUP COMPANY)</span>
            <div className="contact-row">
              <svg className="footer-icon" viewBox="0 0 24 24">
                <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <p>
                D-105, 1st Main Road, D Block, Anna Nagar East, Chennai - 600102,
                Tamil Nadu, India
              </p>
            </div>
            <div className="contact-row">
              <svg className="footer-icon" viewBox="0 0 24 24">
                <path d="M4 6c3 6 8 11 14 14l2-2c-1.5-1-3-1.2-4.5-.5-1.7-1-3.3-2.6-4.3-4.3.7-1.5.5-3-0.5-4.5L4 6Z" />
              </svg>
              <p>+91 944 500 8731 / +91 944 528 2765</p>
            </div>
            <div className="contact-row">
              <svg className="footer-icon" viewBox="0 0 24 24">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <p>sales@asiduoindia.com</p>
            </div>
            <button className="btn btn-primary footer-cta">Contact Now</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Asiduo Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
