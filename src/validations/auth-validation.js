const { check } = require("express-validator");

exports.validateLogin = () => {
	return [check("email").trim().isEmail(), check("password").trim().isLength({ min: 6 })];
};
