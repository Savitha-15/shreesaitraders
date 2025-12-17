import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons
import "./Header.css"; // We'll add animation CSS here

export default function Header({ setRoute }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Products", route: "products" },
    { name: "Brands", route: "brands" },
    { name: "Contact", route: "contact" },
  ];

  return (
    <header className="header">
      <h2>ShreeSaiTraders</h2>

      <nav className="desktop-menu">
        {menuItems.map((item) => (
          <button key={item.route} onClick={() => setRoute(item.route)}>
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <button
            key={item.route}
            onClick={() => {
              setRoute(item.route);
              setMenuOpen(false);
            }}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
