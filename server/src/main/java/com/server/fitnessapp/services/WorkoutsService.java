package com.server.fitnessapp.services;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.fitnessapp.models.SavedLocation;
import com.server.fitnessapp.models.StandardWorkout;
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

    public Document addLocation(Document location) {
        return workoutsRepo.addLocation(location);
    }

    public List<Document> getAllLocations(String email) {
        return workoutsRepo.getAllSavedLocationsByEmail(email);
    }
}
