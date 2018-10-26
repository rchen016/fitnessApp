var mongoose = require("mongoose");
var Exercise = require("./exercise");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	toggleEditMode: {
		type: Boolean,
		"default": false
	},
	savedExercises: {
		type: Array,
		"default": [Exercise]
	}
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
