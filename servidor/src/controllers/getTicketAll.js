const { Ticket } = require("../db");
const { Op } = require("sequelize");


const getTicketAll = async ()=>{
    const response= await Ticket.findAll();
    return response
}

module.exports={getTicketAll};
