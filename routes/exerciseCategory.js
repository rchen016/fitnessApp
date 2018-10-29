var express = require("express");
var ExerciseCategory = require("../models/exerciseCategory");
var router = express.Router();

router.get("/exerciseCategory", function(req,res){
	ExerciseCategory.find({},function(err,foundList){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		else{
			res.render("exerciseCategory/index",{foundList:foundList});
		}
	});
});


router.get("/exerciseCategory/:id", function(req,res){
	console.log("here");
	ExerciseCategory.findById(req.params.id,function(err,foundList){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		else{
			res.render("exerciseCategory/show",{foundList:foundList});
		}
	});
});

router.get("/exerciseCategory/:categoryid/detail/:exid",function(req,res){
	console.log("EXCat Route");
	Exercise.findById(req.params.exid).populate("notes").exec(function(err, foundExercise){
		if(err){
			console.log(err);
		}
		else{
			console.log(foundExercise);
			res.render("exercises/show",{exercise:foundExercise});
		}
	});
});

module.exports = router;
