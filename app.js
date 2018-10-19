var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
	mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/exercise_app");
var exercises = [
	{name: "Pullup", image:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ca004a9cd0ce1144e94460a9f5e79b&auto=format&fit=crop&w=634&q=80"},
	{name: "Deadlift", image:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f831342881cb6ff58e50698c7f9432de&auto=format&fit=crop&w=1350&q=80"},
	{name: "Squats", image:"https://images.unsplash.com/photo-1532382752999-45b3dc5d4bf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6bfa542aeb80a2ddc9a2753ace99aca&auto=format&fit=crop&w=1350&q=80"},
	{name: "Erg", image:"https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-0.3.5&s=133aed109939be950674cabf03e64f26&auto=format&fit=crop&w=1350&q=80"},
	{name: "Jump Rope", image:"https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76421d3379a2336a878cebe7b9d27ad5&auto=format&fit=crop&w=702&q=80"},
	{name: "Pullup", image:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ca004a9cd0ce1144e94460a9f5e79b&auto=format&fit=crop&w=634&q=80"},
	{name: "Deadlift", image:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f831342881cb6ff58e50698c7f9432de&auto=format&fit=crop&w=1350&q=80"},
	{name: "Squats", image:"https://images.unsplash.com/photo-1532382752999-45b3dc5d4bf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6bfa542aeb80a2ddc9a2753ace99aca&auto=format&fit=crop&w=1350&q=80"},
	{name: "Erg", image:"https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-0.3.5&s=133aed109939be950674cabf03e64f26&auto=format&fit=crop&w=1350&q=80"},
	{name: "Jump Rope", image:"https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76421d3379a2336a878cebe7b9d27ad5&auto=format&fit=crop&w=702&q=80"}
];

//Schema
var exerciseSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Exercise = mongoose.model("Exercise", exerciseSchema);
//
// Exercise.create(
// 	{
// 		name: "Deadlift",
// 		image:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f831342881cb6ff58e50698c7f9432de&auto=format&fit=crop&w=1350&q=80"
// 	},function(err, exercise){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			console.log(exercise);
// 		}
// 	});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/exercises", function(req,res){
	//render and pass array to exercise page
	Exercise.find({}, function(err,allExercises){
		if(err){
			console.log(err);
		}
		else{
			res.render("exercises",{exercises:allExercises});
		}
	})
	//res.render("exercises",{exercises});
});

app.post("/exercises", function(req,res){
	//get data to create new array
	var exName = req.body.name;
	var exImageURL = req.body.image;
	var newExercise = {name:exName, image:exImageURL};
	Exercise.create(newExercise,function(err,newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/exercises");
		}
	});
});

app.get("/exercises/new",function(req,res){
	res.render("new.ejs");
});

app.listen(3000, process.env.IP,function(){
	console.log("Welcome to Fitness App");
});
