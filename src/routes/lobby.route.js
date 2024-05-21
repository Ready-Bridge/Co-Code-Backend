const express = require("express");
const router = express.Router();
const lobbyController = require("../controllers/lobby.controller");

router.get("/profile", lobbyController.profile);
router.post("/profileEdit", lobbyController.profileEdit);
router.get("/search", lobbyController.search);
router.get("/shop", lobbyController.shop);
router.post("/buy", lobbyController.buy);
router.get("/rank", lobbyController.rank);
router.post("/qa", lobbyController.lobbyPing);
router.get("/qa", lobbyController.lobbyPing);
router.get("/search", lobbyController.lobbyPing);


module.exports = router;
