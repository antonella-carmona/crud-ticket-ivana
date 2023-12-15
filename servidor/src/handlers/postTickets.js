const {createTickets} = require("../controllers/createTickets");

// recibimos info por body para crear
const postTickets = async (req, res) => {
  try {
    const {
      título,
      descripción,
      estado,
      categoría,
      date
    } = req.body;

    const response = await createTickets(
      título,
      descripción,
      estado,
      categoría,
      date
    );
    console.log("APAPAPAPA->", response)
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postTickets,
};
