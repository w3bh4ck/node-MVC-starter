const express = require("express");
const { check } = require("express-validator");
const authController = require("../../controllers/auth-controllers/auth.controller");

const router = express.Router();

router.post(
	"/login",
	[check("email").trim().isEmail(), check("password").trim().isLength({ min: 6 })],
	authController.login
);

router.post(
	"/signup",
	[check("email").trim().isEmail(), check("password").trim().isLength({ min: 6 })],
	authController.signup
);

module.exports = router;
