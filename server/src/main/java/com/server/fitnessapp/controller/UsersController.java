package com.server.fitnessapp.controller;

import java.io.StringReader;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.fitnessapp.models.User;
import com.server.fitnessapp.models.UserResponse;
import com.server.fitnessapp.services.UserService;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonReader;

@RestController
@RequestMapping("/api/user")
public class UsersController {
    
    @Autowired
    private UserService userSvc;

    // Registering user with json data from Angular - 17/5
    @PostMapping("/register-user")
    public ResponseEntity<String> registerUser(@RequestBody String userData) {
        
        JsonReader reader = Json.createReader(new StringReader(userData));
        JsonObject obj = reader.readObject();
        User user = User.toUser(obj);
        
        boolean result = userSvc.registerUser(user);
        System.out.println(result);

        JsonObjectBuilder respBuilder = Json.createObjectBuilder();
        
        if (result) {
            respBuilder
                .add("created", result)
                .add("message", "User added");
            String resp = respBuilder.build().toString();
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(resp);
        } else {
            respBuilder
                .add("created", result)
                .add("message", "User already exists");
            String resp = respBuilder.build().toString();
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(resp);
        }
    }

    // Log in and authenticate user with email - 17/5
    @GetMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String email, @RequestParam String password) {
        // JsonReader reader = Json.createReader(new StringReader(userData));
        // JsonObject userJson = reader.readObject();

        Optional<UserResponse> opt = userSvc.loginUser(email, password);

        JsonObjectBuilder respBuilder = Json.createObjectBuilder();
        // System.out.println(opt.isPresent());
        // System.out.println(opt.isEmpty());
        if (opt.isPresent()) {
            UserResponse u = opt.get();
            u.toJson();

            String resp = respBuilder
                .add("loginStatus", true)
                .add("info", u.toJson())
                .build()
                .toString();

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(resp);
        } else {
            String resp = respBuilder
                .add("loginStatus", false)
                .add("message", "Incorrect ID or Password")
                .build()
                .toString();
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(resp);    
        }
    }

    // Delete user request from Angular - 17/5
    @PutMapping("/delete-user")
    public ResponseEntity<String> deleteUser(@RequestParam String email) {
        // System.out.println(email);
        boolean result = userSvc.removeUser(email);

        JsonObjectBuilder respBuilder = Json.createObjectBuilder();

        if (result) {
            respBuilder
                .add("deleteSatus", result)
                .add("message", "User deleted");
            String resp = respBuilder.build().toString();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(resp);
        } else {
            respBuilder
                .add("deleteSatus", result)
                .add("message", "No user found with email");
            String resp = respBuilder.build().toString();
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(resp);
        }
    }





}
