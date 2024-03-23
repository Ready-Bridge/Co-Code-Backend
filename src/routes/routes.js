const express = require("express");
const router = express.Router();

router.use("/api", require("./api.route"));

module.exports = router;
