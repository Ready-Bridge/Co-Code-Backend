const express = require("express");
const router = express.Router();
const lobbyController = require("../controllers/lobby.controller");

router.get("/profile", lobbyController.profile);
router.post("/qa", lobbyController.lobbyPing);
router.get("/qa", lobbyController.lobbyPing);
router.get("/search", lobbyController.lobbyPing);

module.exports = router;
