const errorHandler = (err, req, res, next) => {
	res.status(err.statusCode).json({
		success: false,
		error: err.message || "server error",
	});
};

module.exports = errorHandler;
