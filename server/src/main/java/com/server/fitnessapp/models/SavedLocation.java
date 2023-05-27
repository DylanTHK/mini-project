package com.server.fitnessapp.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class SavedLocation {
    String email;
    String name;
    Position position;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Position getPosition() {
        return position;
    }
    public void setPosition(Position position) {
        this.position = position;
    }

    @Override
    public String toString() {
        return "SavedLocation [email=" + email + ", name=" + name + ", position=" + position + "]";
    }

    public static SavedLocation create(JsonObject locationJson, String email) {
        Position p = new Position();
        p.setLat(locationJson.getJsonObject("position").getJsonNumber("lat").doubleValue());
        p.setLng(locationJson.getJsonObject("position").getJsonNumber("lng").doubleValue());
        SavedLocation l = new SavedLocation();
        l.setName(locationJson.getString("name"));
        l.setPosition(p);
        l.setEmail(email);
        return l;
    }

    public JsonObject toJson() {
        JsonObjectBuilder p = Json.createObjectBuilder()
            .add("lat", position.getLat())
            .add("lng", position.getLng());

        JsonObject obj = Json.createObjectBuilder()
            .add("email", email)
            .add("name", name)
            .add("position", p)
            .build();
        return obj;
    }

    
}
