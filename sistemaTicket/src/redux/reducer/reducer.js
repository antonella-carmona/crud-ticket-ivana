import {
  GETALLTICKETS,
  GETBYID,
  POSTTICKETS,
  SEARCHNAME,
  DELETE_TICKETS
} from "../actionsTypes/index";


//arrays para reservar los stados globales
let inicialState = {
  copyAlltickets: [], //--> copia para que no se pisen
  allTickes: [], // --> trae todos los tickets
  tickesById: [{}], //--> trae tickets por id

};

const rootReducer= (state= inicialState, action) =>{
    switch (action.type) {
      //_______________________________________________________
      //ANDA OK
      case GETALLTICKETS:
        return {
          ...state,
          allTickes:  action.payload,
          // copyAlltickets: action.payload,
        };
        //______________________________________________________
        // NO PROBADO
      case GETBYID:
        return {
          ...state,
          tickesById: action.payload,
        };
        //_________________________________________________________
        //ANDA OK
      case POSTTICKETS:
        const newTicket = action.payload;
         console.log("entro nuevo ticket reducer:", newTicket);
          return {
            ...state,
            allTickes: [...state.allTickes, newTicket],
           
          };
    //______________________________________________________________
    case SEARCHNAME: return {
      ...state,
      allTickes: action.payload,
    };
    // _________________________________________________________
case DELETE_TICKETS: return {
  ...state,
  allTickes: action.payload,
};

    //______________________________________________________________
      default:
        return { ...state };









    }
}

export default rootReducer;