import React from "react";

const ProductCard = ({ name, description, category }) => {
  return (
    <div className="product-card">
      <div className="product-tag">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="link-btn">Request Quote</button>
    </div>
  );
};

export default ProductCard;
