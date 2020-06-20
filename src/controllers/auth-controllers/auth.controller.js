const Users = require("../../models/users-models/Users.model");

/**
 * @description: This should handle login actions
 * @route: GET /api/v1/auth/login
 * @access public
 */
exports.login = (req, res, next) => {
	return res.status(200).json({ ...req.body, message: "login successful" });
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
	res.status(200).json({ success: true, message: "Signup successful" });
	return user;
};
