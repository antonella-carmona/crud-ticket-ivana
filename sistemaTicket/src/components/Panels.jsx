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