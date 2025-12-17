import React, { useState } from "react";
import './styles/styles.css';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Brands from "./pages/Brands.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <>
      <Header setRoute={setRoute} />

      {route === "home" && <Home />}
      {route === "about" && <About />}
      {route === "products" && <Products />}
      {route === "brands" && <Brands />}
      {route === "services" && <Services />}
      {route === "contact" && <Contact />}

      <Footer />
    </>
  );
}
