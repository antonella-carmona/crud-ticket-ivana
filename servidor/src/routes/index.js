const { Router } = require("express");

const { getTickets } = require("../handlers/getTickets");
const {postTickets} = require("../handlers/postTickets")

const router = Router();

router.get("/tickets", getTickets);


router.post("/tickets", postTickets);

module.exports = router;