import React from "react";
import { Helmet } from "react-helmet";
import "../styles/styles.css";

export default function About() {
  return (
    <div className="about-page">

      {/* ✅ SEO META (ADDED – CONTENT NOT TOUCHED) */}
      <Helmet>
        <title>About Shree Sai Traders | Construction Materials Supplier</title>
        <meta
          name="description"
          content="Shree Sai Traders is a trusted supplier of construction materials including cement, steel, pipes, sheets and roofing solutions, serving residential and commercial projects."
        />
      </Helmet>

      {/* HEADER SECTION */}
      <section className="about-hero fade-slide">
        <h1>About ShreeSaiTraders</h1>
        <br />
        <p>
          We are a trusted supplier of premium construction materials, delivering quality,
          reliability, and unmatched customer service for all residential and commercial projects.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="about-content fade-slide fade-delay-1">
        <h2 className="section-heading">Our Story</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Reliable Service</h3>
            <p>
              ShreeSaiTraders has been supplying construction materials for years with
              consistent quality and professional support.
            </p>
          </div>

          <div className="about-card">
            <h3>Large Product Range</h3>
            <p>
              From steel, cement, pipes, and sheets to roofing solutions, we supply everything
              needed for complete building projects.
            </p>
          </div>

          <div className="about-card">
            <h3>Trusted by Contractors</h3>
            <p>
              Our materials are used by builders, engineers, and contractors across Tamil Nadu
              for all types of construction.
            </p>
          </div>
        </div>
      </section>

      <br />
      <br />

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2 className="section-heading">What We Do</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Supply High-Quality Materials</h3>
            <p>
              We provide top-grade steel, cement, roofing sheets, and pipes with guaranteed durability.
            </p>
          </div>

          <div className="about-card">
            <h3>Fast Delivery</h3>
            <p>
              Your materials are delivered on time with an efficient and organized logistics system.
            </p>
          </div>

          <div className="about-card">
            <h3>Project Support</h3>
            <p>
              Our team guides you to choose the right materials based on your project needs.
            </p>
          </div>
        </div>
      </section>

      <br />
      <br />

      {/* OUR VALUES */}
      <section className="about-section">
        <h2 className="section-heading">Our Values</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Quality First</h3>
            <p>We partner only with trusted brands to ensure long-lasting materials.</p>
          </div>

          <div className="about-card">
            <h3>Customer Satisfaction</h3>
            <p>We focus on transparency, honesty and timely service for every client.</p>
          </div>

          <div className="about-card">
            <h3>Commitment to Growth</h3>
            <p>We continuously expand our product range to serve the construction industry better.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
