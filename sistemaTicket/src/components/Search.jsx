import { useState } from "react";
import Actualizar from "../assets/circular.svg";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAlltickets, getAllByName } from "../redux/actions/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log("search input", search)

  //________________________________________________
  const handleName = (event) => {
    setSearch(event.target.value.toLowerCase());

    if (!event.target.value) {
      dispatch(getAlltickets());
    }
  };
  //________________________________________________
  //_________FN BOTON________________
  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(getAllByName(search));
  };
  //____________________________________

  return (
    <form
      className="flex items-center justify-between mt-7 px-8 pt-0"
      onSubmit={handlerSubmit}
    >
      {/* Estados a la izquierda */}
      <div className="flex items-center  ">
        <h1 className="text-gray-700 font-bold text-xl"></h1>
      </div>

      {/* Buscar y Input*/}
      <div className="flex items-center ">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Buscar
        </label>

        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="submit"
        >
          Buscar{" "}
        </button>

        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-80 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Buscar por título"
          value={search}
          onChange={handleName}
        />
      </div>
      {/* ------------------------------------------------------------------------------------- */}
      {/* Agregar y Circ a la derecha */}
      <div className="flex items-center ">
        <button
          type="button"
          className=" mr-4 p-2.5 text-lg font-medium text-white bg-blue-700 rounded-e-lg rounded-l-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          title="Agregar un nuevo estado"
          // onClick={() => setOpen(true)}
        >
          <Link to="/agregar"> +Agregar</Link>
        </button>
        {/* {open && <NewTicket />} */}

        <button
          type="button"
          className="p-2.5 text-lg font-medium text-white bg-green-700 rounded-e-lg rounded-l-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          title="Actualizar contenido de la tabla"
        >
          <img
            src={Actualizar}
            alt="Actualizar"
            className="w-7 h-7 cursor-pointer focus:right-2 text-white"
          />
        </button>
      </div>
    </form>
  );
};

export default Search;







