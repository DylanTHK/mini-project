package com.server.fitnessapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.fitnessapp.models.SavedLocation;
import com.server.fitnessapp.models.StandardWorkout;
import com.server.fitnessapp.models.scheduled.Location;
import com.server.fitnessapp.services.WorkoutsService;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

import java.io.StringReader;
import java.util.ArrayList;
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

    @PostMapping(path="/add-location")
    public ResponseEntity<String> addLocation(
        @RequestBody String location, @RequestParam String email) {
            
            JsonReader reader = Json.createReader(new StringReader(location));
            JsonObject locationJson = reader.readObject();
            System.out.println("\n\nlocation JsonObj: " + locationJson);

            SavedLocation loc = SavedLocation.create(locationJson, email);
            System.out.println("saved location POJO: " + locationJson);

            Document doc = Document.parse(loc.toJson().toString());
            System.out.println("Location Document: " + doc);
            Document respLoc = workoutsSvc.addLocation(doc);
            String resp = "true";
            if (null != respLoc) {
                resp = "true";
            } else {
                resp = "false";
            }

            return ResponseEntity
            .status(HttpStatus.OK)
            .contentType(MediaType.APPLICATION_JSON)
            .body("resp");
    }

    @GetMapping(path="/all-locations")
    public ResponseEntity<String> getAllLocations(@RequestParam String email) {
        List<Document> locationsDoc = workoutsSvc.getAllLocations(email);
        System.out.println("\n\nlocationDocs: " + locationsDoc + "\n");

        // List<Location> locationList = new ArrayList<>();
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();

        locationsDoc.stream().forEach(doc -> {
            // Location l = new Location();
            Location l = Location.create(doc);
            arrayBuilder.add(l.toJson());
        });
        
        return ResponseEntity
            .status(HttpStatus.OK)
            .contentType(MediaType.APPLICATION_JSON)
            // .body(arrayBuilder.build().toString());
            .body(arrayBuilder.build().toString());
    }
    
    

}
