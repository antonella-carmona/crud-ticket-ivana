const { getSearch } = require("../controllers/getSearch");
const {getTicketAll} = require("../controllers/getTicketAll")

const getByName = async (req, res) => {
  const { name } = req.query;
  
  try {
  
    if (name) {
      const response = await getSearch(name);
      return res.status(200).json(response);
    } else {
      const secondeResp = await getTicketAll();
      return res.status(200).json(secondeResp);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getByName };
