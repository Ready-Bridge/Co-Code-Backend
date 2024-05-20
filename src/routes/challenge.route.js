const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.controller");

router.get("/", challengeController.list);
router.get("/weekly", challengeController.weekly);

module.exports = router;
