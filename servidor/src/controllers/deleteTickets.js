const { Ticket } = require("../db");
const { Op } = require("sequelize");

const deleteTickets = async () => {
  const response = await Ticket.destroy({
    where: { id: { [Op.gt]: 0 } },
  })
  return response;
};

module.exports = { deleteTickets };
