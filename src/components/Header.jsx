import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Presentación Grupal</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/nosotros" className="nav-link">Nosotros</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
