use fitness;

// Add workout data to database
db.workouts.insertMany([
{
    label: "sit-ups",
    name : "Sit Ups",
    url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400_400_8_Calisthenics_Exercises_for_Beginners_Crunches.gif",
    desc: [
        "Lay on the ground with your back flat.",
        "Place your feet flat on the ground, bending your knees up at a 90-degree angle to your body.",
        "Cross your hands on top of your chest and keep your head about a fist's distance from your chest.",
        "Keeping your core tight, sit up until your elbows or chest touch your knees.",
        "Focus on using your core muscles to pull you up, breathing out as you sit up and breathing in as you lie down."
    ]
},
{
    label: "push-ups",
    name : "Push Ups",
    url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_8_Calisthenics_Pushups.gif",
    desc: [
        "Get on your knees and place your hands underneath, but slightly outside, your shoulders.",
        "Extend your legs while holding your body up with your arms, getting into plank position.",
        "Lower your body by bending your elbows close to your body until your chest almost touches the floor.",
        "Your upper arms should form a 45-degree angle when the top part of your body is in the lower pushup position.",
        "Keep your abdomen, or core, flexed during the entire movement."
    ]
},
{
    label: "pull-ups",
    name : "Pull Ups",
    url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_8_Calisthenics_Exercises_for_Beginners_Pullup.gif",
    desc: [
        "Stand facing an exercise bar.",
        "Grasp the bar from the top with your arms slightly more than shoulder-width apart.",
        "Use your shoulder muscles to pull you up, bringing your head up over the bar."
    ]
},
{
    label: "jump-squats",
    name : "Jump Squats",
    url: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_8_Calisthenics_Exercises_for_Beginners_Squat_Jumps.gif",
    desc: [
        "Stand with your body facing forward and your feet parallel, directly underneath your shoulders.",
        "Move your feet a few inches apart with your toes pointed slightly outward.",
        "Lower yourself into the squat, lowering your hips back and down while bending your knees.",
        "Keep your chest upright, with your head and face forward.",
        "Get into as deep a squat as possible, and then explode forcefully upward into a jump."
    ]
}
]);

db.workouts.find();

// add scheduled data
db.scheduledWorkouts.insert({
    "date": "2023-11-01",
    "location": {
        "name": "Fitness Corner by NParks",
        "position": {"lat": 1.3358414, "lng": 103.9315919}
    },
    "sets": 3,
    "time": "10:00",
    "workouts": [
        {"name": "Jump Squat", "selected": true, "quantity": 5},
        {"name": "Push Ups", "selected": true, "quantity": 5},
        {"name": "Sit Ups", "selected": true, "quantity": 5},
        {"name": "Pull Ups", "selected": true, "quantity": 5}
    ],
    email: "3"
});

db.scheduledWorkouts.find();