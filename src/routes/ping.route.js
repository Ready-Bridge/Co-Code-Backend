const express = require("express");
const router = express.Router();
const pingController = require("../controllers/ping.controller");

router.get("/", pingController.ping);

module.exports = router;
