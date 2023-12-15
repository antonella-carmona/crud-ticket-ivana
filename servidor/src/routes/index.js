const { Router } = require("express");

const { getTickets } = require("../handlers/getTickets");

const router = Router();

router.get("/tickets", getTickets);


module.exports = router;