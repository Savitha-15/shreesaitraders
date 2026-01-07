import React from "react";

export default function Steel() {
  const items = [
    { name: "JSW Steel", image: "/assets/products/steel/jsw.jpg" },
    { name: "Aishwaryam Steel", image: "/assets/products/steel/aishwaryam.jpg" },
    { name: "Kaaveri Steel", image: "/assets/products/steel/kaaveri.jpg" },
    { name: "ASR Steel", image: "/assets/products/steel/asr.jpg" },
{ name: "Bull Steel", image: "/assets/products/steel/bull.jpg" },
{ name: "Tata Steel", image: "/assets/products/steel/tata.jpg" },
{ name: "Nadi Steel", image: "/assets/products/steel/nadi.jpg" }
  ];

  return (
    <section className="container brands-grid">
      <h2 className="section-title">Steel Brands</h2>

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
