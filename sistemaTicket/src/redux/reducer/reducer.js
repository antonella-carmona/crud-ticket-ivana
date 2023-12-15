import {GETALLTICKETS, GETBYID, POSTTICKETS} from "../actionsTypes/index";


//arrays para reservar los stados globales
let inicialState = {
  copyAlltickets: [], //--> copia para que no se pisen
  allTickes: [], // --> trae todos los tickets//Usa los datos del archivo JSON como estado inicial
  tickesById: [{}], //--> trae tickets por id
  myPostTickets: [], //--> tickets creados aca
};

const rootReducer= (state= inicialState, action) =>{
    switch (action.type) {
      case GETALLTICKETS:
        return {
          ...state,
          allTickes:  action.payload,
          copyAlltickets: action.payload,
        };
      case GETBYID:
        return {
          ...state,
          tickesById: action.payload,
        };
        //_________________________________________________________
      case POSTTICKETS:
        const newTicket = action.payload;
         console.log("entro nuevo ticket:", newTicket);
          return {
            ...state,
            allTickes: [...state.allTickes, newTicket],
            myPostTickets: [...state.myPostTickets, newTicket],
          };
    //______________________________________________________________
      default:
        return { ...state };









    }
}

export default rootReducer;