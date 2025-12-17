import React, { useState, useEffect } from "react";

export default function Header({ setRoute }) {
  const [open, setOpen] = useState(false);

  const goTo = (page) => {
    setRoute(page);
    setOpen(false);
  };

  return (
    <header className="header">
      <h2 className="logo">ShreeSaiTraders</h2>

      {/* Desktop Menu */}
      <nav className="nav-desktop">
        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("about")}>About</button>
        <button onClick={() => goTo("products")}>Products</button>
        <button onClick={() => goTo("brands")}>Brands</button>
        <button onClick={() => goTo("contact")}>Contact</button>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="nav-mobile">
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("about")}>About</button>
          <button onClick={() => goTo("products")}>Products</button>
          <button onClick={() => goTo("brands")}>Brands</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}
