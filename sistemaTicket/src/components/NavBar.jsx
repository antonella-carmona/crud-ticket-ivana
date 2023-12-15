import React from "react";
import burgerMenu from "../assets/icon-menu.svg";

const NavBar = () => {
  return (
    <header
      className="flex place-content-between items-center  bg-gray-300 p-4 "
    >
      <div>
        <h1 className="w-35 h-38 font-bold text-2xl ">
          Configuración para tickets
        </h1>
      </div>

      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#">Ayuda</a>
        </li>
        <li>
          <a href="#">Registro de Errores</a>
        </li>
        <li>
          <a href="#">Procesos</a>
        </li>
        <li>
          <a href="#">Login usuario</a>
        </li>
      </ul>

      <img
        className="w-10 h-4 cursor-pointer sm:hidden focus:right-2"
        src={burgerMenu}
        alt="Menu amburguesa"
      />
    </header>
  );
};

export default NavBar; 
