const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.controller");

router.get("", challengeController);
router.get("/records", challengeController);
router.post("/solve", challengeController);
router.get("/rank", challengeController);

module.exports = router;