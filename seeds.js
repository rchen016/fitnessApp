var mongoose = require("mongoose");
var Exercise = require("./models/exercise");
var Note   = require("./models/note");
var ExerciseCategory   = require("./models/exerciseCategory");

var data = [
    {
        name: "Bench Press",
        image: "https://i.imgur.com/CezroNc.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Bent-over Row",
        image: "https://i.imgur.com/0UopT5g.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Bent-over Dumbell Row",
        image: "https://i.imgur.com/EsZHOdL.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Biceps Curl",
        image: "https://i.imgur.com/sZWTMEu.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Bulgarian Split Squat",
        image: "https://i.imgur.com/U2pbzTx.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Cable Flat Fly",
        image: "https://i.imgur.com/nTVBAm7.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Cable Incline Fly",
        image: "https://i.imgur.com/PPUWiqb.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Chest Fly",
        image: "https://i.imgur.com/bFOoIj2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Close Grip Pulldown",
        image: "https://i.imgur.com/KMcaJde.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Crunches",
        image: "https://i.imgur.com/fOYlEoH.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "abdominal",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Deadlift",
        image: "https://i.imgur.com/Yvtxpt2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Dips",
        image: "https://i.imgur.com/xYaKiux.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Dumbbell Flat Bench Press",
        image: "https://i.imgur.com/n0JttaI.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Front Squat",
        image: "https://i.imgur.com/to74M8i.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Hammer Curls",
        image: "https://i.imgur.com/51gCjli.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Hip Raises",
        image: "https://i.imgur.com/xQUnydD.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "abdominal",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Barbell Bench",
        image: "https://i.imgur.com/UBmesDq.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Dumbbell Curls",
        image: "https://i.imgur.com/c23viZU.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Dumbbell Bench Press",
        image: "https://i.imgur.com/PO3Bshk.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Reverse Raise",
        image: "https://i.imgur.com/1Vlhbgk.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Lateral Raise",
        image: "https://i.imgur.com/OLZPsAm.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Leg Curl",
        image: "https://i.imgur.com/x067i8J.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Leg Extension",
        image: "https://i.imgur.com/1KX8aoz.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Lunge",
        image: "https://i.imgur.com/WIrwyXa.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Machine Flat Chest Press",
        image: "https://i.imgur.com/suiIj3n.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Machine Incline Chest Press",
        image: "https://i.imgur.com/ocljgAO.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Pull-down",
        image: "https://i.imgur.com/70weQox.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Pull-up",
        image: "https://i.imgur.com/lSGSrDt.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Pushdown",
        image: "https://i.imgur.com/HYygncx.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Push-up",
        image: "https://i.imgur.com/nrNU10o.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Russian Twist",
        image: "https://i.imgur.com/VZyLCTG.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "abdominal",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Seated Cable Wide Grip",
        image: "https://i.imgur.com/cZ0qY71.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Seated Calf Raise",
        image: "https://i.imgur.com/JhE9Vmj.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Seated Lateral Raise",
        image: "https://i.imgur.com/S4xsdUS.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Shoulder Dumbbell Press",
        image: "https://i.imgur.com/3nrmUly.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Shoulder Fly",
        image: "https://i.imgur.com/zOoSIuE.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Shoulder Press",
        image: "https://i.imgur.com/fC5a7r8.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Shoulder Shrug",
        image: "https://i.imgur.com/Mdt86BQ.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Skull Crushers",
        image: "https://i.imgur.com/wpjEt34.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Squat",
        image: "https://i.imgur.com/aAllOaw.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "T Bar Row",
        image: "https://i.imgur.com/sFp6aRg.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Triceps Extension",
        image: "https://i.imgur.com/GlwqVVo.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Upright Row",
        image: "https://i.imgur.com/mi6JEVs.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Upright Barbell Rows",
        image: "https://i.imgur.com/95DZHpt.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    }
]

function seedDB(){
   //Remove all campgrounds
   ExerciseCategory.remove({},function(){
	 console.log("removed Exercise Categories");
   });

   ExerciseCategory.create({name:"chest",image:"https://homegymr.com/wp-content/uploads/2016/07/Chest-Muscle.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"arm",image:"https://pre00.deviantart.net/ce4f/th/pre/i/2010/306/9/d/arm_muscle_anatomy_study_by_oxfordcoma-d320k2d.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"back",image:"https://img.aws.livestrongcdn.com/ls-hp-1920-image/ds-photo/getty/article/103/132/514675913_XS.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"leg",image:"https://images-na.ssl-images-amazon.com/images/I/7141qAgHKiL._SL1480_.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"shoulder",image:"https://i2.wp.com/www.languageofdesires.com/wp-content/uploads/2017/08/Shoulder_Muscle.png?ssl=1"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"abdominal",image:"https://i.pinimg.com/originals/a4/18/45/a418454e46ee5e0bf308e8378ce9e3ba.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });


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
				console.log(seed.name);
                Exercise.create(seed, function(err, exercise){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a exercises");
                    }
					if(exercise.category == "chest"){
						console.log("added a chest");
						ExerciseCategory.findOne({name:"chest"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});
					}
					else if(exercise.category == "arm"){
						console.log("added a arm");
						ExerciseCategory.findOne({name:"arm"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "back"){
						console.log("added a back");
						ExerciseCategory.findOne({name:"back"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "leg"){
						console.log("added a leg");
						ExerciseCategory.findOne({name:"leg"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "shoulder"){
						console.log("added a shoulder");
						ExerciseCategory.findOne({name:"shoulder"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "abdominal"){
						console.log("added a abdominal");
						ExerciseCategory.findOne({name:"abdominal"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					// ExerciseCategory.findOne({name:"abdominal"},function(err,exCat){
					// 	//console.log(exCat);
					// });
                });
            });
        });
    });
}

module.exports = seedDB;
