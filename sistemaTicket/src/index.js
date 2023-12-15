//Conectar Redux con tu Aplicación React:
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./App";
import axios from "axios"

// ----------------------------------------
//Al establecer axios.defaults.baseURL, todas las solicitudes que realices con Axios utilizarán esta URL como base
// axios.defaults.baseURL = "https://ivana.ispbrain.io";
// ----------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
