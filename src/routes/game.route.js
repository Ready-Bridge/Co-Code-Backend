const gameController = require("../controllers/game.controller");
const express = require("express");
const router = express.Router();

router.post("/problemSolve", gameController);
router.get("/realCode", gameController);

module.exports = router;