package com.server.fitnessapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.fitnessapp.models.StandardWorkout;
import com.server.fitnessapp.services.WorkoutsService;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {
    
    @Autowired
    private WorkoutsService workoutsSvc;

    @GetMapping(path="/standard")
    public ResponseEntity<String> getMethodName() {
        
        List<StandardWorkout> allWorkouts = workoutsSvc.getStandardWorkouts();
        // convert list of objects to JsonObject
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        allWorkouts.stream()
            .forEach(workout -> {
                arrayBuilder.add(workout.toJson());
            });

        return ResponseEntity
        .status(HttpStatus.OK)
        .contentType(MediaType.APPLICATION_JSON)
        .body(arrayBuilder.build().toString());
    }
    

}
