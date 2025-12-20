import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

        {/* =================== SERVICES =================== */}
        <h2 className="section-title" data-aos="fade-up">Our Services</h2>
        <p className="section-text" data-aos="fade-up" data-aos-delay="150">
          We provide complete construction material supply and roofing solutions for residential, commercial, and industrial projects.
          Our services include the supply of roofing sheets, pipes, rods, cement, and other essential construction materials, ensuring quality and reliability.
          In addition, we offer professional roofing services using Tata roofing sheets, delivering durable, weather-resistant, and well-finished roofing systems.
          From material supply to installation, our team ensures proper workmanship and timely project completion.
        </p>

        <br /><br />

    {/* =================== PRODUCTS =================== */}
<div className="section-title" data-aos="fade-up">
<Products />
</div>
        <br /><br />

        {/* =================== CONTACT =================== */}
        <h2 className="section-title" data-aos="fade-up">Contact Us</h2>
        <p className="section-text" data-aos="fade-up" data-aos-delay="150">
          {/* You can keep your existing contact content or form here */}
        <section className="contact-cta">
  <div className="cta-content">
    <h2>Let’s Build Something Strong Together</h2>
    <p>
      Have questions about our products or need expert guidance?
      Our team is ready to help you.
    </p>


<Link to="/contact" className="cta-link">
 <button className="cta-btn"
 > Contact Us</button>
</Link>
  </div>
</section>


        </p>

      </div>
    </div>
  );
}
