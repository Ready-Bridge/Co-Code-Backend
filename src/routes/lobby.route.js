const express = require("express");
const router = express.Router();
const lobbyController = require("../controllers/lobby.controller");

router.get("/profile", lobbyController);
router.post("/qa", lobbyController);
router.get("/qa", lobbyController);
router.get("/search", lobbyController);

module.exports = router;