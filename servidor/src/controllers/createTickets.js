const { Ticket } = require("../db");


const createTickets = async (título, descripción, estado, categoría, date) => {
     
    const newTicket = await Ticket.create({
      título,
      descripción,
      estado,
      categoría,
      date,
    });

  return newTicket
    
};

module.exports = {
  createTickets
};