const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.controller");

router.get("/", challengeController.list);
router.get("/detail", challengeController.detail);
router.get("/weekly ", challengeController.weekly);
router.post("/solve", challengeController.solve);

module.exports = router;
