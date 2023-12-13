// import React, { useState } from "react";
// import { Link } from "react-router-dom";


// const Container = () => {
//    const [selectedLink, setSelectedLink] = useState(null);

//    const handleMouseEnter = (link) => {
//      setSelectedLink(link);
//    };

//    const handleMouseLeave = () => {
//      setSelectedLink(null);
//    };

//   return (
//     <div className="flex items-center justify-center mt-5 border">
//       <div className="flex flex-row">
//         <div
//           className={`text-2xl mr-20 mb-4 mt-4 ${
//             selectedLink === "#step-status-categorias"
//               ? "text-blue-500 underline"
//               : "text-black"
//           }`}
//         >
//           <Link
//             to="/"
//             onMouseEnter={() => handleMouseEnter("#step-status-categorias")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Estados y Categorías
//           </Link>
//         </div>

//         <div
//           className={`text-2xl mb-4 mt-4 ml-4 ${
//             selectedLink === "#step-calendar"
//               ? "text-blue-500 underline"
//               : "text-black"
//           }`}
//         >
//           <a
//             href="#step-calendar"
//             onMouseEnter={() => handleMouseEnter("#step-calendar")}
//             onMouseLeave={handleMouseLeave}
//           >
//             Valores por defecto p/Calendario
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Container;

//____________________________PROBANDO________________________________________

// import React from "react";


// const Panels = () => {
 

//   return (
//     // <fieldset class="flex flex-wrap gap-3 mt-5 border">
//     <fieldset class="flex items-center justify-center gap-3 mt-5 border">
//       {/* <legend class="sr-only">Color</legend> */}

//       <div className="text-2xl mr-20 mb-4 mt-4 ">
//         <input
//           type="radio"
//           name="ColorOption"
//           value="ColorBlack"
//           id="ColorBlack"
//           class="peer hidden"
//           checked
//         />

//         <label
//           for="ColorBlack"
//           class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
//         >
//           <p class="text-sm font-medium">Estados y Categorías</p>
//         </label>
//       </div>

//       <div className="text-2xl mb-4 mt-4 ml-4">
//         <input
//           type="radio"
//           name="ColorOption"
//           value="ColorRed"
//           id="ColorRed"
//           class="peer hidden"
//         />

//         <label
//           for="ColorRed"
//           class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
//         >
//           <p class="text-sm font-medium">Valores por defecto p/Calendario</p>
//         </label>
//       </div>
//     </fieldset>
//   );
// };

// export default Panels;



//_____________________________________________________________________________

import React from "react";

const Panels = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-4 mt-5 ">
      <legend className="sr-only">Delivery</legend>

      <div>
        <input
          type="radio"
          name="DeliveryOption"
          value="DeliveryStandard"
          id="DeliveryStandard"
          className="peer hidden"
          
        />

        <label
          htmlFor="DeliveryStandard"
          className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 "
        >
          <h1 className="text-gray-700">Estados y Categorías</h1>
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="DeliveryOption"
          value="DeliveryPriority"
          id="DeliveryPriority"
          className="peer hidden"
        />

        <label
          htmlFor="DeliveryPriority"
          className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 "
        >
          <h1 className="text-gray-700">Valores por defecto p/Calendario</h1>
        </label>
      </div>
      
    </fieldset>
  );
};

export default Panels;