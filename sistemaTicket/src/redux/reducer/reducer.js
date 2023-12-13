import {GETALLTICKETS, GETBYID, POSTTICKETS} from "../actionsTypes/index";

//arrays para reservar los stados globales
let inicialState = {
  copyAlltickets: [], //--> copia para que no se pisen
  allTickes: [], // --> trae todos los tickets
  tickesById: [], //--> trae tickets por id
  myPostTickets: [], //--> tickets creados aca
};

const rootReducer= (state= inicialState, action) =>{
    switch (action.type) {
      case GETALLTICKETS:
        return {
          ...state,
          allTickes: action.payload,
          copyAlltickets: action.payload,
        };
      case GETBYID:
        return {
          ...state,
          tickesById: action.payload,
        };
      case POSTTICKETS:
        return { ...state, allTickes: [...state.allTickes, action.payload] };

      default:
        return {...state};
    }
}

export default rootReducer;