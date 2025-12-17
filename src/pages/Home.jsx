import React, { useState, useEffect } from "react";

// List of images and quotes
const slides = [
  {
    image: "/assets/slide1.jpg",
    quote: "Building quality that lasts a lifetime."
  },
  {
    image: "/assets/slide2.jpg",
    quote: "Your trusted partner in construction materials."
  },
  {
    image: "/assets/slide3.jpg",
    quote: "Strength, durability, and reliability."
  },
  {
    image: "/assets/slide4.jpg",
    quote: "Materials that shape your dreams."
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* Image Carousel */}
      <div className="carousel">
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
        />
        <div className="carousel-quote">
          {slides[current].quote}
        </div>
      </div>
{/* About Section */}
      <div className="page-container">
        <h1 className="section-title">Welcome to ShreeSaiTraders</h1>
        <p className="section-text">
          ShreeSaiTraders is a reliable supplier of high-quality construction materials,
          including steel, pipes, sheets, cement, roofing solutions, and more. With years 
          of experience and customer trust, we offer fast delivery and complete project support.
        </p>
        <br></br>
<br></br>
    <h2 className="section-title">Where We Work</h2>

<div className="work-section">
  <img
    src="/assets/world-map.jpg"
    alt="World Map"
    className="work-map"
  />

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
  href="https://maps.app.goo.gl/uunBFHCUwj1VD9JAA?g_st=awb"
  target="_blank"
  rel="noreferrer"
>
  <button>View Our Office</button>
</a>
    </div>
  </div>
</div>


<br></br>
<br></br>

<h2 className="section-title">What We Build</h2>
        <div className="build-list">
  <div className="build-box">
    <h3>Cement</h3>
    <p>High-strength cement for durable construction.</p>
  </div>

  <div className="build-box">
    <h3>Steel</h3>
    <p>Premium TMT bars and structural steel.</p>
  </div>

  <div className="build-box">
    <h3>Roofing</h3>
    <p>Durable roofing sheets with long life.</p>
  </div>

  <div className="build-box">
    <h3>Pipes</h3>
    <p>Reliable PVC, GI and MS pipes.</p>
  </div>

  <div className="build-box">
    <h3>Sheets</h3>
    <p>High-grade metal and fiber sheets.</p>
  </div>
</div>

      </div>
    </div>
      
  );
}
