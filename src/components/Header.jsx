import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="header">
      <h2 className="logo">ShreeSaiTraders</h2>

      {/* Desktop Menu */}
      <nav className="nav-desktop">
        <button onClick={() => goTo("/")}>Home</button>
        <button onClick={() => goTo("/about")}>About</button>
        <button onClick={() => goTo("/products")}>Products</button>
        <button onClick={() => goTo("/brands")}>Brands</button>
        <button onClick={() => goTo("/contact")}>Contact</button>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu OPTIONS */}
      {open && (
        <div className="nav-mobile">
          <button onClick={() => goTo("/")}>Home</button>
          <button onClick={() => goTo("/about")}>About</button>
          <button onClick={() => goTo("/products")}>Products</button>
          <button onClick={() => goTo("/brands")}>Brands</button>
          <button onClick={() => goTo("/contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}
