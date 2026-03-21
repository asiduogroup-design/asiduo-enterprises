import React from "react";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="link-btn">Learn more</button>
    </div>
  );
};

export default ServiceCard;
