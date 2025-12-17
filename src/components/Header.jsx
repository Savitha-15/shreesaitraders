import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Install with: npm install react-icons

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
    <header style={{
      padding: "15px 20px",
      background: "#222",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative"
    }}>
      <h2>ShreeSaiTraders</h2>

      {/* Desktop Menu */}
      <nav className="desktop-menu" style={{ display: "flex", gap: "20px" }}>
        {menuItems.map(item => (
          <button key={item.route} onClick={() => setRoute(item.route)}>
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger Icon */}
      <div 
        className="mobile-menu-icon" 
        style={{ display: "none", cursor: "pointer" }} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiMenu size={28} />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu" style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "absolute",
          top: "60px",
          right: "20px",
          background: "#333",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)"
        }}>
          {menuItems.map(item => (
            <button 
              key={item.route} 
              onClick={() => {
                setRoute(item.route);
                setMenuOpen(false); // close menu on click
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      )}

      {/* Inline Media Query for Mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .mobile-menu-icon {
              display: block !important;
            }
          }
        `}
      </style>
    </header>
  );
}
