const { getTicketAll } = require("../controllers/getTicketAll");

const getTickets = async (req, res) => {
  
  try {
    
      const response = await getTicketAll();
      return res.status(200).json(response);
     
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getTickets };
