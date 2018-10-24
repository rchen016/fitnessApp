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
	flash          = require("connect-flash"),
	Exercise       = require("./models/exercise");

var exerciseRoutes  = require("./routes/exercises"),
	noteRoutes      = require("./routes/notes"),
	indexRoutes      = require("./routes/index");

//mongoose.connect("mongodb://localhost/exercise_app");
mongoose.connect("mongodb://rickychen10:zx1230321@ds141623.mlab.com:41623/exerciseapp");

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

app.listen(3000, process.env.IP,function(){
	console.log("Welcome to Fitness App");
});
