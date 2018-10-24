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

//Note Edit
router.get("/:note_id/edit", checkNoteOwner, function(req,res){
	Note.findById(req.params.note_id,function(err,foundNote){
		if(err){
			res.redirect("back");
		}else {
			res.render("notes/edit",{ exercise_id:req.params.id , note:foundNote});
		}
	});
});

//Note Update
router.put("/:note_id",checkNoteOwner, function(req,res){
	Note.findByIdAndUpdate(req.params.note_id, req.body.note,function(err,updated){
		if(err){
			res.redirect("back");
		}
		else{
			res.redirect("/exercises/"+req.params.id);
		}
	});
});

//Note Delete
router.delete("/:note_id",checkNoteOwner, function(req,res){
	Note.findByIdAndRemove(req.params.note_id,function(err){
		if(err){
			res.redirect("back");
		}
		else{
			res.redirect("/exercises/"+req.params.id);
		}
	});
});

//middleware
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		res.redirect("/login");
	}
}

function checkNoteOwner(req, res, next){
	if(req.isAuthenticated()){
		//render and pass array to exercise page
		Note.findById(req.params.note_id, function(err,foundNote){
			if(err){
				console.log(err);
				res.redirect("back");
			}
			else{
				if(foundNote.author.id.equals(req.user._id)){
					next();
				}
				else{
					res.redirect("back");
				}
			}
		});
	}
	else{
		res.redirect("back");
	}
}
module.exports = router;
