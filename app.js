var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
	mongoose         = require("mongoose"),
	seedDB           = require("./seeds"),
	Note             = require("./models/note"),
	passport         = require("passport"),
	LocalStrategy    = require("passport-local"),
	User             = require("./models/user"),
	path             = require("path"),
	methodOverride   = require("method-override"),
	flash            = require("connect-flash"),
	Exercise         = require("./models/exercise"),
	ExerciseCategory = require("./models/exerciseCategory"),
	$                = require("jquery");

var exerciseRoutes    = require("./routes/exercises"),
	noteRoutes        = require("./routes/notes"),
	profileRoutes     = require("./routes/profile"),
	indexRoutes       = require("./routes/index"),
	exerciseCatRoutes = require("./routes/exerciseCategory");

var url = process.env.DATABASEURL || "mongodb://localhost/exercise_app";
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(flash());

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
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

//Routes
app.use("/exercises", exerciseRoutes);
app.use(indexRoutes);
app.use("/exercises/:id/notes",noteRoutes);
app.use(exerciseCatRoutes);
app.use(profileRoutes);

app.listen(process.env.PORT||3000, process.env.IP, function(){
  console.log("Server Up...");
});
