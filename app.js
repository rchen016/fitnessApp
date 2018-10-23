var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
	mongoose   = require("mongoose"),
	seedDB     = require("./seeds"),
	Note       = require("./models/note"),
	passport   = require("passport"),
	LocalStrategy = require("passport-local"),
	User   = require("./models/user"),
	path       = require("path"),
	Exercise   = require("./models/exercise");

mongoose.connect("mongodb://localhost/exercise_app");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
seedDB();
//=================================
//Auth Setup with builtin fucntions
//=================================

app.use(require("express-session")({
	secret: "testtesttest",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
//Auth Routes
//============
//render register page
app.get("/register",function(req,res){
	res.render("register");
});

//Signup
app.post("/register",function(req,res){
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

//===============
//Exercise Routes
//===============
//Landing page
app.get("/",function(req,res){
	res.redirect("/exercises");
});

//Exercise Page
app.get("/exercises", function(req,res){
	//render and pass array to exercise page
	Exercise.find({}, function(err,allExercises){
		if(err){
			console.log(err);
		}
		else{
			res.render("exercises/index",{exercises:allExercises});
		}
	})
	//res.render("exercises",{exercises});
});

//Create new Exercise
app.post("/exercises", function(req,res){
	//get data to create new array
	var exName = req.body.name;
	var exImageURL = req.body.image;
	var exDesc = req.body.description;
	var newExercise = {name:exName, image:exImageURL, description:exDesc};
	Exercise.create(newExercise,function(err,newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/exercises");
		}
	});
});

//Create new Excercise Form
app.get("/exercises/new",function(req,res){
	res.render("new");
});

//Exercise details
app.get("/exercises/:id",function(req,res){
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
//============
//Notes Routes
//============
//Notes Creatin Form
app.get("/exercises/:id/notes/new",function(req,res){
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
app.post("/exercises/:id/notes", function(req,res){
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
					foundExercise.notes.push(newlyCreated);
					foundExercise.save();
					res.redirect("/exercises/"+foundExercise._id);
				}
			});
		}
	});

});

app.listen(3000, process.env.IP,function(){
	console.log("Welcome to Fitness App");
});
