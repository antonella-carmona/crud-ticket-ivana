import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { getAlltickets } from '../redux/actions/actions';


const Grid = () => {
  const dispatch = useDispatch();
const allTickes = useSelector((state) => state.allTickes);
console.log("Tickets en el Grid del state global reducer:", allTickes);

// useEffect(()=>{
// dispatch(getAlltickets());
// },[dispatch]);
   
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Número de elementos por página
   const [selectedRows, setSelectedRows] = useState([]);
  

  // Calcula el índice inicial y final para la paginación
  const indexOfLastItem = currentPage * itemsPerPage; // 1x4
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //4-4
//   const currentItems = setTasks.slice(indexOfFirstItem, indexOfLastItem);


  // Función para cambiar la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

//____________Controla el checkbox de las filas___________________
const handleCheckboxChange = (index) => {
  // Copia el estado actual de las filas seleccionadas
  const newSelectedRows = [...selectedRows];
  // Verifica si la fila ya está seleccionada
  const isRowSelected = newSelectedRows.includes(index);
  // Actualiza el estado de las filas seleccionadas
  if (isRowSelected) {
    newSelectedRows.splice(newSelectedRows.indexOf(index), 1);
  } else {
    newSelectedRows.push(index);
  }
  setSelectedRows(newSelectedRows);
};
//_________________________________________________________________
 
  return (
    <div className="items-center px-8 pt-0">
      <p>Sin filtros aplicados</p>
      <div className="rounded-lg border border-gray-500 mt-6 items-center ">
        <div className="overflow-x-auto rounded-t-lg items-center">
          {/* tabla */}
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            {/* encabezado */}
            <thead className="ltr:text-left rtl:text-right bg-gray-500 ">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Seleccionar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Id
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Creado
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Título
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Descripción
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Estado
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Categoría
                </th>
              </tr>
            </thead>
            {/* 2da encabezado gris */}
            <thead className="ltr:text-left rtl:text-right bg-gray-500 ">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                  Filtrar
                </th>
              </tr>
            </thead>
            {/* cuerpo del cuadro */}
            <tbody className="divide-y divide-gray-200">
              {allTickes.map((ticket, index) => (
                <tr
                  key={index}
                  className={selectedRows.includes(index) ? "bg-green-500" : ""}
                >
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500"
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                    {ticket.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                   {ticket.date}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                    {ticket.titulo}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                    {ticket.descripción}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                    {ticket.estado}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                    {ticket.categoría}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* PAGINACION */}
        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                  // fill-rule="evenodd"
                  // d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  // clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                  // fill-rule="evenodd"
                  // d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  // clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
        {/* FIN PAGINACION */}
      </div>
    </div>
  );
}

export default Grid
