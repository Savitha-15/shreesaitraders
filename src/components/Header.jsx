import React from "react";
import "../styles/styles.css";

export default function About() {
  return (
    <div className="about-page">

      <section className="about-hero" data-aos="fade-down">
        <h1>About ShreeSaiTraders</h1>
        <br />
        <p>
          We are a trusted supplier of premium construction materials, delivering quality,
          reliability, and unmatched customer service for all residential and commercial projects.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-heading" data-aos="fade-up">Our Story</h2>

        <div className="about-grid">
          <div className="about-card" data-aos="zoom-in">
            <h3>Reliable Service</h3>
            <p>
              ShreeSaiTraders has been supplying construction materials for years with
              consistent quality and professional support.
            </p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>Large Product Range</h3>
            <p>
              From steel, cement, pipes, and sheets to roofing solutions, we supply everything
              needed for complete building projects.
            </p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Trusted by Contractors</h3>
            <p>
              Our materials are used by builders, engineers, and contractors across Tamil Nadu
              for all types of construction.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-heading" data-aos="fade-up">What We Do</h2>

        <div className="about-grid">
          <div className="about-card" data-aos="fade-right">
            <h3>Supply High-Quality Materials</h3>
            <p>
              We provide top-grade steel, cement, roofing sheets, and pipes with guaranteed durability.
            </p>
          </div>

          <div className="about-card" data-aos="fade-up">
            <h3>Fast Delivery</h3>
            <p>
              Your materials are delivered on time with an efficient and organized logistics system.
            </p>
          </div>

          <div className="about-card" data-aos="fade-left">
            <h3>Project Support</h3>
            <p>
              Our team guides you to choose the right materials based on your project needs.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-heading" data-aos="fade-up">Our Values</h2>

        <div className="about-grid">
          <div className="about-card" data-aos="flip-left">
            <h3>Quality First</h3>
            <p>We partner only with trusted brands to ensure long-lasting materials.</p>
          </div>

          <div className="about-card" data-aos="flip-up">
            <h3>Customer Satisfaction</h3>
            <p>We focus on transparency, honesty and timely service for every client.</p>
          </div>

          <div className="about-card" data-aos="flip-right">
            <h3>Commitment to Growth</h3>
            <p>We continuously expand our product range to serve the construction industry better.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
