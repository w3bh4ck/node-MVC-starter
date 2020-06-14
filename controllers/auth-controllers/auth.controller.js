const { validationResult } = require("express-validator");

exports.login = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json(errors);
	} else {
		return res.status(200).json({ ...req.body, message: "login successful" });
	}
};

exports.signup = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json(errors);
	}
	res.status(200).json({ ...req.body, Message: "sign up successfull" });
};
