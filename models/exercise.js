var mongoose = require("mongoose");

var exerciseSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	notes: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Note"
      }
   ]
});

module.exports = mongoose.model("Exercise", exerciseSchema);
