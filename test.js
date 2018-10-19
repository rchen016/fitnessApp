var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
	name: "Norris",
	age: 7,
	temperament: "Evil"
});

// george.save(function(err, cat){
// 	if(err){
// 		console.log("Error");
// 	}
// 	else{
// 		console.log("Saved: ");
// 		console.log(cat);
// 	}
// });

Cat.find({}, function(err,cat){
	if(err){
		console.log("Error!");
		console.log(err);
	}
	else{
		console.log(cat);
	}
});
