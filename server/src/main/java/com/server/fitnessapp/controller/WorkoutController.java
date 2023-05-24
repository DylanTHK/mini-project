package com.server.fitnessapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.fitnessapp.models.StandardWorkout;
import com.server.fitnessapp.services.WorkoutsService;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

import java.io.StringReader;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


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

    @PostMapping(path="/add-workout")
    public ResponseEntity<String> addScheduledWorkout(@RequestBody String body) {
        // JsonReader reader = Json.createReader(new StringReader(body));
        // JsonObject workout = reader.readObject();

        Document workoutDoc = Document.parse(body);
        Boolean resp = workoutsSvc.addScheduledWorkout(workoutDoc);
        // String respString = Json.createObjectBuilder()
        //     .add("added", resp)
        //     .build().toString();

        return ResponseEntity
        .status(HttpStatus.OK)
        .contentType(MediaType.APPLICATION_JSON)
        .body(resp.toString());
    }
    

}
