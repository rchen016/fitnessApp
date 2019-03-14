var mongoose         = require("mongoose"),
    Exercise         = require("./models/exercise"),
    Note             = require("./models/note"),
    ExerciseCategory = require("./models/exerciseCategory");

var data = [
    {
        name: "Barbell Bench Press",
        image: "https://i.imgur.com/CezroNc.png",
        description: "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.#From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest.#After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it.#Repeat the movement for the prescribed amount of repetitions.#When you are done, place the bar back in the rack.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Bent Over Barbell Row",
        image: "https://i.imgur.com/0UopT5g.png",
        description: "Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.#Now, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause.#Then inhale and slowly lower the barbell back to the starting position.#Repeat for the recommended amount of repetitions.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Bent Over Dumbell Row",
        image: "https://i.imgur.com/EsZHOdL.png",
        description: "With a dumbbell in each hand (palms facing your torso), bend your knees slightly and bring your torso forward by bending at the waist; as you bend make sure to keep your back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.#While keeping the torso stationary, lift the dumbbells to your side (as you breathe out), keeping the elbows close to the body (do not exert any force with the forearm other than holding the weights). On the top contracted position, squeeze the back muscles and hold for a second.#Slowly lower the weight again to the starting position as you inhale.#Repeat for the recommended amount of repetitions.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Dumbbell Bicep Curl",
        image: "https://i.imgur.com/sZWTMEu.png",
        description: "Stand up straight with a dumbbell in each hand at arm's length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.#Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps.#Then, inhale and slowly begin to lower the dumbbells back to the starting position.#Repeat for the recommended amount of repetitions.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Bulgarian Split Squat",
        image: "https://i.imgur.com/U2pbzTx.jpg",
        description: "Position yourself into a staggered stance with the rear foot elevated and front foot forward.#Hold a dumbbell in each hand, letting them hang at the sides. This will be your starting position.#Begin by descending, flexing your knee and hip to lower your body down. Maintain good posture througout the movement. Keep the front knee in line with the foot as you perform the exercise.#At the bottom of the movement, drive through the heel to extend the knee and hip to return to the starting position.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Cable Crossover",
        image: "https://i.imgur.com/nTVBAm7.png",
        description: "To get yourself into the starting position, place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand.#Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. This will be your starting position.#With a slight bend on your elbows in order to prevent stress at the biceps tendon, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms and torso should remain stationary; the movement should only occur at the shoulder joint.#Return your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights.#Hold for a second at the starting position and repeat the movement for the prescribed amount of repetitions.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Cable Fly",
        image: "https://i.imgur.com/PPUWiqb.png",
        description: "To get yourself into the starting position, set the pulleys at the floor level (lowest level possible on the machine that is below your torso).#Place an incline bench (set at 45 degrees) in between the pulleys, select a weight on each one and grab a pulley on each hand.#With a handle on each hand, lie on the incline bench and bring your hands together at arms length in front of your face. This will be your starting position.#With a slight bend of your elbows (in order to prevent stress at the biceps tendon), lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary. The movement should only occur at the shoulder joint.#Return your arms back to the starting position as you squeeze your chest muscles and exhale. Hold the contracted position for a second. Tip: Make sure to use the same arc of motion used to lower the weights.#Repeat the movement for the prescribed amount of repetitions.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Chest Fly",
        image: "https://i.imgur.com/bFOoIj2.png",
        description: "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other.#Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position.#With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint.#Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.#Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Close Grip Pulldown",
        image: "https://i.imgur.com/KMcaJde.png",
        description: "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.#Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.#As you have both arms extended in front of you - while holding the bar at the chosen grip width - bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.#As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary (only the arms should move). The forearms should do no other work except for holding the bar; therefore do not try to pull the bar down using the forearms.#After a second in the contracted position, while squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.#6. Repeat this motion for the prescribed amount of repetitions.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Crunches",
        image: "https://i.imgur.com/fOYlEoH.png",
        description: "Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch.#Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head.#While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor.#Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum.#After the one second contraction, begin to come down slowly again to the starting position as you inhale.#Repeat for the recommended amount of repetitions.",
		category: "abdominal",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Barbell Deadlift",
        image: "https://i.imgur.com/Yvtxpt2.png",
        description: "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip.#With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward.#After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.#Lower the bar by bending at the hips and guiding it to the floor.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Dips",
        image: "https://i.imgur.com/xYaKiux.png",
        description: "For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars.#While breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest.#Once you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second.#Repeat the movement for the prescribed amount of repetitions.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Dumbbell Flat Bench Press",
        image: "https://i.imgur.com/n0JttaI.png",
        description: "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other.#Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.#Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position.#Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it.#Repeat the movement for the prescribed amount of repetitions of your training program.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Front Barbell Squat",
        image: "https://i.imgur.com/to74M8i.png",
        description: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, bring your arms up under the bar while keeping the elbows high and the upper arm slightly above parallel to the floor. Rest the bar on top of the deltoids and cross your arms while grasping the bar for total control.#Lift the bar off the rack by first pushing with your legs and at the same time straightening your torso.#Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).#Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.#Begin to raise the bar as you exhale by pushing the floor mainly with the middle of your foot as you straighten the legs again and go back to the starting position.#Repeat for the recommended amount of repetitions.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Hammer Curls",
        image: "https://i.imgur.com/51gCjli.png",
        description: "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso.#The palms of the hands should be facing your torso. This will be your starting position.#Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm.#After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position.#Repeat for the recommended amount of repetitions.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Hip Raises on Parallel Bars",
        image: "https://i.imgur.com/xQUnydD.png",
        description: "Position your body on the vertical leg raise bench so that your forearms are resting on the pads next to the torso and holding on to the handles. Your arms will be bent at a 90 degree angle.#The torso should be straight with the lower back pressed against the pad of the machine and the legs extended pointing towards the floor. This will be your starting position.#Now as you breathe out, lift your legs up as you keep them extended. Continue this movement until your legs are roughly parallel to the floor and then hold the contraction for a second. Tip: Do not use any momentum or swinging as you perform this exercise.#Slowly go back to the starting position as you breathe in.#Repeat for the recommended amount of repetitions.",
		category: "abdominal",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Barbell Bench",
        image: "https://i.imgur.com/UBmesDq.png",
        description: "Load the bar to an appropriate weight for your training.#Lay on the bench with your feet flat on the ground, driving through to your hips. Your back should be arched, and your shoulder blades retracted.#Take a medium, pronated grip covering the rings on the bar. Remove the bar from the rack, holding the weight above your chest with your arms extended. This will be your starting position.#Lower the bar to the sternum by flexing the elbows. Maintain control and do not bounce the bar off of your chest. Your lats should stay tight and elbows slightly drawn in.#After touching your torso with the bar, extend the elbows to return the bar to the starting position.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Dumbbell Curls",
        image: "https://i.imgur.com/c23viZU.png",
        description: "Sit back on an incline bench with a dumbbell in each hand held at arms length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.#While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second.#Slowly begin to bring the dumbbells back to starting position as your breathe in.#Repeat for the recommended amount of repetitions.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Dumbbell Bench Press",
        image: "https://i.imgur.com/PO3Bshk.jpg",
        description: "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other.#Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width.#Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.#Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest.#Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them.#Repeat the movement for the prescribed amount of repetitions.#When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Incline Reverse Raise",
        image: "https://i.imgur.com/1Vlhbgk.jpg",
        description: "To begin, lie down on an incline bench with the chest and stomach pressing against the incline. Have the dumbbells in each hand with the palms facing each other (neutral grip).#Extend the arms in front of you so that they are perpendicular to the angle of the bench. The legs should be stationary while applying pressure with the ball of your toes. This is the starting position.#Maintaining the slight bend of the elbows, move the weights out and away from each other (to the side) in an arc motion while exhaling. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise.#The arms should be elevated until they are parallel to the floor.#Feel the contraction and slowly lower the weights back down to the starting position while inhaling.#Repeat for the recommended amount of repetitions.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Side Lateral Raise",
        image: "https://i.imgur.com/OLZPsAm.png",
        description: "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position.#While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top.#Lower the dumbbells back down slowly to the starting position as you inhale.#Repeat for the recommended amount of repetitions.",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Lying Leg Curl",
        image: "https://i.imgur.com/x067i8J.png",
        description: "Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs (just a few inches under the calves). Tip: Preferably use a leg curl machine that is angled as opposed to flat since an angled position is more favorable for hamstrings recruitment.#Keeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Position your toes straight (or you can also use any of the other two stances described on the foot positioning section). This will be your starting position.#As you exhale, curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second.#As you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Leg Extension",
        image: "https://i.imgur.com/1KX8aoz.png",
        description: "For this exercise you will need to use a leg extension machine. First choose your weight and sit on the machine with your legs under the pad (feet pointed forward) and the hands holding the side bars. This will be your starting position. Tip: You will need to adjust the pad so that it falls on top of your lower leg (just above your feet). Also, make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees then that means the knee is over the toes which in turn creates undue stress at the knee joint. If the machine is designed that way, either look for another machine or just make sure that when you start executing the exercise you stop going down once you hit the 90-degree angle.#Using your quadriceps, extend your legs to the maximum as you exhale. Ensure that the rest of the body remains stationary on the seat. Pause a second on the contracted position.#Slowly lower the weight back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit.#Repeat for the recommended amount of times.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Dumbbell Lunge",
        image: "https://i.imgur.com/WIrwyXa.png",
        description: "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position.#Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground.#Using mainly the heel of your foot, push up and go back to the starting position as you exhale.#Repeat the movement for the recommended amount of repetitions and then perform with the left leg.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Machine Flat Chest Press",
        image: "https://i.imgur.com/suiIj3n.png",
        description: "Sit down on the Chest Press Machine and select the weight.#Step on the lever provided by the machine since it will help you to bring the handles forward so that you can grab the handles and fully extend the arms.#Grab the handles with a palms-down grip and lift your elbows so that your upper arms are parallel to the floor to the sides of your torso. Tip: Your forearms will be pointing forward since you are grabbing the handles. Once you bring the handles forward and extend the arms you will be at the starting position.#Now bring the handles back towards you as you breathe in.#Push the handles away from you as you flex your pecs and you breathe out. Hold the contraction for a second before going back to the starting position.#Repeat for the recommended amount of reps.#When finished step on the lever again and slowly get the handles back to their original place.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Leverage Incline Chest Press",
        image: "https://i.imgur.com/ocljgAO.png",
        description: "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position.#Press the handles forward by extending through the elbow.#After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Wide Grip Lat Pull-down",
        image: "https://i.imgur.com/JgWrtFy.png",
        description: "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.#Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.#As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.#As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms.#After a second at the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Pullups",
        image: "https://i.imgur.com/lSGSrDt.png",
        description: "Grab the pull-up bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.#As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.#Pull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.#After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.#Repeat this motion for the prescribed amount of repetitions.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Triceps Pushdown",
        image: "https://i.imgur.com/HYygncx.png",
        description: "Attach a straight or angled bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width.#Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position.#Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.#After a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step.#Repeat for the recommended amount of repetitions.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Pushups",
        image: "https://i.imgur.com/nrNU10o.png",
        description: "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length.#Next, lower yourself downward until your chest almost touches the floor as you inhale.#Now breathe out and press your upper body back up to the starting position while squeezing your chest.#After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.",
		category: "chest",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Russian Twist",
        image: "https://i.imgur.com/VZyLCTG.png",
        description: "Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees.#Elevate your upper body so that it creates an imaginary V-shape with your thighs. Your arms should be fully extended in front of you perpendicular to your torso and with the hands clasped. This is the starting position.#Twist your torso to the right side until your arms are parallel with the floor while breathing out.#Hold the contraction for a second and move back to the starting position while breathing out. Now move to the opposite side performing the same techniques you applied to the right side.#Repeat for the recommended amount of repetitions.",
		category: "abdominal",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Seated Cable Wide Grip",
        image: "https://i.imgur.com/cZ0qY71.png",
        description: "For this exercise you will need access to a low pulley row machine with a V-bar. Note: The V-bar will enable you to have a neutral grip where the palms of your hands face each other. To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.#Lean over as you keep the natural alignment of your back and grab the V-bar handles.#With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise.#Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in.#Repeat for the recommended amount of repetitions.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Seated Calf Raise",
        image: "https://i.imgur.com/JhE9Vmj.png",
        description: "Sit on the machine and place your toes on the lower portion of the platform provided with the heels extending off. Choose the toe positioning of your choice (forward, in, or out) as per the beginning of this chapter.#Place your lower thighs under the lever pad, which will need to be adjusted according to the height of your thighs. Now place your hands on top of the lever pad in order to prevent it from slipping forward.#Lift the lever slightly by pushing your heels up and release the safety bar. This will be your starting position.#Slowly lower your heels by bending at the ankles until the calves are fully stretched. Inhale as you perform this movement.#Raise the heels by extending the ankles as high as possible as you contract the calves and breathe out. Hold the top contraction for a second.#Repeat for the recommended amount of repetitions.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Seated Lateral Raise",
        image: "https://i.imgur.com/S4xsdUS.png",
        description: "Pick a couple of dumbbells and sit at the end of a flat bench with your feet firmly on the floor. Hold the dumbbells with your palms facing in and your arms straight down at your sides at arms' length. This will be your starting position.#While maintaining the torso stationary (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top.#Lower the dumbbells back down slowly to the starting position as you inhale.#Repeat for the recommended amount of repetitions.",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Dumbbell Shoulder Press",
        image: "https://i.imgur.com/378cxxK.png",
        description: "While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs.#Now raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position.#Make sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position.#Now, exhale and push the dumbbells upward until they touch at the top.#Then, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling.#Repeat for the recommended amount of repetitions.",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Shoulder Lateral Raise",
        image: "https://i.imgur.com/zOoSIuE.png",
        description: "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position.#While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top.#Lower the dumbbells back down slowly to the starting position as you inhale.#Repeat for the recommended amount of repetitions.",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Dumbbell Shoulder Press",
        image: "https://i.imgur.com/fC5a7r8.png",
        description: "While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs.#Now raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position.#Make sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position.#Now, exhale and push the dumbbells upward until they touch at the top.#Then, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling.#Repeat for the recommended amount of repetitions.",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "Shoulder Shrug",
        image: "https://i.imgur.com/Mdt86BQ.png",
        description: "Stand up straight with your feet at shoulder width as you hold a barbell with both hands in front of you using a pronated grip (palms facing the thighs). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for a better grip. This will be your starting position.#Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps.#Slowly return to the starting position as you breathe in.#Repeat for the recommended amount of repetitions.",
		category: "shoulder",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "EZ-Bar Skullcrushers",
        image: "https://i.imgur.com/wpjEt34.png",
        description: "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position.#Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead.#Lift the bar back to the starting position by extending the elbow and exhaling.#Repeat.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Barbell Squat",
        image: "https://i.imgur.com/aAllOaw.png",
        description: "Begin with the barbell supported on top of the traps. The chest should be up and the head facing forward. Adopt a hip-width stance with the feet turned out as needed.#Descend by flexing the knees, refraining from moving the hips back as much as possible. This requires that the knees travel forward. Ensure that they stay align with the feet. The goal is to keep the torso as upright as possible.#Continue all the way down, keeping the weight on the front of the heel. At the moment the upper legs contact the lower legs reverse the motion, driving the weight upward.",
		category: "leg",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
	{
        name: "T-Bar Row",
        image: "https://i.imgur.com/sFp6aRg.png",
        description: "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end.#Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position.#Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position.#Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement.#After a brief pause, return to the starting position.",
		category: "back",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Lying Dumbbell Tricep Extension",
        image: "https://i.imgur.com/GlwqVVo.png",
        description: "Lie on a flat bench while holding two dumbbells directly in front of you. Your arms should be fully extended at a 90-degree angle from your torso and the floor. The palms should be facing in and the elbows should be tucked in. This is the starting position.#As you breathe in and you keep the upper arms stationary with the elbows in, slowly lower the weight until the dumbbells are near your ears.#At that point, while keeping the elbows in and the upper arms stationary, use the triceps to bring the weight back up to the starting position as you breathe out.#Repeat for the recommended amount of repetitions.",
		category: "arm",
		author:{
			id: mongoose.Types.ObjectId('5bd0fffcfcf1502fa478d45e'),
			username: "admin"
		}
    },
    {
        name: "Upright Barbell Row",
        image: "https://i.imgur.com/mi6JEVs.png",
        description: "Grasp a barbell with an overhand grip that is slightly less than shoulder width. The bar should be resting on the top of your thighs with your arms extended and a slight bend in your elbows. Your back should also be straight. This will be your starting position.#Now exhale and use the sides of your shoulders to lift the bar, raising your elbows up and to the side. Keep the bar close to your body as you raise it. Continue to lift the bar until it nearly touches your chin. Tip: Your elbows should drive the motion, and should always be higher than your forearms. Remember to keep your torso stationary and pause for a second at the top of the movement.#Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.#Repeat for the recommended amount of repetitions.",
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
   ExerciseCategory.create({name:"arm",image:"https://i.imgur.com/8tlpjMK.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"back",image:"https://i.imgur.com/v7ttIvT.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"leg",image:"https://i.imgur.com/8PWiJNK.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"shoulder",image:"https://i.imgur.com/SM0erl7.jpg"},function(err, list){
	 if(err){
		 console.log(err)
	 } else {
	 }
   });
   ExerciseCategory.create({name:"abdominal",image:"https://i.imgur.com/lNKBEPu.jpg"},function(err, list){
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
                Exercise.create(seed, function(err, exercise){
                    if(err){
                        console.log(err)
                    }
					if(exercise.category == "chest"){
						ExerciseCategory.findOne({name:"chest"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});
					}
					else if(exercise.category == "arm"){
						ExerciseCategory.findOne({name:"arm"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "back"){
						ExerciseCategory.findOne({name:"back"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "leg"){
						ExerciseCategory.findOne({name:"leg"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "shoulder"){
						ExerciseCategory.findOne({name:"shoulder"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
					else if(exercise.category == "abdominal"){
						ExerciseCategory.findOne({name:"abdominal"},function(err,exCat){
							exCat.exerciseList.push(exercise);
							exCat.save();
						});

					}
                });
            });
        });
    });
}

module.exports = seedDB;
