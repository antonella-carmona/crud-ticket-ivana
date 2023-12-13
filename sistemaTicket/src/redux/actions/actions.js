import axios from "axios";
import { GETALLTICKETS, GETBYID, POSTTICKETS } from "../actionsTypes/index";

// Función para obtener el token de autorización
const getAuthToken = async () => {
  const credentials = {
    username: "ivana",
    password: "ivana123",
  };
  console.log("Credenciales:", credentials);
  const authResponse = await axios.post(
    "https://ivana.ispbrain.io/api/v2/auth",
    credentials
  );
  return authResponse.data.token;
};



// Función para realizar solicitudes con autorización
const authorizedRequest = async (url, method = "get", data = null) => {
  const token = await getAuthToken();
  console.log("Token:", token);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const axiosConfig = { url, method, headers, data };

  return axios(axiosConfig);
};
// ------------------------------------------------------------------------------------------
// poner try cach a todas las actions para ver los errrores
export const getAlltickets = ()=>{
  return async (dispatch)=> {
    try{
    const response = await authorizedRequest("/tickets");
    return dispatch({
      type: GETALLTICKETS,
      payload: response.data,
    });
  } catch(error){
    console.error("Error fetching tickets:", error.response.data);
  }
  }
}
// _________________________________________________
export const getById = (id) => {
  return async (dispatch) => {
    try {
       const response = await authorizedRequest(`/tickets/${id}`);
       return dispatch({
         type: GETBYID,
         payload: response.data,
       });
    } catch (error) {
      console.error(`Error fetching ticket with ID ${id}:`, error);
    }
   
  };
};
// __________________________________________________________-
export const postTickets = (ticket) => {
  return async (dispatch) => {
    try {
      const response = await authorizedRequest("/tickets", "post", ticket);
      return dispatch({
        type: POSTTICKETS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error posting ticket:", error);
    }
    
  };
};

