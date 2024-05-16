const gameController = require("../controllers/game.controller");
const express = require("express");
const router = express.Router();

router.post("/submit", gameController.submit);
router.get("/realCode", gameController.gamePing);

module.exports = router;
