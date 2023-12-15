const {getTicketAll} = require("./getTicketAll");
const { Ticket } = require("../db");
const { Op } = require("sequelize");

const getSearch = async (name) => {
  const allTickets = await getTicketAll();
  // Filtrar coincidencias exactas de los resultados de la API
  const FilteredApi = allTickets.filter((ticket) =>
    ticket.título.toLowerCase().includes(name.toLowerCase())
  );

  //______Filtrar coincidencias exactas de la base de datos____________________________
  const filteredBD = await Ticket.findAll({
    where: {
      título: { [Op.iLike]: name },
    },
  });
  const todos = [...FilteredApi, ...filteredBD];
  if (todos.length) {
    return todos;
  } else {
    throw new Error("No se encontro ningun juego con ese nombre");
  }
};

module.exports = {
  getSearch,
};