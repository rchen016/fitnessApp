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
			console.log("quick check");
			for(var i=0; i<req.user.savedWorkouts.length;i++){
				console.log("Checking... ", req.user.savedWorkouts[i].value.name);
			}
			//check if exercise already exist in profile array
			console.log("Check Unique ", req.user);
			// for(var i=0; i<req.user.savedExercises.length; i++){
			// 	if(req.user.savedExercises[i].name == foundExercises.name){
			// 		console.log("Not Uni: ",req.user.savedExercises[i].name);
			// 		console.log("==Not Uni: ",foundExercises.name);
			// 		isUnique = false;
			// 	}
			// }
			for(var i=0; i<req.user.savedWorkouts.length; i++){
				if(req.user.savedWorkouts[i].value.name == foundExercises.name){
					//console.log("Not Uni: ",req.user.savedExercises[i].name);
				//	console.log("==Not Uni: ",foundExercises.name);
					console.log("Not Unique");
					isUnique = false;
				}
			}
			if(isUnique){
				console.log("UNIQUE!");
				req.user.savedWorkouts.push({workoutNum:req.body.workoutNum, value:foundExercises });
				//req.user.savedExercises.push(foundExercises);
				req.user.save();
				res.redirect("/exerciseCategory");
				return;
			}
			res.redirect("/exerciseCategory");
		}
	});
});

//Delete Exercise
router.delete("/exercises/:id/profile", function(req,res){
	console.log("Delete Route");
	var counter = 0;
	Exercise.findById(req.params.id, function(err,foundExercises){
		console.log("ex: ", foundExercises)
		if(err){
			req.flash("error", "Deteletion Failed!");
			return res.render("profile/index");
		}
		else{
			for(var i=0;i<req.user.savedWorkouts.length;i++){
				if(foundExercises.name == req.user.savedWorkouts[i].name){
					console.log("Found Ex and now deleting...");
					req.user.savedExercises.splice(i,1);
					req.user.save();
					res.render("profile/index");
				}
			}

			req.user.savedWorkouts.forEach(function(found){
				console.log(foundExercises.name);
				console.log(found.value.name);
				console.log(counter);
				if(foundExercises.name == found.value.name){
					console.log("Let's Slice...");
					console.log("SW: " + req.user.savedWorkouts.length);
					req.user.savedWorkouts.splice(counter,1);
					req.user.savedExercises.splice(counter,1);
					console.log("SW Left: " + req.user.savedWorkouts.length);
					req.user.save();
					//res.render("profile/index");
					console.log("Redirecting to Profile");
					res.redirect("back");
					return;
				}
				counter = counter + 1;
			});

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

module.exports = router;
