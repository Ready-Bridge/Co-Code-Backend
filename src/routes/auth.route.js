const express = require("express");
const router = express.Router();
const authController = require(`../controllers/auth.controller`);

router.post("/login", authController.authPing);
router.get("/logout", authController.authPing);
router.post("/join", authController.authPing);

module.exports = router;
