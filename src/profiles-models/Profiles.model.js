const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minlength: [6, "Password must not be less than 6 characters"],
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true,
	},
	photo: {
		type: String,
	},
	slug: String,
	phone: {
		type: Number,
		maxlength: [20, "phone number must not be more than 20 characters"],
		trim: true,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.export = mongoose.model("Users", UserSchema);
