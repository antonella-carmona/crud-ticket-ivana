//prueba 3________________________________________________

import React, { useState } from "react";
import NavBar from "./NavBar";
import {Link} from "react-router-dom"
import remove from "../assets/remove.png"


const NewTicket = () => {
   const [formData, setFormData] = useState({
     titulo: "",
     descripción: "",
     // Otros campos del formulario
   });
//_____________________INPUT_________________________________________
   const handleChange = (evento)=>{
setFormData({...formData, [evento.target.id]:evento.target.value})
   }
//____________________BOTON___________________________________________
   const handleSubmit= async (evento)=>{
evento.preventDefault();
   }
   //_________________________________________________________
  return (
    <>
      <NavBar />

      <section className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="rounded-lg bg-white p-8 shadow-lg w-full sm:max-w-xl
        relative">
          <Link to="/">
            <div className="absolute top-0 left-0 p-1">
              <button
                id="work"
                type="button"
                name="Hover"
                className=" inline-block bg-white font-bold"
              >
                <img src={remove} alt="quitar" />
              </button>
            </div>
          </Link>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ------------------------------------- */}
            <div>
              <label className="sr-only" htmlFor="titulo">
                Titulo
              </label>
              <input
                className="w-full rounded-lg border border-black p-3 text-sm"
                placeholder="Titulo"
                type="text"
                id="titulo"
                value={formData.titulo}
                onChange={handleChange}
              />
            </div>

            {/* --------------------------------------------- */}
            <div>
              <label className="sr-only" htmlFor="descripcion">
                Descripción
              </label>
              <textarea
                className="w-full rounded-lg border border-black p-3 text-sm"
                placeholder="Descripcion"
                rows="8"
                id="descripción"
                value={formData.descripción}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* ------------------------------------ */}
            <div>
              <label class="sr-only" htmlFor="estado">
                Estado
              </label>
              <input
                class="w-full rounded-lg border border-black p-3 text-sm"
                placeholder="Estado"
                type="text"
                id="estado"
              />
            </div>
            {/* ---------------------------------------- */}
            <div>
              <label class="sr-only" htmlFor="categoria">
                Categoría
              </label>
              <input
                class="w-full rounded-lg border border-black p-3 text-sm"
                placeholder="Categoría"
                type="text"
                id="categoría"
              />
            </div>
            {/* ----------------------------------------- */}
            <div>
              <label class="sr-only" htmlFor="fecha">
                Fecha programada
              </label>
              <input
                class="w-full rounded-lg border border-black p-3 text-sm "
                placeholder="Fecha programada"
                type="date"
                id="date"
              />
            </div>
            {/* ---------------------------------------- */}

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
              {/* ------------------- */}
              <div>
                <input
                  class="peer sr-only"
                  id="option1"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option1"
                  class="block w-full rounded-lg border border-gray-700 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-blue-900 peer-checked:text-white bg-blue-500"
                  tabindex="0"
                >
                  <span class="text-sm"> Seleccionar todo </span>
                </label>
              </div>
              {/* -------------------- */}
              <div>
                <input
                  class="peer sr-only"
                  id="option2"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option2"
                  class="block w-full rounded-lg border border-gray-700 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-red-900 peer-checked:text-white bg-red-500"
                  tabindex="0"
                >
                  <span class="text-sm"> Limpiar selección</span>
                </label>
              </div>
              {/* -------------------- */}
            </div>
            {/* ------------------------------ */}
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto border border-black"
              >
                +Agregar
              </button>
              {/* ---------------------- */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewTicket;
