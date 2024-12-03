const { Ticket } = require("../db");


const createTickets = async (título, descripción, estado, categoría, date) => {
  //  typescript
  // interface TicketParams {
  //   título: string;
  //   descripción: string;
  //   estado: string;
  //   categoría: string;
  //   date: Date;
  // }

  // Definimos la función utilizando el tipo
  // const createTickets = async ({
  //   título,
  //   descripción,
  //   estado,
  //   categoría,
  //   date,
  // }: TicketParams): Promise<typeof Ticket> => {
  //   const newTicket = await Ticket.create({
  //     título,
  //     descripción,
  //     estado,
  //     categoría,
  //     date,
  //   });

  //   return newTicket;
  // };

  // JavaScript 
  const newTicket = await Ticket.create({
    título,
    descripción,
    estado,
    categoría,
    date,
  });

  return newTicket;
};

module.exports = {
  createTickets
};