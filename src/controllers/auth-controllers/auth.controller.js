// external
const { validationResult } = require("express-validator");
// internal
const Users = require("../../models/users-models/Users.model");

/**
 * @description: This should handle login actions
 * @route: GET /api/v1/auth/login
 * @access public
 */
exports.login = async (req, res, next) => {
	const { email, password } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const user = await Users.findOne({ email }).select("+password");
	if (!user) {
		return res.status(404).json({ message: "Invalid credentials" });
	}

	// check password match
	const ismatch = await user.matchPassword(password);
	if (!ismatch) {
		return res.status(400).json({ message: "Invalid credentials" });
	}
	const token = user.getSignedJwtToken();
	return res.status(200).json({ success: true, token });
};

/**
 * @description: This should handle signup actions
 *  @route: GET /api/v1/auth/signup
 * @access public
 */
exports.signup = async (req, res, next) => {
	const { firstName, lastName, email, password } = req.body;
	const user = await Users.create({
		firstName,
		lastName,
		email,
		password,
	});
	// create token
	const token = user.getSignedJwtToken();
	res.status(200).json({ success: true, message: "Signup successful", token });
	return user;
};
