import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { setAuthToken } from "../services/api.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("admin_token"))
  );

  useEffect(() => {
    const handler = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("admin_token")));
    };
    const authHandler = () => handler();
    window.addEventListener("storage", handler);
    window.addEventListener("auth-change", authHandler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("auth-change", authHandler);
    };
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleLogin = () => {
    setOpen(false);
    navigate("/admin");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setAuthToken(null);
    setIsLoggedIn(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="nav">
      <div className="logo">Asiduo Enterprises</div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Products
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Metrology
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Clients
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Company
        </NavLink>
        <NavLink
          to="/careers"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Career
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Admin
          </NavLink>
        )}
      </nav>
      <div className="nav-actions">
        <div className="nav-user" title="Account">
          <button
            className="user-button"
            type="button"
            onClick={handleToggle}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <svg
              className="user-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5.5 19.5c1.8-3.4 11.2-3.4 13 0" />
            </svg>
          </button>
          {open && (
            <div className="user-menu" role="menu">
              {isLoggedIn ? (
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
              )}
            </div>
          )}
        </div>
        <NavLink className="btn btn-primary" to="/contact">
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
