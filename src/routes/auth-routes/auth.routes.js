const express = require("express");
const { check } = require("express-validator");
const authController = require("../../controllers/auth-controllers/auth.controller");

const router = express.Router();

router.post(
	"/login",
	[check("email").isEmail(), check("password").isLength({ min: 5 })],
	authController.login
);

router.post("/signup", authController.signup);

module.exports = router;
