import React from "react";

export default function Cement() {
  const items = [
    { name: "Dalmia Cement", image: "/assets/products/cement/dalmia.jpg" },
    { name: "Chettinad Cement", image: "/assets/products/cement/chettinad.jpg" },
    { name: "Ramco Cement", image: "/assets/products/cement/ramco.jpg" }
  ];

  return (
    <section className="container brands-grid">
      <h2 className="section-title">Cement Brands</h2>

      <div className="brands-list">
        {items.map((item, index) => (
          <div className="brand-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
