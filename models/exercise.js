var mongoose = require("mongoose");

var exerciseSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	category: String,
	author:{
		id: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "User"
		},
		username: String
	},
	notes: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Note"
      }
   ]
});

module.exports = mongoose.model("Exercise", exerciseSchema);
