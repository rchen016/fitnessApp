var Exercise = require("../models/exercise"),
    Note     = require("../models/note");

var middlewareObj = {};

middlewareObj.checkNoteOwner = function(req,res,next){
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
					req.flash("error", "You don't have the permission rights to do that");
					res.redirect("back");
				}
			}
		});
	}
	else{
		res.redirect("back");
	}
}
middlewareObj.checkOwner = function(req,res,next){
	if(req.isAuthenticated()){
		//render and pass array to exercise page
		Exercise.findById(req.params.id, function(err,foundExercise){
			if(err){
				req.flash("error", "Exercise Not Found!");
				res.redirect("back");
			}
			else{
				if(foundExercise.author.name == (req.user.name)){
					next();
				}
				else{
					req.flash("error", "You don't have the permission rights to do that");
					res.redirect("back");
				}
			}
		});
	}
	else{
		req.flash("error", "Please Login First!");
		res.redirect("back");
	}
}

middlewareObj.isLoggedIn = function(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		req.flash("error", "You need to be logged in to do that.");
		res.redirect("/login");
	}
}
module.exports = middlewareObj;
