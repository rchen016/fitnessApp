var mongoose = require("mongoose");
var Exercise = require("./models/exercise");
var Note   = require("./models/note");

var data = [
    {
        name: "Bench Press",
        image: "https://i.imgur.com/CezroNc.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Bent-over Row",
        image: "https://i.imgur.com/EsZHOdL.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Biceps Curl",
        image: "https://i.imgur.com/sZWTMEu.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Chest Fly",
        image: "https://i.imgur.com/bFOoIj2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Deadlift",
        image: "https://i.imgur.com/Yvtxpt2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Lateral Raise",
        image: "https://i.imgur.com/OLZPsAm.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Leg Curl",
        image: "https://i.imgur.com/x067i8J.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Leg Extension",
        image: "https://i.imgur.com/1KX8aoz.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Lunge",
        image: "https://i.imgur.com/WIrwyXa.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Pull-down",
        image: "https://i.imgur.com/70weQox.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Pull-up",
        image: "https://i.imgur.com/lSGSrDt.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Pushdown",
        image: "https://i.imgur.com/HYygncx.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Push-up",
        image: "https://i.imgur.com/nrNU10o.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Russian Twist",
        image: "https://i.imgur.com/VZyLCTG.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Seated Calf Raise",
        image: "https://i.imgur.com/JhE9Vmj.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Shoulder Fly",
        image: "https://i.imgur.com/zOoSIuE.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Shoulder Press",
        image: "https://i.imgur.com/fC5a7r8.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Shoulder Shrug",
        image: "https://i.imgur.com/Mdt86BQ.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Squat",
        image: "https://i.imgur.com/aAllOaw.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Triceps Extension",
        image: "https://i.imgur.com/GlwqVVo.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Upright Row",
        image: "https://i.imgur.com/mi6JEVs.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
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
                    }
                });
            });
        });
    });
}

module.exports = seedDB;
