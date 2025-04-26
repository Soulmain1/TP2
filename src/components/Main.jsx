import React, { useState } from "react";
import Nosotros from "./Nosotros";

function Main({ integrantes }) {
  const [lista, setLista] = useState(integrantes);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    github: "",
    foto: ""
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevo({ ...nuevo, [name]: value });
  };

  const agregarIntegrante = (e) => {
    e.preventDefault();
    setLista([...lista, nuevo]);
    setNuevo({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });
  };

  return (
    <main>
      <h2>Agregar nuevo integrante</h2>
      <form onSubmit={agregarIntegrante}>
        <input type="text" name="nombre" value={nuevo.nombre} onChange={manejarCambio} placeholder="Nombre" />
        <input type="text" name="apellido" value={nuevo.apellido} onChange={manejarCambio} placeholder="Apellido" />
        <input type="text" name="legajo" value={nuevo.legajo} onChange={manejarCambio} placeholder="Legajo" />
        <input type="text" name="github" value={nuevo.github} onChange={manejarCambio} placeholder="GitHub" />
        <input type="text" name="foto" value={nuevo.foto} onChange={manejarCambio} placeholder="URL Foto" />
        <button type="submit">Agregar</button>
      </form>
      <hr />
      <Nosotros integrantes={lista} />
    </main>
  );
}

export default Main;
