const express = require("express");
const router = express.Router();

router.use("/ping", require("./ping.route"));

module.exports = router;
