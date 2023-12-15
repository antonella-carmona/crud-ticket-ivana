const { Ticket } = require("../db");


const createTickets = async (título, descripción, estado, categoría, date) => {
     console.log("Datos recibidos del controllers:", {
       título,
       descripción,
       estado,
       categoría,
       date,
     });
    const newTicket = await Ticket.create({
      título,
      descripción,
      estado,
      categoría,
      date,
    });
 console.log("Respuesta de createTickets:", newTicket);
  return newTicket
    
};

module.exports = {
  createTickets
};