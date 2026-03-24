import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import api from "../services/api.js";
import { useLanguage } from "../context/LanguageContext.jsx";

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

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Products",
    title: "Precision instruments and accessories",
    intro:
      "We supply calibrated equipment and accessories to help you maintain measurement accuracy across your shop floor.",
    showing: "Showing results for",
    emptyTitle: "No products found",
    emptyCopy: "Try a different keyword from the search bar.",
  },
  "English (India)": null,
  Italian: {
    eyebrow: "Prodotti",
    title: "Strumenti e accessori di precisione",
    intro:
      "Forniamo attrezzature tarate e accessori per mantenere l'accuratezza delle misurazioni in produzione.",
    showing: "Risultati per",
    emptyTitle: "Nessun prodotto trovato",
    emptyCopy: "Prova una parola chiave diversa dalla barra di ricerca.",
  },
  Spanish: {
    eyebrow: "Productos",
    title: "Instrumentos y accesorios de precision",
    intro:
      "Suministramos equipos calibrados y accesorios para mantener la exactitud de medicion en planta.",
    showing: "Mostrando resultados para",
    emptyTitle: "No se encontraron productos",
    emptyCopy: "Pruebe otra palabra clave desde la barra de busqueda.",
  },
  German: {
    eyebrow: "Produkte",
    title: "Prazisionsinstrumente und Zubehor",
    intro:
      "Wir liefern kalibrierte Gerate und Zubehor, damit Sie die Messgenauigkeit in Ihrer Fertigung sichern konnen.",
    showing: "Ergebnisse fur",
    emptyTitle: "Keine Produkte gefunden",
    emptyCopy: "Versuchen Sie ein anderes Suchwort uber die Suchleiste.",
  },
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];

const Products = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(fallbackProducts);
  const searchTerm = searchParams.get("search")?.trim().toLowerCase() || "";

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

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

    return products.filter((product) =>
      [product.name, product.description, product.category]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(searchTerm))
    );
  }, [products, searchTerm]);

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="blur-up"
          staggerMs={22}
          durationMs={700}
        />
        <p>{copy.intro}</p>
        {searchTerm && (
          <p className="products-search-status">
            {copy.showing} "{searchParams.get("search")}"
          </p>
        )}
      </section>
      <section className="section products-preview">
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id || product.name}
                name={product.name}
                description={product.description}
                category={product.category || "General"}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>{copy.emptyTitle}</h3>
            <p>{copy.emptyCopy}</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Products;
