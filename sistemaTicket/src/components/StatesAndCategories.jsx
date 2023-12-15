import React from 'react'
import Search from './Search';
import NavBar from './NavBar';
import back from "../assets/atras-vaciar.png";
import { Link } from 'react-router-dom';


const StatesAndCategories = () => {
  return (
    <>
      <div>
        <NavBar />
        <Link to="/">
          <img src={back} alt="quitar" className="px-8 pt-0 mb-5" />
        </Link>
        <h1 className=" mt-8 pt-3  items-center text-center align-middle text-xl text-cyan-600 font-medium">
          Estados y Categorías
        </h1>

        <hr className="border-t-2 border-cyan-600" />
        <Search />
        <h1 className=" px-8 pt-0 text-xl font-medium text-gray-800">
          Estados
        </h1>
        <div className="items-center px-8 pt-0">
          <div className="rounded-lg border border-gray-500 mt-6 items-center ">
            <div className="overflow-x-auto rounded-t-lg items-center">
              {/* tabla */}
              <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                {/* encabezado */}
                <thead className="ltr:text-left rtl:text-right bg-gray-500 ">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                      Codigo
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                      Nombre
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                      Por defecto
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
                  </tr>
                </thead>
                {/* cuerpo del cuadro */}
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                      7
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                      nombre
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                      si/no
                    </td>
                  </tr>
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
      </div>
      {/* // _______________________PARTE DOS______________________________________ */}
      <div className="mt-8 pt-8">
        <Search />

        <h1 className=" px-8 pt-0 text-xl font-medium text-gray-800 ">
          Categorías
        </h1>
        <div className="items-center px-8 pt-0 ">
          <div className="rounded-lg border border-gray-500 mt-6 items-center ">
            <div className="overflow-x-auto rounded-t-lg items-center">
              {/* tabla */}
              <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                {/* encabezado */}
                <thead className="ltr:text-left rtl:text-right bg-gray-500 ">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                      Codigo
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                      Nombre
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-400">
                      Por defecto
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
                  </tr>
                </thead>
                {/* cuerpo del cuadro */}
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                      7
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                      nombre
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-400 text-center align-middle">
                      si/no
                    </td>
                  </tr>
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
      </div>
    </>
  );
}

export default StatesAndCategories
