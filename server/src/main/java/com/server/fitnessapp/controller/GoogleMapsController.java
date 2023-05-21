package com.server.fitnessapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.fitnessapp.models.GoogleLocation;
import com.server.fitnessapp.services.LocationsService;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;

@RestController
@RequestMapping(path="/api")
public class GoogleMapsController {
    
    @Autowired
    private LocationsService locationSvc;

    // Get Fitness corner locations
    @GetMapping(path="/fitness")
    public ResponseEntity<String> getFitnessCorners(
        @RequestParam(defaultValue="1.332326 103.936659") String location,
        @RequestParam(defaultValue="500") String radius) {
        
        System.out.println("making API call");
        // making API call (fitness corners)
        List<GoogleLocation> list = locationSvc.searchNearbyLocation(location, radius);

        JsonArrayBuilder jsonArray = Json.createArrayBuilder();

        list.stream()
            .forEach(l -> {
                // add toJson (in object)
                jsonArray.add(l.toJson());
            });

        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(jsonArray.build().toString());
    }
}
