const gameController = require("../controllers/game.controller");
const express = require("express");
const router = express.Router();

router.post("/problemSolve", gameController.gamePing);
router.get("/realCode", gameController.gamePing);

module.exports = router;
