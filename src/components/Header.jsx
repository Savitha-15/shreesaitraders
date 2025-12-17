import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ setRoute }) {
  const [open, setOpen] = useState(false);

  const go = (page) => {
    setRoute(page);
    setOpen(false);
  };

  return (
    <header className="header">
      <h2 className="logo">ShreeSaiTraders</h2>

      {/* Desktop menu */}
      <nav className="nav-desktop">
        <button onClick={() => go("home")}>Home</button>
        <button onClick={() => go("about")}>About</button>
        <button onClick={() => go("products")}>Products</button>
        <button onClick={() => go("brands")}>Brands</button>
        <button onClick={() => go("contact")}>Contact</button>
      </nav>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("products")}>Products</button>
          <button onClick={() => go("brands")}>Brands</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}
