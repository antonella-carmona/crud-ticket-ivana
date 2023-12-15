import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
import {Link} from "react-router-dom"
import remove from "../assets/remove.png"
import {postTickets} from "../redux/actions/actions"
import Modal from "react-modal";

Modal.setAppElement("#root");

const NewTicket = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
   const [formData, setFormData] = useState({
     título: "",
     descripción: "",
     estado: "",
     categoría: "",
     date:"",
     // Otros campos del formulario
   });

  
   const [modalIsOpen, setModalIsOpen] = useState(false);
//_____________________INPUT_________________________________________
   const handleChange = (evento)=>{
setFormData({...formData, [evento.target.id]:evento.target.value})
   }
//____________________BOTON___________________________________________
   const handleSubmit= async (evento)=>{
        evento.preventDefault();
        if(formData){

        try {
          // Si la llamada es exitosa, actualiza el estado local y pasa los datos al estado padre
          dispatch(postTickets({ ...formData }));
          console.log("se despacha en NewTickets-->", {...formData})
          // Limpia el formulario o realiza cualquier otra acción necesaria
          setModalIsOpen(true);
        } catch (error) {
           console.error("Error al agregar tarea:", error);
        }
      }else{
        alert("Faltan algunos campos");
      }
   }
   const closeModal = () => {
   
     setModalIsOpen(false);
     navigate("/"); // Redirige a la página de inicio después de cerrar el modal
   };
   //_________________________________________________________
  return (
    <>
      <NavBar />

      <section className="bg-gray-100 h-screen flex items-center justify-center">
        <div
          className="rounded-lg bg-white p-8 shadow-lg w-full sm:max-w-xl
        relative"
        >
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
                value={formData.título}
                onChange={handleChange}
                required
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
                required
              ></textarea>
            </div>
            {/* ------------------------------------ */}
            <div>
              <label className="sr-only" htmlFor="estado">
                Estado
              </label>
              <input
                className="w-full rounded-lg border border-black p-3 text-sm"
                placeholder="Estado"
                type="text"
                id="estado"
                onChange={handleChange}
                required
                value={formData.estado}
              />
            </div>
            {/* ---------------------------------------- */}
            <div>
              <label className="sr-only" htmlFor="categoria">
                Categoría
              </label>
              <input
                className="w-full rounded-lg border border-black p-3 text-sm"
                placeholder="Categoría"
                type="text"
                id="categoría"
                value={formData.categoría}
                onChange={handleChange}
                required
              />
            </div>
            {/* ----------------------------------------- */}
            <div>
              <label className="sr-only" htmlFor="fecha">
                Fecha programada
              </label>
              <input
                className="w-full rounded-lg border border-black p-3 text-sm "
                placeholder="Fecha programada"
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            {/* ---------------------------------------- */}

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
              {/* ------------------- */}
              <div>
                <input
                  className="peer sr-only"
                  id="option1"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option1"
                  className="block w-full rounded-lg border border-gray-700 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-blue-900 peer-checked:text-white bg-blue-500"
                  tabIndex="0"
                >
                  <span className="text-sm"> Seleccionar todo </span>
                </label>
              </div>
              {/* -------------------- */}
              <div>
                <input
                  className="peer sr-only"
                  id="option2"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option2"
                  className="block w-full rounded-lg border border-gray-700 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-red-900 peer-checked:text-white bg-red-500"
                  tabIndex="0"
                >
                  <span className="text-sm"> Limpiar selección</span>
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
        {/* --------------MODAL-------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Mensaje Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro tras el modal
              zIndex: 1000, // Fondo oscuro tras el modal
            },
            content: {
              width: "auto", // Ancho del modal
              maxWidth: "300px", // Ancho máximo del modal (ajusta según tus necesidades)
              maxHeight: "200px", // Altura máxima del modal (ajusta según tus necesidades)
              margin: "auto", // Centrar el modal horizontalmente
              padding: "20px", // Espaciado interno del contenido del modal
              borderRadius: "8px", // Bordes redondeados
              display: "flex", // Utiliza display flex
              alignItems: "center", // Centra verticalmente el contenido
              flexDirection: "column", // Alinea el contenido verticalmente
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra
            },
          }}
        >
          <h2 className="text-xl font-bold mb-4 pb-5">Ticket agregado</h2>

          <button
            onClick={() => {
              closeModal();
            }}
            className="border px-4 py-2 rounded bg-blue-500 text-white"
          >
            Aceptar
          </button>
        </Modal>
      </section>
    </>
  );
};

export default NewTicket;
