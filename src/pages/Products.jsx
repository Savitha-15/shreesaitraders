import React from "react";

export default function Products() {
  const products = [
    {
      name: "Steels",
      desc: "High-quality TMT bars and steel rods suitable for all construction work.",
      img: "/assets/product-steel.jpg"
    },
    {
      name: "Pipes",
      desc: "PVC, GI and MS pipes perfect for plumbing and industrial use.",
      img: "/assets/product-pipe.jpg"
    },
    {
      name: "Roofing",
      desc: "Weatherproof roofing sheets with long life and durability.",
      img: "/assets/product-roof.jpg"
    },
    {
      name: "Sheets",
      desc: "Metal, fiber and polycarbonate sheets used for roofing and industrial covering.",
      img: "/assets/product-sheet.jpeg"
    },
    {
      name: "Cements",
      desc: "Top-grade cement for strong foundations and building structures.",
      img: "/assets/product-cement.jpeg"
    },
    {
      name: "Cutter",
      desc: "High-performance cutting tools and machines for precise and smooth construction work.",
      img: "/assets/product-cutter.jpeg"
    }
  ];

  return (
    <div className="page-container">
      <center>
      <h1 className="section-title">Our Products</h1>
</center>
<br></br>
<br></br>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
