var mongoose          = require("mongoose"),
    Exercise          = require("./models/exercise"),
    Note              = require("./models/note"),
    ExerciseCategory  = require("./models/exerciseCategory"),
    User              = require("./models/user"),
    passport          = require("passport"),
    LocalStrategy     = require("passport-local");

function removeAll(){
   //Remove all campgrounds
   console.log("Let's Cleanse!");
   Exercise.remove({},function(){
	 console.log("removed Exercise");
   });
   ExerciseCategory.remove({},function(){
	 console.log("removed Exercise Categories");
   });
   Note.remove({},function(){
	 console.log("removed Notes");
   });
   User.remove({},function(){
	 console.log("removed User");
   });
   var newUser = new User({username: "admin"});
   var password = "zx1230321";
   console.log("ReCreate Admin");
   User.register(newUser, password,function(err){
 	  if(err){
 		  console.log("err");
 	  }
   });
}
 module.exports = removeAll;
