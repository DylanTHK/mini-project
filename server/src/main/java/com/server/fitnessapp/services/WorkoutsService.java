package com.server.fitnessapp.services;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.fitnessapp.models.SavedLocation;
import com.server.fitnessapp.models.StandardWorkout;
import com.server.fitnessapp.models.scheduled.ScheduledWorkout;
import com.server.fitnessapp.repositories.WorkoutsRepository;

@Service
public class WorkoutsService {
    
    @Autowired
    private WorkoutsRepository workoutsRepo;

    public List<StandardWorkout> getStandardWorkouts() {
        return workoutsRepo.getStandardWorkouts();
    }

    public Boolean addScheduledWorkout(Document workoutDoc) {
        if (null != workoutsRepo.insertScheduledWorkout(workoutDoc)) {
            return true;
        };
        return false;
    }

    public List<ScheduledWorkout> getAllWorkouts(String email) {
        return workoutsRepo.getAllScheduledWorkoutsByEmail(email);
    }

    public SavedLocation addLocation(SavedLocation location) {
        String email = location.getEmail();
        String name = location.getName();
        // get all saved locations
        List<Document> locationsDoc = workoutsRepo.getAllSavedLocationsByEmail(email);
        // Checking for existing entry
        boolean existing = locationsDoc.stream()
            .anyMatch( d -> d.getString("name").equals(name));
        if (existing) {
            System.out.println("Existing entry found");
            return null;
        } else {
            System.out.println("Adding location");
            return workoutsRepo.addLocation(location);
        }
    }

    public List<Document> getAllLocations(String email) {
        return workoutsRepo.getAllSavedLocationsByEmail(email);
    }
}
