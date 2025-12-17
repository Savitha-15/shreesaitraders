import React, { useState, useEffect } from "react";

// Slides
const slides = [
  { image: "/assets/slide1.jpg", quote: "Building quality that lasts a lifetime." },
  { image: "/assets/slide2.jpg", quote: "Your trusted partner in construction materials." },
  { image: "/assets/slide3.jpg", quote: "Strength, durability, and reliability." },
  { image: "/assets/slide4.jpg", quote: "Materials that shape your dreams." }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* 🔥 CAROUSEL */}
      <div className="carousel" data-aos="fade-in">
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
        />
        <div className="carousel-quote" data-aos="fade-up">
          {slides[current].quote}
        </div>
      </div>

      <div className="page-container">

        {/* ABOUT */}
        <h1 className="section-title" data-aos="fade-up">
          Welcome to ShreeSaiTraders
        </h1>

        <p className="section-text" data-aos="fade-up" data-aos-delay="150">
          ShreeSaiTraders is a reliable supplier of high-quality construction materials,
          including steel, pipes, sheets, cement, roofing solutions, and more.
          With years of experience and customer trust, we offer fast delivery
          and complete project support.
        </p>

        <br /><br />

        {/* WHERE WE WORK */}
        <h2 className="section-title" data-aos="fade-up">
          Where We Work
        </h2>

        <div className="work-section">

          <img
            src="/assets/world-map.jpg"
            alt="World Map"
            className="work-map"
            data-aos="zoom-in"
          />

          <div className="work-stats">

            <div className="work-box" data-aos="fade-up">
              <h3>100%</h3>
              <p>Employee Owned</p>
            </div>

            <div className="work-box" data-aos="fade-up" data-aos-delay="150">
              <h3>1,000+</h3>
              <p>Active Projects</p>
            </div>

            <div className="work-box" data-aos="fade-up" data-aos-delay="300">
              <a
                href="https://maps.app.goo.gl/uunBFHCUwj1VD9JAA?g_st=awb"
                target="_blank"
                rel="noreferrer"
              >
                <button>View Our Office</button>
              </a>
            </div>

          </div>
        </div>

        <br /><br />

        {/* WHAT WE BUILD */}
        <h2 className="section-title" data-aos="fade-up">
          What We Build
        </h2>

        <div className="build-list">

          {[
            ["Cement", "High-strength cement for durable construction."],
            ["Steel", "Premium TMT bars and structural steel."],
            ["Roofing", "Durable roofing sheets with long life."],
            ["Pipes", "Reliable PVC, GI and MS pipes."],
            ["Sheets", "High-grade metal and fiber sheets."]
          ].map((item, index) => (
            <div
              key={index}
              className="build-box"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
