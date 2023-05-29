use fitness;

// add scheduled data
db.scheduledWorkouts.insert({
    "email": "3",
    "date": "2023-11-01",
    "sets": 3,
    "time": "10:00",
    "location": {
        "name": "Fitness Corner by NParks",
        "position": {"lat": 1.3358414, "lng": 103.9315919}
    },
    "workouts": [
        {"name": "Jump Squat", "selected": true, "quantity": 5},
        {"name": "Push Ups", "selected": true, "quantity": 5},
        {"name": "Sit Ups", "selected": true, "quantity": 5},
        {"name": "Pull Ups", "selected": true, "quantity": 5}
    ],

});

db.getCollection("scheduledWorkouts").find({})
db.scheduledWorkouts.deleteMany({"workouts": []});


db.scheduledWorkouts.find();
db.scheduledWorkouts.deleteMany( { email: "3" } );