var mongoose = require("mongoose");
var Exercise = require("./models/exercise");
var Note   = require("./models/note");

var data = [
    {
        name: "Pullup",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ca004a9cd0ce1144e94460a9f5e79b&auto=format&fit=crop&w=634&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Deadlift",
        image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f831342881cb6ff58e50698c7f9432de&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Squats",
        image: "https://images.unsplash.com/photo-1532382752999-45b3dc5d4bf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6bfa542aeb80a2ddc9a2753ace99aca&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]

function seedDB(){
   //Remove all campgrounds
   Exercise.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed exercises!");
        Note.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed note!");
             //add a few campgrounds
            data.forEach(function(seed){
                Exercise.create(seed, function(err, exercise){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a exercises");
                        //create a comment
                        Note.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, note){
                                if(err){
                                    console.log(err);
                                } else {
                                    exercise.notes.push(note);
                                    exercise.save();
                                    console.log("Created new note");
                                }
                            });
                    }
                });
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;

// var exercises = [
// 	{name: "Pullup", image:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ca004a9cd0ce1144e94460a9f5e79b&auto=format&fit=crop&w=634&q=80"},
// 	{name: "Deadlift", image:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f831342881cb6ff58e50698c7f9432de&auto=format&fit=crop&w=1350&q=80"},
// 	{name: "Squats", image:"https://images.unsplash.com/photo-1532382752999-45b3dc5d4bf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6bfa542aeb80a2ddc9a2753ace99aca&auto=format&fit=crop&w=1350&q=80"},
// 	{name: "Erg", image:"https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-0.3.5&s=133aed109939be950674cabf03e64f26&auto=format&fit=crop&w=1350&q=80"},
// 	{name: "Jump Rope", image:"https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76421d3379a2336a878cebe7b9d27ad5&auto=format&fit=crop&w=702&q=80"},
// 	{name: "Pullup", image:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ca004a9cd0ce1144e94460a9f5e79b&auto=format&fit=crop&w=634&q=80"},
// 	{name: "Deadlift", image:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f831342881cb6ff58e50698c7f9432de&auto=format&fit=crop&w=1350&q=80"},
// 	{name: "Squats", image:"https://images.unsplash.com/photo-1532382752999-45b3dc5d4bf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6bfa542aeb80a2ddc9a2753ace99aca&auto=format&fit=crop&w=1350&q=80"},
// 	{name: "Erg", image:"https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-0.3.5&s=133aed109939be950674cabf03e64f26&auto=format&fit=crop&w=1350&q=80"},
// 	{name: "Jump Rope", image:"https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76421d3379a2336a878cebe7b9d27ad5&auto=format&fit=crop&w=702&q=80"}
// ];
