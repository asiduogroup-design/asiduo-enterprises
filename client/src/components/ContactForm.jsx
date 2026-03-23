import React, { useState } from "react";
import api from "../services/api.js";

const ContactForm = () => {
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
      const msg =
        err.response?.data?.message || "Unable to send enquiry right now.";
      setStatus({ type: "error", message: msg });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid">
        <input
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <input
        name="interest"
        placeholder="Products/Services looking for"
        value={form.interest}
        onChange={handleChange}
        required
      />
      <input
        name="subject"
        placeholder="Enter your enquiry details"
        value={form.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Tell us about your requirements"
        rows="5"
        value={form.message}
        onChange={handleChange}
      />
      {status.message && (
        <p className={`status ${status.type}`}>{status.message}</p>
      )}
      <button className="btn btn-primary" type="submit">
        Send Enquiry
      </button>
    </form>
  );
};

export default ContactForm;
