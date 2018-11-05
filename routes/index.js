var express       = require("express"),
	passport      = require("passport"),
	LocalStrategy = require("passport-local"),
	User          = require("../models/user"),
	removeAll     = require("../removeAll"),
	seedDB        = require("../seeds");
var router = express.Router();
var swapListTracker = [];
var workoutNumTracker = [];

Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
}

//Landing page
router.get("/",function(req,res){
	res.render("landing");
});
///

router.get("/test",function(req,res){
	res.render("test");
});
router.post("/testing",function(req,res){
	swapListTracker.push(req.body.itemCounter["counter"]);
	workoutNumTracker.push(req.body.itemCounter["numList"]);
	if(swapListTracker.length==2){
		console.log("Swap time");
		console.log("SL: ",swapListTracker);
		console.log("WL: ",workoutNumTracker);
		if(workoutNumTracker[0] != workoutNumTracker[1]){
			swapListTracker = [];
			workoutNumTracker = [];
			req.flash("error", "Workout Number don't match");
			res.redirect("back");
			return;
		}
		req.user.savedWorkouts.swapItems(swapListTracker[0],swapListTracker[1]);
		req.user.save();
		swapListTracker = [];
		workoutNumTracker = [];
	}
	res.redirect("back");
	return;
});

///

//render register page
router.get("/register",function(req,res){
	res.render("register");
});

//render register page
router.get("/disclaimer",function(req,res){
	res.render("disclaimer");
});

//Signup
router.post("/register",function(req,res){
	if(req.body.password != req.body.confirmPassword){
		req.flash("error", "Passwords Don't match!");
		res.redirect("back");
		return;
	}
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password,function(err, user){
		if(err){
			req.flash("error", err);
			return res.render("register");
		}
		else{
				passport.authenticate("local")(req, res, function(){
				req.flash("success", "Account Created");
				res.redirect("/exerciseCategory");
			});
		}
	});
});

//Login
router.get("/login",function(req,res){
	res.render("login", {message:req.flash("error")});
});
//Login authenication with middleware
router.post("/login", passport.authenticate("local",
	{
		successRedirect: "/exerciseCategory",
		failureRedirect: "/login"
	}),function(req,res){
});

//Remove all
router.get("/removeAll",function(req,res){
	if(req.user && req.user.username=="admin"){
		removeAll();
		res.redirect("/");
		return;
	}
	req.flash("error", "Restricted Page");
	res.redirect("back");
	return;
});

//Logout
router.get("/logout",function(req,res){
	req.logout();
	req.flash("success", "Sucessfully Logged Out!");
	res.redirect("/exerciseCategory");
});

//Toggle Edit Mode
router.get("/toggleEditMode",function(req,res){
	if(req.user){
		req.user.toggleEditMode = !req.user.toggleEditMode;
		req.user.save();
		res.redirect("back");
		return;
	}
	req.flash("error", "Restricted Page");
	res.redirect("back");
	return;
});

//Seed
router.get("/seedDB",function(req,res){
	if(req.user && req.user.username=="admin"){
		seedDB();
		res.redirect("back");
		return;
	}
	req.flash("error", "Restricted Page");
	res.redirect("back");
	return;
});
module.exports = router;
