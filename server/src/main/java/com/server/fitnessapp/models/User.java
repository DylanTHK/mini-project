package com.server.fitnessapp.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class User {
    String name;
    String email;
    String password;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User [name=" + name + ", email=" + email + ", password=" + password + "]";
    }

    public static User toUser(JsonObject userData) {
        User u = new User();
        u.setName(userData.getString("name"));
        u.setEmail(userData.getString("email"));
        u.setPassword(userData.getString("password"));
        return u;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("name", name)
            .add("email", email)
            .add("password", password)
            .build();
    }
    
}
