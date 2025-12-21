import React from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import ContactForm from "./pages/ContactForm";

import Steel from "./pages/steel";
import Cement from "./pages/cement";
import Cutter from "./pages/cutter";
import Sheet from "./pages/sheet";
import Pipe from "./pages/pipe";

import BrandDetails from "./pages/BrandDetails";


export default function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactform" element={<ContactForm/>} />

        <Route path="/steel" element={<Steel />} />
<Route path="/cement" element={<Cement />} />
<Route path="/cutter" element={<Cutter />} />
<Route path="/sheet" element={<Sheet />} />
<Route path="/pipe" element={<Pipe />} />

<Route path="/brands/:slug" element={<BrandDetails />} />

      </Routes>
    </>
  );
}
