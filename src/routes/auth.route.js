const express = require("express");
const router = express.Router();
const authController = require(`../controllers/auth.controller`);


router.post("/login", authController);
router.get("/logout", authController);
router.post("/join", authController);

module.exports = router;