import tickets from "../../../tickets.json";//
import {
  GETALLTICKETS,
  GETBYID,
  POSTTICKETS,
  SEARCHNAME,
  DELETE_TICKETS,
} from "../actionsTypes/index";
import axios from "axios";
//______________________________________________________________
// ANDA OK
export const getAlltickets = () => {
  
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/tickets");

      return dispatch({
        type: GETALLTICKETS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching tickets:", error.response.data);
    }
  };
};
//________________________NO FUNCIONA_________________________________________________
export const getById = (id) => {
  return async (dispatch) => {
    try {
      //NO TERMINADO LA FUNCION DE LOGICA
      const ticket = tickets.data.find((ticket) => ticket.id === Number(id));

      return dispatch({
        type: GETBYID,
        payload: ticket,
      });
    } catch (error) {
      console.error(`Error fetching ticket with ID ${id}:`, error);
    }
  };
};
//_____________________________________________________________________________
// ANDA OK
export const postTickets = (ticket) => {

  return async (dispatch) => {
    try {
      const newTicket = await axios.post(
        "http://localhost:3001/tickets",
        ticket
      );
      console.log("llego el posteo?-->", newTicket.data);
      return dispatch({
        type: POSTTICKETS,
        payload: newTicket.data,
      });
    } catch (error) {
      console.error("Error posting ticket:", error);
    }
  };
};

//_______________________________SEARCH____________________________________
// ANDA OK
export const getAllByName = (name) =>{
    return async (dispatch)=> {
        try {
            const response = await axios.get(
              `http://localhost:3001/tickets/search?name=${name}`
            );
            return dispatch({
              type: SEARCHNAME,
              payload: response.data,
            });
        } catch (error) {
            alert(error.response.data.error)
            
        }
        
      }
}
// ________________________________________________________________
export const deleteTickets = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/tickets/${id}`
        );
        return dispatch({
          type: DELETE_TICKETS,
          payload: response.data,
        });
      } catch (error) {
        alert(error.response.data.error);
      }
    };
}