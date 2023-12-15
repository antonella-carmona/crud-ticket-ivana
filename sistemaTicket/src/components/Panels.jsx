import React from "react";
import { Link } from "react-router-dom";

const Panels = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-4 mt-5 px-8 pt-0">
      <legend className="sr-only">Delivery</legend>

      <div>
        <input
          type="radio"
          name="DeliveryOption"
          value="DeliveryStandard"
          id="DeliveryStandard"
          className="peer hidden"
        />
        <Link to="/estados y categorias">
          <label
            htmlFor="DeliveryStandard"
            className="block cursor-pointer rounded-lg border border-gray-400 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-500 hover:bg-blue-500 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 "
          >
            <h1 className="text-gray-700">Estados y Categorías</h1>
          </label>
        </Link>
      </div>
      {/* ----------------------------------------------------------------- */}
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
          className="block cursor-pointer rounded-lg border border-gray-400 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-500 hover:bg-blue-500 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 "
        >
          <h1 className="text-gray-700">Valores por defecto p/Calendario</h1>
        </label>
      </div>
    </fieldset>
  );
};

export default Panels;