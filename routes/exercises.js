var express  = require("express"),
	Exercise = require("../models/exercise"),
	Note     = require("../models/note"),
	User     = require("../models/user"),
	middleware = require("../middleware");
var router = express.Router();

//Exercise details
router.get("/:id",function(req,res){
	Exercise.findById(req.params.id).populate("notes").exec(function(err, foundExercise){
		if(err){
			req.flash("error", err);
			return;
		}
		else{
			console.log(foundExercise);
			res.render("exercises/show",{exercise:foundExercise});
		}
	});
});

//Edit Exercise
router.get("/:id/edit", middleware.checkOwner, function(req,res){
	//render and pass array to exercise page
	Exercise.findById(req.params.id, function(err,foundExercise){
		res.render("exercises/edit",{exercise:foundExercise});
	});
});

//Update Exercise
router.put("/:id",middleware.checkOwner, function(req,res){
	Exercise.findByIdAndUpdate(req.params.id,req.body.exercise,function(err, updatedExercise){
		if(err){
			res.redirect("/exerciseCategory");
		}
		else{
			res.redirect("/exercises/"+req.params.id);
		}
	})
});

module.exports = router;
