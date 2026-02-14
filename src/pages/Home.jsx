import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Products from "./Products";

// Slides
const slides = [
  { image: "/assets/slide1.jpg", quote: "Building quality that lasts a lifetime." },
  { image: "/assets/slide2.jpeg", quote: "Your trusted partner in construction materials." },
  { image: "/assets/slide3.jpeg", quote: "Strength, durability, and reliability." },
  { image: "/assets/slide4.jpeg", quote: "Materials that shape your dreams." }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* ✅ SEO META */}
      <Helmet>
        <title>Shree Sai Traders | Construction & Building Materials Supplier</title>
        <meta
          name="description"
          content="Shree Sai Traders is a trusted supplier of construction and building materials including cement, steel, pipes, sheets and roofing solutions in Tamil Nadu."
        />
      </Helmet>

      {/* 🔥 MAIN H1 (VERY IMPORTANT FOR SEO) */}
      <h1 className="sr-only">
        Shree Sai Traders – Trusted Construction Materials Supplier
      </h1>

      {/* 🔥 CAROUSEL */}
      <div className="carousel" data-aos="fade-in">
        <img
          src={slides[current].image}
          alt="Construction materials supplied by Shree Sai Traders"
          className="carousel-image"
        />
        <div className="carousel-quote" data-aos="fade-up">
          {slides[current].quote}
        </div>
      </div>

      <div className="page-container">

        {/* ABOUT */}
        <h2 className="welcome-title" data-aos="fade-up">
          Welcome to Shree Sai Traders
        </h2>

        <p className="section-text" data-aos="fade-up">
          Shree Sai Traders is a reliable supplier of high-quality construction materials,
          including steel, pipes, sheets, cement, and roofing solutions.
          We serve residential, commercial, and industrial construction projects
          with timely delivery and trusted support.
        </p>

        <center>
          <a
            href="https://wa.me/919976943630"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-btn">
              <img
                src="/assets/whatsapp.gif"
                alt="Contact Shree Sai Traders on WhatsApp"
                className="whatsapp-icon"
              />
              WhatsApp
            </button>
          </a>
        </center>

        {/* WHERE WE WORK */}
        <h2 className="section-title">Where We Work</h2>

        <div className="work-section">
          <div className="work-stats">

            <div className="work-box">
              <h3>100%</h3>
              <p>Employee Owned</p>
            </div>

            <div className="work-box">
              <h3>1,000+</h3>
              <p>Active Projects</p>
            </div>

            <div className="work-box">
              <a
                href="https://maps.app.goo.gl/uunBFHCUwj1VD9JAA"
                target="_blank"
                rel="noreferrer"
              >
                <button>View Our Office</button>
              </a>
            </div>

          </div>
        </div>

        {/* SERVICES */}
        <h2 className="section-title">Our Services</h2>
        <p className="section-text">
          We provide complete construction material supply and professional roofing solutions.
          Our materials include cement, steel rods, pipes, sheets, and Tata roofing products,
          ensuring durability, strength, and long-lasting performance.
        </p>

        {/* PRODUCTS */}
        <Products />

        {/* CONTACT CTA */}
        <section className="contact-cta">
          <h2>Contact Shree Sai Traders</h2>
          <p>
            Looking for quality construction materials?
            Our team is ready to guide you.
          </p>

          <Link to="/contact">
            <button className="cta-btn">Contact Us</button>
          </Link>
        </section>

      </div>
    </div>
  );
}
