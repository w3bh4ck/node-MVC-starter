const { validationResult } = require("express-validator");
exports.login = (req, res, next) => {
	res.status(200).json(req.body);
};

exports.signup = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json(errors);
	}
	res.status(200).json({ ...req.body, Message: "sign up successfull" });
};
