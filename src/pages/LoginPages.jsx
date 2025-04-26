import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPages() {
  return (
    <>
      <Header />
      <main>
        <h2>Iniciar sesión</h2>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default LoginPages;
