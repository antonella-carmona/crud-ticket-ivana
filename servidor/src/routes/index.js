const { Router } = require("express");
const router = Router();

const { getTickets } = require("../handlers/getTickets");
const {postTickets} = require("../handlers/postTickets")
const { getByName } = require("../handlers/getByName")
const { deleteTicket } = require("../handlers/deleteTicket")


router.get("/tickets/search", getByName);

router.get("/tickets", getTickets);

router.post("/tickets", postTickets);

router.delete("/tickets", deleteTicket);

module.exports = router;