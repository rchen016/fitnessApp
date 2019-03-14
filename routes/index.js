var express       = require("express"),
	passport      = require("passport"),
	LocalStrategy = require("passport-local"),
	User          = require("../models/user"),
	removeAll     = require("../removeAll"),
	seedDB        = require("../seeds");
var router = express.Router();

//test page
router.get("/test",function(req,res){
	var originalArray = [1,2,3,4];
	var temp = [];
	var tempList = [];
	res.render("test",{testList:originalArray,tempList:tempList});
});

//Landing page
router.get("/",function(req,res){
	res.render("landing");
});

//render register page
router.get("/register",function(req,res){
	res.render("register");
});

//render disclaimer  page
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
	removeAll();
	res.redirect("/");
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
	req.user.toggleEditMode = !req.user.toggleEditMode;
	req.user.save();
	res.redirect("back");
	return;
});

//Seed
router.get("/seedDB",function(req,res){
	seedDB();
	res.redirect("back");
	return;
});
module.exports = router;
