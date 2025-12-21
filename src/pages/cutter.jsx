import React from "react";

export default function Cutter() {
  const items = [
    { name: "Water Cutter", image: "/assets/products/cutter/water-cutter.jpg" },
    { name: "Water Tank", image: "/assets/products/cutter/water-tank.jpg" }
  ];

  return (
    <section className="container brands-grid">
      <h2 className="section-title">Cutter Products</h2>

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
