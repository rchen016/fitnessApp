var mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    rep: String,
	set: String,
	weight: String,
    author: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
	date: String
});

module.exports = mongoose.model("Note", noteSchema);
