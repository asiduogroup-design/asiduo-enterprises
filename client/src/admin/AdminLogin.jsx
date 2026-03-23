import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../services/api.js";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    try {
      const res = await api.post("/api/auth/login", form);
      const token = res.data.token;
      localStorage.setItem("admin_token", token);
      setAuthToken(token);
      window.dispatchEvent(new Event("auth-change"));
      navigate("/admin/dashboard");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Login failed. Check credentials.";
      setStatus({ type: "error", message: msg });
    }
  };

  return (
    <main className="admin-login-shell">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <p className="eyebrow">Admin</p>
          <h1>Sign in</h1>
          <p>Authorized team members only.</p>
        </div>
        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Admin email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {status.message && (
            <p className={`status ${status.type}`}>{status.message}</p>
          )}
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
