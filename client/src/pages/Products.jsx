import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import api from "../services/api.js";

const fallbackProducts = [
  {
    _id: "1",
    name: "Digital Height Gauge",
    description: "High-accuracy gauges with SPC-ready output and granite base.",
    category: "Dimensional",
  },
  {
    _id: "2",
    name: "Surface Roughness Tester",
    description: "Portable, shop-floor roughness measurement with profile export.",
    category: "Surface",
  },
  {
    _id: "3",
    name: "Torque Wrench Calibrator",
    description: "Bench-top calibration system with traceable load cells.",
    category: "Torque",
  },
];

const Products = () => {
  const [products, setProducts] = useState(fallbackProducts);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/api/products");
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        }
      } catch (err) {
        // Keep fallback products if API is not available yet
      }
    };
    load();
  }, []);

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Products</p>
        <h1>Precision instruments and accessories</h1>
        <p>
          We supply calibrated equipment and accessories to help you maintain
          measurement accuracy across your shop floor.
        </p>
      </section>
      <section className="section products-preview">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id || product.name}
              name={product.name}
              description={product.description}
              category={product.category || "General"}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
