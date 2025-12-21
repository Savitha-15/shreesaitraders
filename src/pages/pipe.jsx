import React from "react";

export default function Pipe() {
  const items = [
    { name: "MS Square Pipe", image: "/assets/products/pipe/square.jpg" },
    { name: "MS Round Pipe", image: "/assets/products/pipe/round.jpg" },
    { name: "GP Pipe", image: "/assets/products/pipe/gp.jpeg" },
    { name: "Angle", image: "/assets/products/pipe/angle.jpg" },
    { name: "Patta", image: "/assets/products/pipe/patta.jpeg" }
  ];

  return (
    <section className="container brands-grid">
      <h2 className="section-title">Pipe Products</h2>

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
