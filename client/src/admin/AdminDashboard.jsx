import React, { useEffect, useState } from "react";
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

  const addProduct = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    try {
      await api.post("/api/products", productForm);
      setProductForm(emptyProduct);
      setStatus({ type: "success", message: "Product added." });
      loadData();
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Unable to add product.",
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

  const logout = () => {
    localStorage.removeItem("admin_token");
    setAuthToken(null);
    window.dispatchEvent(new Event("auth-change"));
    navigate("/admin");
  };

  return (
    <main className="page admin-page">
      <section className="page-hero admin-hero">
        <div>
          <p className="eyebrow">Admin Panel</p>
          <h1>Dashboard</h1>
        </div>
        <button className="btn btn-ghost" onClick={logout}>
          Logout
        </button>
      </section>

      <section className="section admin-grid">
        <div className="admin-card">
          <h2>Add Product</h2>
          <form className="admin-form" onSubmit={addProduct}>
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
            <button className="btn btn-primary" type="submit">
              Save Product
            </button>
          </form>
        </div>

        <div className="admin-card">
          <h2>Products</h2>
          <div className="admin-list">
            {products.map((item) => (
              <div key={item._id} className="admin-list-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.category}</p>
                </div>
                <button
                  className="btn btn-ghost"
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>
              </div>
            ))}
            {!products.length && <p>No products yet.</p>}
          </div>
        </div>

        <div className="admin-card admin-full">
          <h2>Enquiries</h2>
          <div className="admin-list">
            {enquiries.map((item) => (
              <div key={item._id} className="admin-list-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.email}</p>
                  <p>{item.message}</p>
                </div>
                <span className="tag">{item.subject || "General"}</span>
              </div>
            ))}
            {!enquiries.length && <p>No enquiries yet.</p>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
