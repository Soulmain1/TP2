import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const integrantes = [
  {
    nombre: "Juan Ignacio",
    apellido: "Medina",
    legajo: "61993",
    github: "https://github.com/Soulmain1",
    foto: "https://i.pinimg.com/736x/3a/e9/13/3ae913d2143c423e8bc05c49d4186578.jpg"
  },
  {
    nombre: "Lisandro Quiroga",
    apellido: "Castro",
    legajo: "62318",
    github: "https://github.com/lisandro01",
    foto: "https://i.pinimg.com/736x/e9/e9/d0/e9e9d087275362255ceb3f45d5c2d807.jpg"
  },
  {
    nombre: "Augusto Nicolas",
    apellido: "Tula",
    legajo: "61995",
    github: "https://github.com/augustotula",
    foto: "https://i.pinimg.com/736x/0c/ef/2e/0cef2ecb12dadce39ebd03fc2aff1385.jpg"
  },
  {
    nombre: "Nadia Antonella",
    apellido: "Ruiz",
    legajo: "61996",
    github: "https://github.com/nadiaruiz",
    foto: "https://i.pinimg.com/736x/51/52/37/515237b47d0cd2e707b1a8b5317d9a52.jpg"
  },
  {
    nombre: "Rodrigo",
    apellido: "Gonzalez Chavez",
    legajo: "61073",
    github: "https://github.com/rodrigogc",
    foto: "https://i.pinimg.com/736x/67/e9/d9/67e9d9055bae41b8d3131e6189f48864.jpg"
  },
];

function NosotrosPages() {
  return (
    <>
      <Header />
      <Main integrantes={integrantes} />
      <Footer />
    </>
  );
}

export default NosotrosPages;
