var express = require("express"),
    passport = require("passport"),
	LocalStrategy = require("passport-local"),
	User          = require("../models/user")
	Exercise = require("../models/exercise"),
	Note     = require("../models/note"),
	middleware = require("../middleware");

var router = express.Router();
//Display Personal Profile
router.get("/profile",function(req,res){
	Exercise.find({}, function(err,allExercises){
		if(err){
			console.log(err);
		}
		else{
			res.render("profile/index",{exercises:allExercises});
		}
	});
});

//Add Exercise to Profile
router.post("/exercises/:id/profile",function(req,res){
	var isUnique = true;
	Exercise.findById(req.params.id, function(err,foundExercises){
		if(err){
			console.log(err);
		}
		else{
			//check if exercise already exist in profile array
			for(var i=0; i<req.user.savedExercises.length; i++){
				if(req.user.savedExercises[i].name == foundExercises.name){
					isUnique = false;
				}
			}
			if(isUnique){
				req.user.savedExercises.push(foundExercises);
				req.user.save();
			}
			res.redirect("/exercises");
		}
	});
});

//Delete Exercise
router.delete("/exercises/:id/profile", function(req,res){
	Exercise.findById(req.params.id, function(err,foundExercises){
		if(err){
			console.log(err);
		}
		else{
			for(var i=0;i<req.user.savedExercises.length;i++){
				if(foundExercises.name == req.user.savedExercises[i].name){
					req.user.savedExercises.splice(i,1);
					req.user.save();
					res.render("profile/index");
				}
			}
		}
	});
});

module.exports = router;
