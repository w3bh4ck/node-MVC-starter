const express = require("express");
const authControllers = require("../../controllers/auth-controllers/auth.controller");

const router = express.Router();

router.post("/login", authControllers.login);

module.exports = router;
