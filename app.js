var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
	seedDB         = require("./seeds"),
	Note           = require("./models/note"),
	passport       = require("passport"),
	LocalStrategy  = require("passport-local"),
	User           = require("./models/user"),
	path           = require("path"),
	methodOverride = require("method-override"),
	Exercise       = require("./models/exercise");

var exerciseRoutes  = require("./routes/exercises"),
	noteRoutes      = require("./routes/notes"),
	indexRoutes      = require("./routes/index");

mongoose.connect("mongodb://localhost/exercise_app");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
//seedDB();
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

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});

//Routes
app.use("/exercises", exerciseRoutes);
app.use(indexRoutes);
app.use("/exercises/:id/notes",noteRoutes);

app.listen(3000, process.env.IP,function(){
	console.log("Welcome to Fitness App");
});
