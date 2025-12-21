import React from "react";

export default function Sheet() {
  const items = [
    { name: "UPVC Sheet", image: "/assets/products/sheet/upvc.jpg" },
    { name: "Puffing Sheet", image: "/assets/products/sheet/puffing.jpg" },
    { name: "GC Sheet", image: "/assets/products/sheet/gc.jpg" },
    { name: "GP Sheet", image: "/assets/products/sheet/gp.jpg" },
    { name: "CR Sheet", image: "/assets/products/sheet/cr.jpg" },
    { name: "Cement Sheet", image: "/assets/products/sheet/cement.jpg" },
    { name: "Waterproof Sheet", image: "/assets/products/sheet/waterproof.jpg" },
    { name: "Cooling Sheet", image: "/assets/products/sheet/cooling.jpg" }
  ];

  return (
    <section className="container brands-grid">
      <h2 className="section-title">Sheet Products</h2>

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

