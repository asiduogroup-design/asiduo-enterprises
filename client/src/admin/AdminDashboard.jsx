import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../services/api.js";

const emptyProduct = {
  name: "",
  description: "",
  category: "",
  image: "",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [productForm, setProductForm] = useState(emptyProduct);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingId, setEditingId] = useState(null);

  const loadData = async () => {
    try {
      const [prodRes, enqRes] = await Promise.all([
        api.get("/api/products"),
        api.get("/api/enquiries"),
      ]);
      setProducts(prodRes.data || []);
      setEnquiries(enqRes.data || []);
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

  const handleChange = (e) => {
    setProductForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setProductForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    try {
      if (editingId) {
        await api.put(`/api/products/${editingId}`, productForm);
        setStatus({ type: "success", message: "Product updated." });
      } else {
        await api.post("/api/products", productForm);
        setStatus({ type: "success", message: "Product added." });
      }
      setProductForm(emptyProduct);
      setEditingId(null);
      loadData();
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Unable to save product.",
      });
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/api/products/${id}`);
      loadData();
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Unable to delete product.",
      });
    }
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setProductForm({
      name: item.name || "",
      description: item.description || "",
      category: item.category || "",
      image: item.image || "",
    });
    setActiveTab("products");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setProductForm(emptyProduct);
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setAuthToken(null);
    window.dispatchEvent(new Event("auth-change"));
    navigate("/admin");
  };

  const stats = useMemo(
    () => [
      { label: "Total Products", value: products.length },
      { label: "Total Enquiries", value: enquiries.length },
    ],
    [products, enquiries]
  );

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
            className={activeTab === "products" ? "active" : ""}
            onClick={() => setActiveTab("products")}
          >
            Products
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
              {activeTab === "products" && "Manage Products"}
              {activeTab === "enquiries" && "Enquiries"}
            </h1>
          </div>
          <div className="admin-quick">
            <button
              className="btn btn-ghost"
              onClick={() => setActiveTab("products")}
            >
              Add Product
            </button>
            <button
              className="btn btn-primary"
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
                    onClick={() => setActiveTab("products")}
                  >
                    Add a product
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

        {activeTab === "products" && (
          <div className="admin-products">
            <div className="admin-card">
              <h2>{editingId ? "Edit Product" : "Add Product"}</h2>
              <form className="admin-form" onSubmit={saveProduct}>
                <input
                  name="name"
                  placeholder="Product name"
                  value={productForm.name}
                  onChange={handleChange}
                  required
                />
                <input
                  name="category"
                  placeholder="Category"
                  value={productForm.category}
                  onChange={handleChange}
                  required
                />
                <input
                  name="image"
                  placeholder="Image URL (optional)"
                  value={productForm.image}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  rows="4"
                  value={productForm.description}
                  onChange={handleChange}
                  required
                />
                {status.message && (
                  <p className={`status ${status.type}`}>{status.message}</p>
                )}
                <div className="admin-form-actions">
                  <button className="btn btn-primary" type="submit">
                    {editingId ? "Update Product" : "Save Product"}
                  </button>
                  {editingId && (
                    <button
                      className="btn btn-ghost"
                      type="button"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="admin-card">
              <h2>Products</h2>
              <div className="admin-table">
                <div className="admin-table-row admin-table-head">
                  <span>Name</span>
                  <span>Category</span>
                  <span>Actions</span>
                </div>
                {products.map((item) => (
                  <div key={item._id} className="admin-table-row">
                    <span>{item.name}</span>
                    <span>{item.category}</span>
                    <div className="admin-table-actions">
                      <button
                        className="btn btn-ghost"
                        onClick={() => startEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-ghost"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                {!products.length && (
                  <div className="admin-table-row empty">No products yet.</div>
                )}
              </div>
            </div>
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
