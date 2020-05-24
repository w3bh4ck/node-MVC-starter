const express = require("express");
const { check } = require("express-validator");
const authControllers = require("../../controllers/auth-controllers/auth.controller");

const router = express.Router();

router.post("/login", authControllers.login);

router.post(
	"/signup",
	[check("email").trim().isEmail(), check("password").trim().isLength({ min: 6 })],
	authControllers.signup
);

module.exports = router;
