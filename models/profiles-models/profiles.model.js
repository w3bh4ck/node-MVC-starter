const mongoose = require("mongoose");

const ProfileSchema = {
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
	},
};

export const ProfilesModel = mongoose.model("Profiles", ProfileSchema);
