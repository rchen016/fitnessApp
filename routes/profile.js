var express       = require("express"),
    passport      = require("passport"),
	seedDB        = require("../seeds"),
	LocalStrategy = require("passport-local"),
	User          = require("../models/user")
	Exercise      = require("../models/exercise"),
	Note          = require("../models/note"),
	middleware    = require("../middleware");

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
	//ensure they choose a workout Number
	if(req.body.workoutNum== undefined){
		req.flash("error", "Please Select Validate Workout Number.");
		res.redirect("/exerciseCategory");
		return;
	}
	var isUnique = true;
	Exercise.findById(req.params.id, function(err,foundExercises){
		if(err){
			req.flash("error", "Adding Failed!");
			return res.render("profile/index");
		}
		else{
			//check if exercise already exist in profile array
			for(var i=0; i<req.user.savedExercises.length; i++){
				if(req.user.savedExercises[i].name == foundExercises.name){
					isUnique = false;
				}
			}
			if(isUnique){
				req.user.savedWorkouts.push({workoutNum:req.body.workoutNum, value:foundExercises });
				req.user.savedExercises.push(foundExercises);
				req.user.save();
				console.log(req.user.savedWorkouts);
			}
			res.redirect("/exerciseCategory");
		}
	});
});

//Delete Exercise
router.delete("/exercises/:id/profile", function(req,res){
	Exercise.findById(req.params.id, function(err,foundExercises){
		if(err){
			req.flash("error", "Deteletion Failed!");
			return res.render("profile/index");
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

router.get("/settings", function(req,res){
	res.render("profile/settings");
});

router.put("/settings", function(req,res){
	if(req.body.newpassword != req.body.confirmNewPassword){
		req.flash("error", "Passwords Don't match!");
		res.redirect("back");
		return;
	}
	User.findByUsername(req.session.passport.user).then(function(sanitizedUser){
		if(sanitizedUser){
			sanitizedUser.setPassword(req.body.newpassword, function() {
                sanitizedUser.save();
                req.flash("success", "Password Reset Sucessful!");
				res.redirect("/exerciseCategory");
            });
		}else{
			req.flash("error", "Password Reset Failed!");
			return res.render("profile/index");
		}
	});
});

router.get("/toggleEditMode",function(req,res){
	req.user.toggleEditMode = !req.user.toggleEditMode;
	req.user.save();
	res.redirect("back");
	return;
});

router.get("/seedDB",function(req,res){
	seedDB();
	res.redirect("back");
	return;
});
module.exports = router;
