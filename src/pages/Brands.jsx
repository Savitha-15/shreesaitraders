import React from "react";
import "../styles/styles.css";

export default function Brands() {
  const brandCategories = [
    { category: "Steel", brands: ["JSW", "Aishwaryam", "Kaaveri"] },
    { category: "Pipe", brands: ["MS Square Pipe", "MS Round Pipe", "GP Pipe", "Angle", "Patta"] },
    { category: "Sheet", brands: ["UPVC","Puffing Sheet","GC Sheet","GP Sheet","CR Sheet","Cement Sheet","Waterproof Cement Sheet","Cooling Sheet"] },
    { category: "Cement", brands: ["Dalmia", "Chettinad", "Ramco"] },
    { category: "Cutter", brands: ["Water Cutter", "Water Tank"] }
  ];

  return (
    <div className="page-container fade-slide">
      <h1 className="section-title fade-slide fade-delay-1">
        Our Brands
      </h1>

      <div className="brands-wrapper">
        {brandCategories.map((item, index) => (
          <div
            className="brand-category-box fade-slide"
            style={{ animationDelay: `${index * 0.2}s` }}
            key={index}
          >
            <h2 className="brand-category-title">{item.category}</h2>

            <div className="brand-items-grid">
              {item.brands.map((brand, i) => (
                <div
                  className="brand-item fade-slide"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  key={i}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
