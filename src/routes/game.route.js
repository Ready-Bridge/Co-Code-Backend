const gameController = require("../controllers/game.controller");
const express = require("express");
const router = express.Router();

router.post("/submit", gameController.submit);
router.get("/detail", gameController.detail);
router.post("/tutorial", gameController.tutorial);

module.exports = router;
