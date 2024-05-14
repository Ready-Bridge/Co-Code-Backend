const express = require("express");
const router = express.Router();
const lobbyController = require("../controllers/lobby.controller");
const { middleware } = require("../helpers/auth.helper");

router.get("/profile", middleware, lobbyController.profile);
router.post("/qa", lobbyController.lobbyPing);
router.get("/qa", lobbyController.lobbyPing);
router.get("/search", lobbyController.lobbyPing);

module.exports = router;
