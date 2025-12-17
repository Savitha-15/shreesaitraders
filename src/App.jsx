import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/styles.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Brands from "./pages/Brands.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [route, setRoute] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [route]);

  return (
    <>
      <Header setRoute={setRoute} />

      {route === "home" && <Home />}
      {route === "about" && <About />}
      {route === "products" && <Products />}
      {route === "brands" && <Brands />}
      {route === "contact" && <Contact />}

      <Footer />
    </>
  );
}
