var express       = require("express"),
	passport      = require("passport"),
	LocalStrategy = require("passport-local"),
	User          = require("../models/user");
var router = express.Router();

//Landing page
router.get("/",function(req,res){
	res.redirect("/exercises");
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
			console.log(err);
			return res.render("register");
		}
		else{
			passport.authenticate("local")(req, res, function(){
				res.redirect("/exercises");
			});
		}
	});
});

//Login
router.get("/login",function(req,res){
	res.render("login");
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
	res.redirect("/exercises");
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
