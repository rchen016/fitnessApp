var express  = require("express"),
	Exercise = require("../models/exercise"),
	Note     = require("../models/note"),
	middleware = require("../middleware");
var router = express.Router({mergeParams:true});

//Notes Creatin Form
router.get("/new", middleware.isLoggedIn , function(req,res){
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
router.post("/",  middleware.isLoggedIn, function(req,res){
	//get data to create new array
	if(req.body.note.set== undefined){
		req.flash("error", "Please Select Validate Set Number.");
		res.redirect("/exerciseCategory");
		return;
	}
	if(req.body.note.rep == undefined){
		req.flash("error", "Please Select Validate Rep Number.");
		res.redirect("/exerciseCategory");
		return;
	}
	if(req.body.note.weight== ""){
		req.flash("error", "Please Select Validate Weight Number.");
		res.redirect("/exerciseCategory");
		return;
	}
	Exercise.findById(req.params.id,function(err, foundExercise){
		if(err){
			req.flash("error","Something is wrong");
			console.log(err);
		}
		else{
			var noteRep = req.body.note.rep;
			var noteSet = req.body.note.set;
			var noteWeight = req.body.note.weight;
			var noteDate = new Date().toLocaleDateString();
			Note.create({rep: noteRep, set: noteSet, weight: noteWeight ,date: noteDate},function(err,newlyCreated){
				if(err){
					console.log(err);
					res.redirect("/exerciseCategory");
				}
				else{
					newlyCreated.author.id = req.user._id;
					newlyCreated.author.username = req.user.username;
					newlyCreated.save();
					foundExercise.notes.push(newlyCreated);
					foundExercise.save();
					req.flash("success","Added Note");
					res.redirect("/exercises/"+foundExercise._id);
				}
			});
		}
	});

});

//Note Edit
router.get("/:note_id/edit", middleware.checkNoteOwner, function(req,res){
	Note.findById(req.params.note_id,function(err,foundNote){
		if(err){
			res.redirect("back");
		}else {
			res.render("notes/edit",{ exercise_id:req.params.id , note:foundNote});
		}
	});
});

//Note Update
router.put("/:note_id", middleware.checkNoteOwner, function(req,res){
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
router.delete("/:note_id", middleware.checkNoteOwner, function(req,res){
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

module.exports = router;
