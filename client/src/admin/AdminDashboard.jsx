import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../services/api.js";

const TAGS = ["Electrical", "Fire Safety", "Civil", "HVAC/AC", "Petroleum"];

const emptyProject = {
  title: "",
  client: "",
  location: "",
  value: "",
  tags: [],
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [projectStatus, setProjectStatus] = useState({ type: "", message: "" });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingProjectId, setEditingProjectId] = useState(null);

  const loadData = async () => {
    try {
      const [enqRes, projRes] = await Promise.all([
        api.get("/api/enquiries"),
        api.get("/api/projects"),
      ]);
      setEnquiries(enqRes.data || []);
      setProjectsList(projRes.data || []);
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/admin");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin");
      return;
    }
    setAuthToken(token);
    loadData();
  }, [navigate]);

  // ── Project handlers ──────────────────────────────────────────
  const handleProjectChange = (e) => {
    setProjectForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTagToggle = (tag) => {
    setProjectForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const saveProject = async (e) => {
    e.preventDefault();
    setProjectStatus({ type: "", message: "" });
    try {
      if (editingProjectId) {
        await api.put(`/api/projects/${editingProjectId}`, projectForm);
        setProjectStatus({ type: "success", message: "Project updated." });
      } else {
        await api.post("/api/projects", projectForm);
        setProjectStatus({ type: "success", message: "Project added." });
      }
      setProjectForm(emptyProject);
      setEditingProjectId(null);
      setShowProjectForm(false);
      loadData();
    } catch (err) {
      setProjectStatus({
        type: "error",
        message: err.response?.data?.message || "Unable to save project.",
      });
    }
  };

  const deleteProject = async (id) => {
    try {
      await api.delete(`/api/projects/${id}`);
      loadData();
    } catch (err) {
      setProjectStatus({
        type: "error",
        message: err.response?.data?.message || "Unable to delete project.",
      });
    }
  };

  const startEditProject = (item) => {
    setEditingProjectId(item._id);
    setProjectForm({
      title: item.title || "",
      client: item.client || "",
      location: item.location || "",
      value: item.value || "",
      tags: item.tags || [],
    });
    setShowProjectForm(true);
    setActiveTab("projects");
  };

  const cancelEditProject = () => {
    setEditingProjectId(null);
    setProjectForm(emptyProject);
    setProjectStatus({ type: "", message: "" });
    setShowProjectForm(false);
  };

  const openProjectsList = () => {
    setActiveTab("projects");
    setEditingProjectId(null);
    setProjectForm(emptyProject);
    setProjectStatus({ type: "", message: "" });
    setShowProjectForm(false);
    setActiveProjectFilter("All");
  };

  const openProjectForm = () => {
    setActiveTab("projects");
    setEditingProjectId(null);
    setProjectForm(emptyProject);
    setProjectStatus({ type: "", message: "" });
    setShowProjectForm(true);
  };

  // ── Common ────────────────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem("admin_token");
    setAuthToken(null);
    window.dispatchEvent(new Event("auth-change"));
    navigate("/admin");
  };

  const stats = useMemo(
    () => [
      { label: "Total Projects", value: projectsList.length },
      { label: "Total Enquiries", value: enquiries.length },
    ],
    [projectsList, enquiries]
  );

  const projectTagCounts = useMemo(() => {
    const counts = { All: projectsList.length };
    TAGS.forEach((tag) => {
      counts[tag] = projectsList.filter((item) => (item.tags || []).includes(tag)).length;
    });
    return counts;
  }, [projectsList]);

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === "All") {
      return projectsList;
    }
    return projectsList.filter((item) => (item.tags || []).includes(activeProjectFilter));
  }, [projectsList, activeProjectFilter]);

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>Asiduo</span>
          <strong>Admin</strong>
        </div>
        <nav className="admin-nav">
          <button
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={activeTab === "projects" ? "active" : ""}
            onClick={openProjectsList}
          >
            Projects
          </button>
          <button
            className={activeTab === "enquiries" ? "active" : ""}
            onClick={() => setActiveTab("enquiries")}
          >
            Enquiries
          </button>
        </nav>
        <button className="btn btn-ghost admin-logout" onClick={logout}>
          Logout
        </button>
      </aside>

      <section className="admin-main">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Admin Panel</p>
            <h1>
              {activeTab === "dashboard" && "Dashboard"}
              {activeTab === "projects" && "Manage Projects"}
              {activeTab === "enquiries" && "Enquiries"}
            </h1>
          </div>
          <div className="admin-quick">
            <button
              className="btn btn-primary"
              onClick={openProjectsList}
            >
              Manage Projects
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => setActiveTab("enquiries")}
            >
              View Enquiries
            </button>
          </div>
        </header>

        {activeTab === "dashboard" && (
          <div className="admin-dashboard">
            <div className="admin-stats">
              {stats.map((item) => (
                <div key={item.label} className="admin-stat">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="admin-panels">
              <div className="admin-card">
                <h2>Quick Actions</h2>
                <div className="admin-actions">
                  <button
                    className="btn btn-primary"
                    onClick={openProjectForm}
                  >
                    Add a project
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setActiveTab("enquiries")}
                  >
                    Review enquiries
                  </button>
                </div>
              </div>
              <div className="admin-card">
                <h2>Latest Enquiries</h2>
                <div className="admin-list">
                  {enquiries.slice(0, 3).map((item) => (
                    <div key={item._id} className="admin-list-item">
                      <div>
                        <strong>{item.name}</strong>
                        <p>{item.email}</p>
                      </div>
                      <span className="tag">{item.subject || "General"}</span>
                    </div>
                  ))}
                  {!enquiries.length && <p>No enquiries yet.</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="admin-projects">
            {showProjectForm ? (
              <div className="admin-card admin-project-form-card">
                <div className="admin-projects-head">
                  <h2>{editingProjectId ? "Edit Project" : "Add Project"}</h2>
                  <button className="btn btn-ghost" type="button" onClick={openProjectsList}>
                    Back to Projects
                  </button>
                </div>
                <form className="admin-form" onSubmit={saveProject}>
                  <textarea
                    name="title"
                    placeholder="Project title"
                    rows="3"
                    value={projectForm.title}
                    onChange={handleProjectChange}
                    required
                  />
                  <input
                    name="client"
                    placeholder="Client / Organisation"
                    value={projectForm.client}
                    onChange={handleProjectChange}
                    required
                  />
                  <input
                    name="location"
                    placeholder="Location"
                    value={projectForm.location}
                    onChange={handleProjectChange}
                    required
                  />
                  <input
                    name="value"
                    placeholder="Contract value"
                    value={projectForm.value}
                    onChange={handleProjectChange}
                    required
                  />
                  <div className="admin-tag-group">
                    <label className="admin-tag-label">Discipline Tags</label>
                    <div className="admin-tags">
                      {TAGS.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={`admin-tag-btn${projectForm.tags.includes(tag) ? " selected" : ""}`}
                          onClick={() => handleTagToggle(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  {projectStatus.message && (
                    <p className={`status ${projectStatus.type}`}>{projectStatus.message}</p>
                  )}
                  <div className="admin-form-actions">
                    <button className="btn btn-primary" type="submit">
                      {editingProjectId ? "Update Project" : "Save Project"}
                    </button>
                    <button
                      className="btn btn-ghost"
                      type="button"
                      onClick={openProjectsList}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="admin-card">
                <div className="admin-projects-head">
                  <h2>Projects ({filteredProjects.length}/{projectsList.length})</h2>
                  <button className="btn btn-primary" type="button" onClick={openProjectForm}>
                    Add Project
                  </button>
                </div>
                <div className="projects-filter-bar admin-project-counts" aria-label="Project tag counts">
                  <button
                    type="button"
                    className={`projects-filter-btn${activeProjectFilter === "All" ? " active" : ""}`}
                    onClick={() => setActiveProjectFilter("All")}
                  >
                    All
                    <span className="projects-filter-count">{projectTagCounts.All}</span>
                  </button>
                  {TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`projects-filter-btn${activeProjectFilter === tag ? " active" : ""}`}
                      onClick={() => setActiveProjectFilter(tag)}
                    >
                      {tag}
                      <span className="projects-filter-count">{projectTagCounts[tag]}</span>
                    </button>
                  ))}
                </div>
                <div className="admin-table">
                  <div className="admin-table-row admin-table-head">
                    <span>Title</span>
                    <span>Client</span>
                    <span>Value</span>
                    <span>Tags</span>
                    <span>Actions</span>
                  </div>
                  {filteredProjects.map((item) => (
                    <div key={item._id} className="admin-table-row admin-table-row--project">
                      <span className="admin-table-title">{item.title}</span>
                      <span>{item.client}</span>
                      <span className="admin-project-value">{item.value}</span>
                      <div className="admin-project-tags">
                        {(item.tags || []).map((tag) => (
                          <span key={tag} className="admin-project-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="admin-table-actions">
                        <button
                          className="btn btn-ghost"
                          onClick={() => startEditProject(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-ghost"
                          onClick={() => deleteProject(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  {!filteredProjects.length && (
                    <div className="admin-table-row empty">
                      No projects found for this tag.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "enquiries" && (
          <div className="admin-card">
            <h2>Enquiries</h2>
            <div className="enquiry-grid">
              {enquiries.map((item) => (
                <div key={item._id} className="enquiry-card">
                  <div>
                    <span className="enquiry-label">Name</span>
                    <strong>{item.name}</strong>
                  </div>
                  <div>
                    <span className="enquiry-label">Email</span>
                    <p>{item.email}</p>
                  </div>
                  <div>
                    <span className="enquiry-label">Phone</span>
                    <p>{item.phone || "-"}</p>
                  </div>
                  <div>
                    <span className="enquiry-label">Message</span>
                    <p className="admin-message">{item.message || "-"}</p>
                  </div>
                  <a
                    className="btn btn-primary enquiry-reply"
                    href={`mailto:${item.email}?subject=Re:%20Your%20Enquiry`}
                  >
                    Reply
                  </a>
                </div>
              ))}
              {!enquiries.length && <p>No enquiries yet.</p>}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AdminDashboard;
