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

@Repository
public class WorkoutsRepository {
    
    private final String COLLECTION_WORKOUTS = "workouts";
    private final String COLLECTION_SCHEDULED_WORKOUTS = "scheduledWorkouts";
    private final String COLLECTION_SAVED_LOCATIONS = "savedLocations";

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<StandardWorkout> getStandardWorkouts() {
        List<StandardWorkout> allWorkouts = mongoTemplate
            .findAll(StandardWorkout.class, COLLECTION_WORKOUTS);
        System.out.println("All workouts: " + allWorkouts);
        return allWorkouts;
    }

    public Document insertScheduledWorkout(Document workoutDoc) {
        System.out.println("inserting document");
        return mongoTemplate.insert(workoutDoc, COLLECTION_SCHEDULED_WORKOUTS);
    }

    // TODO: 
    public void getAllScheduledWorkoutsByEmail(String email) {
        System.out.println("retrieving documents");
    }

    // FIXME: Add saved location to Mongo
    public Document addLocation(Document location) {
        // convert POJO to Document
    
        return mongoTemplate.insert(location, COLLECTION_SAVED_LOCATIONS);
    }

    public void getLocationByName(String name) {

    }
    // Doing get all locations by Email
    public List<Document> getAllSavedLocationsByEmail(String email) {
        System.out.println("query database");
        Criteria c = Criteria.where("email").is(email);
        Query query = new Query(c);
        List<Document> resp = mongoTemplate.find(query, Document.class, COLLECTION_SAVED_LOCATIONS);
        System.out.println(resp);
        return resp;
    }
}
