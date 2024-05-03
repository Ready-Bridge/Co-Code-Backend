const express = require("express");
const router = express.Router();

router.use("/ping", require("./ping.route"));

router.use("/auth", require("./auth.route"));
router.use("/lobby", require("./lobby.route"));
router.use("/challenge", require("./challenge.route"));
router.use("/game", require("./game.route"));

module.exports = router;
