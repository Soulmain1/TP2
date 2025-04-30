import "../styles/Nosotros.css";
import React from "react";

function Nosotros({ integrantes }) {
  return (
    <section>
      <h2>Integrantes del Grupo</h2>
      {integrantes.map((persona, index) => (
        <div key={index} className="nosotros-class1">
          <img src={persona.foto} alt={persona.nombre} width="150" />
          <h3>{persona.nombre} {persona.apellido}</h3>
          <p>Legajo: {persona.legajo}</p>
          <a href={persona.github} target="_blank" rel="noopener noreferrer">Ver GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Nosotros;
