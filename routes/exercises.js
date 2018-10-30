var express  = require("express"),
	Exercise = require("../models/exercise"),
	Note     = require("../models/note"),
	User     = require("../models/user"),
	middleware = require("../middleware");
var router = express.Router();

//Exercise Page
router.get("/", function(req,res){
	//render and pass array to exercise page
	Exercise.find({}, function(err,allExercises){
		if(err){
			console.log(err);
		}
		else{
			res.render("exercises/index",{exercises:allExercises});
		}
	});
});

//Create new Exercise
router.post("/", middleware.isLoggedIn, function(req,res){
	//get data to create new array
	var exName = req.body.name;
	var exImageURL = req.body.image;
	var exDesc = req.body.description;
	var exCat = req.body.category;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newExercise = {name:exName, image:exImageURL, description:exDesc, category:exCat, author:author};
	Exercise.create(newExercise,function(err,newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/exerciseCategory");
		}
	});
});

//Create new Excercise Form
router.get("/new", middleware.isLoggedIn, function(req,res){
	res.render("exercises/new");
});

//Exercise details
router.get("/:id",function(req,res){
	console.log("EX Route");
	Exercise.findById(req.params.id).populate("notes").exec(function(err, foundExercise){
		if(err){
			console.log(err);
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

//Delte Exercise
router.delete("/:id", middleware.checkOwner, function(req,res){
	Exercise.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/exerciseCategory");
		}
		else{
			res.redirect("/exerciseCategory");
		}
	});
});

module.exports = router;
