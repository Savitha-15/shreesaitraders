import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/styles.css";

export default function Products() {
  const products = [
    {
      name: "Cement",
      desc: "Top-grade cement for strong foundations and durable structures.",
      img: "/assets/product-cement.jpeg",
      slug: "cement",
    },
    {
      name: "Steel",
      desc: "High-quality TMT bars and steel rods for all construction works.",
      img: "/assets/product-steel.jpg",
      slug: "steel",
    },
    {
      name: "Sheet",
      desc: "Metal, fiber and polycarbonate sheets for roofing solutions.",
      img: "/assets/product-sheet.jpeg",
      slug: "sheet",
    },
    {
      name: "Cutter",
      desc: "High-performance cutting tools for precision construction work.",
      img: "/assets/product-cutter.jpeg",
      slug: "cutter",
    },
    {
      name: "Roof",
      desc: "Weatherproof roofing sheets with long-lasting durability.",
      img: "/assets/product-roof.jpg",
      slug: "roof",
    },
    {
      name: "Pipe",
      desc: "PVC, GI and MS pipes suitable for plumbing and industrial use.",
      img: "/assets/product-pipe.jpg",
      slug: "pipe",
    },
  ];

  return (
    <section className="products-wrapper">
      <motion.h2
        className="products-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h2>

      <div className="products-grid">
        {products.map((p, i) => (
          <motion.div
            className="product-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -12 }}
          >
            <div className="product-image">
              <img src={p.img} alt={p.name} />
            </div>

            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              <div className="product-actions">
                <Link to={`/brands/${p.slug}`} className="btn-outline">
                  View Brands
                </Link>

                <Link to="/contactform" className="btn-primary">
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
