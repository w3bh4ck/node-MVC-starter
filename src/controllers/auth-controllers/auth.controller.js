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
exports.signup = (req, res, next) => {
	return res.status(200).json({ ...req.body, Message: "sign up successfull" });
};
