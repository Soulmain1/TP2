import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <h1>Presentación Grupal</h1>
      <nav>
        <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Inicio</Link>
        <Link to="/nosotros" style={{ color: "#fff", marginRight: "1rem" }}>Nosotros</Link>
        <Link to="/login" style={{ color: "#fff" }}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
