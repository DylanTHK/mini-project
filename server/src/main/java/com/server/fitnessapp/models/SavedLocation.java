package com.server.fitnessapp.models;

import jakarta.json.JsonObject;

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
        l.setName(locationJson.get("name").toString());
        l.setPosition(p);
        l.setEmail(email);
        return l;
    }

    
}
