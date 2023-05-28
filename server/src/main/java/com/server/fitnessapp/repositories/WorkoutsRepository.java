package com.server.fitnessapp.repositories;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.server.fitnessapp.models.SavedLocation;
import com.server.fitnessapp.models.StandardWorkout;
import com.server.fitnessapp.models.scheduled.Location;
import com.server.fitnessapp.models.scheduled.ScheduledWorkout;

@Repository
public class WorkoutsRepository {
    
    private final String COLLECTION_WORKOUTS = "workouts";
    private final String COLLECTION_SCHEDULED_WORKOUTS = "scheduledWorkouts";
    private final String COLLECTION_SAVED_LOCATIONS = "savedLocations";

    @Autowired
    private MongoTemplate mongoTemplate;

    // Standard Workouts (Pushup, Situp, Jump squat, Pullup)
    public List<StandardWorkout> getStandardWorkouts() {
        List<StandardWorkout> allWorkouts = mongoTemplate
            .findAll(StandardWorkout.class, COLLECTION_WORKOUTS);
        return allWorkouts;
    }

    // INSERT scheduled workout (workout details + date + time)
    public Document insertScheduledWorkout(Document workoutDoc) {
        return mongoTemplate.insert(workoutDoc, COLLECTION_SCHEDULED_WORKOUTS);
    }
    // GET All scheduled workouts
    public List<ScheduledWorkout> getAllScheduledWorkoutsByEmail(String email) {
        Criteria c = Criteria.where("email").is(email);
        Query query = new Query(c);
        return mongoTemplate.find(query, ScheduledWorkout.class, COLLECTION_SCHEDULED_WORKOUTS);
    }

    // Add saved location to Mongo
    public SavedLocation addLocation(SavedLocation location) {    
        return mongoTemplate.insert(location, COLLECTION_SAVED_LOCATIONS);
    }

    // Doing get all locations by Email
    public List<Document> getAllSavedLocationsByEmail(String email) {
        Criteria c = Criteria.where("email").is(email);
        Query query = new Query(c);
        List<Document> resp = mongoTemplate.find(query, Document.class, COLLECTION_SAVED_LOCATIONS);
        return resp;
    }
}
