package com.server.fitnessapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.fitnessapp.models.StandardWorkout;
import com.server.fitnessapp.repositories.WorkoutsRepository;

@Service
public class WorkoutsService {
    
    @Autowired
    private WorkoutsRepository workoutsRepo;

    public List<StandardWorkout> getStandardWorkouts() {
        return workoutsRepo.getStandardWorkouts();
    }

}
