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
	Exercise.findById(req.params.id, function(err,foundExercises){
		if(err){
			console.log(err);
		}
		else{
			req.user.savedExercises.push(foundExercises);
			req.user.save();
			console.log(req.user.savedExercises);
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
				if(foundExercises.name === req.user.savedExercises[i].name){
					console.log(req.user.savedExercises[i].name);
					req.user.savedExercises.splice(i,1);
					req.user.save();
					res.redirect(req.get('referer'));
				}
			}
		}
	});
});

module.exports = router;
