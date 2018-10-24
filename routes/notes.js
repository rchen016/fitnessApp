var express  = require("express"),
	Exercise = require("../models/exercise"),
	Note     = require("../models/note");
var router = express.Router({mergeParams:true});

//Notes Creatin Form
router.get("/new", isLoggedIn , function(req,res){
	Exercise.findById(req.params.id,function(err, foundExercise){
		if(err){
			console.log(err);
		}
		else{
			res.render("notes/new",{exercise:foundExercise});
		}
	});
});

//Create new Note
router.post("/", isLoggedIn, function(req,res){
	//get data to create new array
	Exercise.findById(req.params.id,function(err, foundExercise){
		if(err){
			console.log(err);
		}
		else{
			Note.create(req.body.note,function(err,newlyCreated){
				if(err){
					console.log(err);
					res.redirect("/exercises");
				}
				else{
					newlyCreated.author.id = req.user._id;
					newlyCreated.author.username = req.user.username;
					newlyCreated.save();
					foundExercise.notes.push(newlyCreated);
					foundExercise.save();
					res.redirect("/exercises/"+foundExercise._id);
				}
			});
		}
	});

});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		res.redirect("/login");
	}
}
module.exports = router;
