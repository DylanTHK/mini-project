package com.server.fitnessapp.models.scheduled;

import jakarta.json.JsonObject;

public class Location {
    String name;
    Position position;

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
        return "Location [name=" + name + ", position=" + position + "]";
    }

    public static Location create(JsonObject locationJson) {
        Position p = new Position();
        p.setLat(locationJson.getJsonObject("position").getJsonNumber("lat").doubleValue());
        p.setLng(locationJson.getJsonObject("position").getJsonNumber("lng").doubleValue());
        Location l = new Location();
        l.setName(locationJson.get("name").toString());
        l.setPosition(p);
        return l;
    }
    
    
}
