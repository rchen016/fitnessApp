var express       = require("express"),
	passport      = require("passport"),
	LocalStrategy = require("passport-local"),
	User          = require("../models/user");
var router = express.Router();

//Landing page
router.get("/",function(req,res){
	res.render("landing");
});

//render register page
router.get("/register",function(req,res){
	res.render("register");
});

//Signup
router.post("/register",function(req,res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password,function(err, user){
		if(err){
			req.flash("error", err);
			return res.render("register");
		}
		else{
				passport.authenticate("local")(req, res, function(){
				req.flash("success", "Account Created");
				res.redirect("/exercises");
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
		successRedirect: "/exercises",
		failureRedirect: "/login"
	}),function(req,res){
});

//Logout
router.get("/logout",function(req,res){
	req.logout();
	req.flash("success", "Sucessfully Logged Out!");
	res.redirect("/exercises");
});

module.exports = router;
