import React from "react";

export default function Header({ setRoute }) {
  return (
    <header style={{
      padding: "15px 20px",
      background: "#222",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>ShreeSaiTraders</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => setRoute("home")}>Home</button>
        <button onClick={() => setRoute("about")}>About</button>
        <button onClick={() => setRoute("products")}>Products</button>
        <button onClick={() => setRoute("brands")}>Brands</button>
        <button onClick={() => setRoute("contact")}>Contact</button>
      </nav>
    </header>
  );
}
