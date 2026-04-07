import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineDocument,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCalendarDays,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { setAuthToken } from "../services/api.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("admin_token"))
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const searchInputRef = useRef(null);

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nextSearch = params.get("search") || "";
    setSearchTerm(nextSearch);
    setSearchOpen(Boolean(nextSearch));
  }, [location.search]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleLogin = () => {
    setOpen(false);
    navigate("/admin");
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();

    if (!query) {
      setSearchOpen(false);
      navigate("/clients");
      return;
    }

    navigate(`/clients?search=${encodeURIComponent(query)}`);
  };

  const handleSearchToggle = () => {
    if (searchOpen && !searchTerm.trim()) {
      setSearchOpen(false);
      navigate("/clients");
      return;
    }

    setSearchOpen(true);
  };

  const handleSearchBlur = () => {
    if (!searchTerm.trim()) {
      setSearchOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setAuthToken(null);
    setIsLoggedIn(false);
    setOpen(false);
    navigate("/");
  };

  const handleMobileToggle = () => setMobileOpen((p) => !p);
  const handleMobileClose = () => setMobileOpen(false);
  const languageOptions = [
    "English (USA)",
    "English (India)",
    "Italian",
    "Spanish",
    "German",
  ];

  return (
    <header className={`nav${hasScrolled ? " nav-scrolled" : ""}`}>
      <div className="logo">Asiduo Enterprises</div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {t.nav.home}
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {t.nav.clients}
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {t.nav.services}
        </NavLink>
        <div className="nav-dropdown">
          <button className="nav-dropbtn" type="button">
            {t.nav.company}
            <span className="nav-caret" aria-hidden="true" />
          </button>
          <div className="nav-dropmenu">
            <NavLink to="/about" className="nav-dropitem">
              <span className="nav-dropicon" aria-hidden="true">
                <HiOutlineDocument />
              </span>
              <div>
                <strong>{t.nav.about}</strong>
                <span>{t.nav.aboutDesc}</span>
              </div>
            </NavLink>
            <NavLink to="/testimonials" className="nav-dropitem">
              <span className="nav-dropicon" aria-hidden="true">
                <HiOutlineChatBubbleLeftRight />
              </span>
              <div>
                <strong>{t.nav.testimonials}</strong>
                <span>{t.nav.testimonialsDesc}</span>
              </div>
            </NavLink>
            <NavLink to="/news" className="nav-dropitem">
              <span className="nav-dropicon" aria-hidden="true">
                <HiOutlineCalendarDays />
              </span>
              <div>
                <strong>{t.nav.news}</strong>
                <span>{t.nav.newsDesc}</span>
              </div>
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {t.nav.projects}
        </NavLink>
        <NavLink
          to="/careers"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {t.nav.career}
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {t.nav.admin}
          </NavLink>
        )}
      </nav>
      <div className="nav-actions">
        <form
          className={`nav-search${searchOpen ? " is-open" : ""}`}
          onSubmit={handleSearchSubmit}
        >
          <label className="sr-only" htmlFor="navbar-search">
            {t.nav.searchLabel}
          </label>
          <button
            className="nav-search-toggle"
            type="button"
            onClick={handleSearchToggle}
            aria-label={t.nav.searchLabel}
            aria-expanded={searchOpen}
            aria-controls="navbar-search"
          >
            <HiOutlineMagnifyingGlass aria-hidden="true" />
          </button>
          {searchOpen && (
            <div className="nav-search-panel">
              <input
                ref={searchInputRef}
                id="navbar-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onBlur={handleSearchBlur}
                placeholder={t.nav.searchPlaceholder}
                aria-label={t.nav.searchLabel}
              />
            </div>
          )}
        </form>
        <div className="nav-language">
          <label className="sr-only" htmlFor="language-select">
            {t.nav.selectLanguage}
          </label>
          <select
            id="language-select"
            className="language-select"
            value={language}
            onChange={handleLanguageChange}
            aria-label={t.nav.selectLanguage}
          >
            <option>English (USA)</option>
            <option>English (India)</option>
            <option>Italian</option>
            <option>Spanish</option>
            <option>German</option>
          </select>
        </div>
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
                  {t.nav.logout}
                </button>
              ) : (
                <button type="button" onClick={handleLogin}>
                  {t.nav.login}
                </button>
              )}
            </div>
          )}
        </div>
        <button
          className="nav-hamburger"
          type="button"
          onClick={handleMobileToggle}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile-drawer"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
        <NavLink className="btn btn-primary nav-desktop-cta" to="/contact">
          {t.nav.contactUs}
        </NavLink>
      </div>
      {mobileOpen && (
        <>
          <div
            className="nav-mobile-backdrop"
            onClick={handleMobileClose}
            aria-hidden="true"
          />
          <nav
            id="nav-mobile-drawer"
            className="nav-mobile-drawer"
            aria-label="Mobile navigation"
          >
            <NavLink to="/" end className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.home}</NavLink>
            <NavLink to="/clients" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.clients}</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.services}</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.about}</NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.testimonials}</NavLink>
            <NavLink to="/news" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.news}</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.projects}</NavLink>
            <NavLink to="/careers" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.career}</NavLink>
            {isLoggedIn && (
              <NavLink to="/admin/dashboard" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={handleMobileClose}>{t.nav.admin}</NavLink>
            )}
            <div className="nav-mobile-divider" />
            <div className="nav-mobile-actions">
              <div className="nav-mobile-language-grid" role="group" aria-label={t.nav.selectLanguage}>
                {languageOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`nav-mobile-language-btn${language === option ? " active" : ""}`}
                    onClick={() => setLanguage(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <NavLink className="btn btn-primary" to="/contact" onClick={handleMobileClose}>
                {t.nav.contactUs}
              </NavLink>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
