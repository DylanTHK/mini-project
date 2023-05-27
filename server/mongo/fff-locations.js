use fitness;

db.savedLocations.insert({
    "email": "3",
    "name": "002 Fitness Corner",
    "position": {"lat":1.3314727,"lng":103.9357318},
})

db.savedLocations.find();
db.savedLocations.find( {email: "3"} );
db.savedLocations.deleteMany( {name: "111 Fitness Corner"} )