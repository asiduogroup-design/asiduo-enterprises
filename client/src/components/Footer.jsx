import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Asiduo Enterprises</h3>
        <p>
          Calibration and metrology services for manufacturers across India.
        </p>
      </div>
      <div className="footer-links">
        <NavLink to="/about">Company</NavLink>
        <NavLink to="/services">Metrology</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div>
        <p>© 2026 Asiduo Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
