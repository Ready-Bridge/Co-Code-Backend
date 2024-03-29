const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.controller");

router.get("", challengeController.challengePing);
router.get("/records", challengeController.challengePing);
router.post("/solve", challengeController.challengePing);
router.get("/rank", challengeController.challengePing);

module.exports = router;
