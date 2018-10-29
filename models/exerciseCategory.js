var mongoose = require("mongoose");
var Exercise = require("./exercise");
var exerciseCategorySchema = new mongoose.Schema({
	name: String,
	image: String,
	exerciseList: {
		type: Array,
		"default": [Exercise]
	}
});

module.exports = mongoose.model("ExerciseCategory", exerciseCategorySchema);
