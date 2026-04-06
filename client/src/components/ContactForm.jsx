import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const formContent = {
  "English (USA)": {
    placeholders: {
      name: "Full Name",
      company: "Company / Organisation",
      email: "you@company.com",
      phone: "+91 XXXXX XXXXX",
      interest: "Select a service...",
      subject: "Project scope / location / timeline",
      message:
        "Describe your project - scope, location, timeline, and compliance requirements (OISD, PESO, NFPA etc.)...",
    },
    submit: "Send Enquiry",
    error: "Unable to send enquiry right now.",
  },
  "English (India)": {
    placeholders: {
      name: "Full Name",
      company: "Company / Organisation",
      email: "you@company.com",
      phone: "+91 XXXXX XXXXX",
      interest: "Select a service...",
      subject: "Project scope / location / timeline",
      message:
        "Describe your project - scope, location, timeline, and compliance requirements (OISD, PESO, NFPA etc.)...",
    },
    submit: "Send Enquiry",
    error: "Unable to send enquiry right now.",
  },
  Italian: {
    placeholders: {
      name: "Full Name",
      company: "Company / Organisation",
      email: "you@company.com",
      phone: "+91 XXXXX XXXXX",
      interest: "Select a service...",
      subject: "Project scope / location / timeline",
      message:
        "Describe your project - scope, location, timeline, and compliance requirements (OISD, PESO, NFPA etc.)...",
    },
    submit: "Invia richiesta",
    error: "Impossibile inviare la richiesta in questo momento.",
  },
  Spanish: {
    placeholders: {
      name: "Full Name",
      company: "Company / Organisation",
      email: "you@company.com",
      phone: "+91 XXXXX XXXXX",
      interest: "Select a service...",
      subject: "Project scope / location / timeline",
      message:
        "Describe your project - scope, location, timeline, and compliance requirements (OISD, PESO, NFPA etc.)...",
    },
    submit: "Enviar consulta",
    error: "No se puede enviar la consulta en este momento.",
  },
  German: {
    placeholders: {
      name: "Full Name",
      company: "Company / Organisation",
      email: "you@company.com",
      phone: "+91 XXXXX XXXXX",
      interest: "Select a service...",
      subject: "Project scope / location / timeline",
      message:
        "Describe your project - scope, location, timeline, and compliance requirements (OISD, PESO, NFPA etc.)...",
    },
    submit: "Anfrage senden",
    error: "Anfrage kann derzeit nicht gesendet werden.",
  },
};

const ContactForm = () => {
  const { language } = useLanguage();
  const copy = formContent[language] || formContent["English (USA)"];
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const interest = searchParams.get("interest") || "";
    const subject = searchParams.get("subject") || "";
    const message = searchParams.get("message") || "";

    if (!interest && !subject && !message) {
      return;
    }

    setForm((prev) => ({
      ...prev,
      interest: interest || prev.interest,
      subject: subject || prev.subject,
      message: message || prev.message,
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    try {
      const res = await api.post("/api/contact", form);
      setStatus({ type: "success", message: res.data.message });
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      const msg = err.response?.data?.message || copy.error;
      setStatus({ type: "error", message: msg });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid">
        <input
          name="name"
          placeholder={copy.placeholders.name}
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder={copy.placeholders.company}
          value={form.company}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder={copy.placeholders.email}
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder={copy.placeholders.phone}
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <input
        name="interest"
        placeholder={copy.placeholders.interest}
        value={form.interest}
        onChange={handleChange}
        required
      />
      <input
        name="subject"
        placeholder={copy.placeholders.subject}
        value={form.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={copy.placeholders.message}
        rows="5"
        value={form.message}
        onChange={handleChange}
      />
      {status.message && (
        <p className={`status ${status.type}`}>{status.message}</p>
      )}
      <button className="btn btn-primary" type="submit">
        {copy.submit}
      </button>
    </form>
  );
};

export default ContactForm;
