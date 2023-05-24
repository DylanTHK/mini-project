package com.server.fitnessapp.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.server.fitnessapp.models.StandardWorkout;

@Repository
public class WorkoutsRepository {
    
    private final String COLLECTION_WORKOUTS = "workouts";
    private final String COLLECTION_SCHEDULED_WORKOUTS = "scheduledWorkouts";

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<StandardWorkout> getStandardWorkouts() {
        List<StandardWorkout> allWorkouts = mongoTemplate
            .findAll(StandardWorkout.class, COLLECTION_WORKOUTS);
        System.out.println("All workouts: " + allWorkouts);
        return allWorkouts;
    }

    public void insertScheduledWorkout() {

    }

}
