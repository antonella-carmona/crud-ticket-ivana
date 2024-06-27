const { getSearch } = require("../controllers/getSearch");
const { getTicketAll } = require("../controllers/getTicketAll");

const deleteTicket = async (req, res) => {
  const ticketId = req.params.id; // o req.body.id, dependiendo de cómo envíes el ID

  try {
    const response = await Ticket.destroy({
      where: { id: ticketId },
    });

    if (response) {
      res.status(200).json({ message: "Ticket deleted successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the ticket", error });
  }
};

module.exports = { deleteTicket };
