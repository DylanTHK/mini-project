package com.server.fitnessapp.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonValue;

public class Location {
    private Position position;
    private String name;
    
    public Position getPosition() {
        return position;
    }
    public void setPosition(Position position) {
        this.position = position;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Location [position=" + position + ", name=" + name + "]";
    }
    
    public static Location toLocation(JsonObject obj) {

        Location l = new Location();
        JsonObject geo = obj.getJsonObject("geometry").getJsonObject("location");
        Position p = new Position();
        p.setLat(geo.getJsonNumber("lat").doubleValue());
        p.setLng(geo.getJsonNumber("lng").doubleValue());

        l.setPosition(p);
        l.setName(obj.getString("name"));
        
        return l;
    }

    public JsonObject toJson() {
        
        JsonObject pos = Json.createObjectBuilder()
            .add("lat", position.getLat())
            .add("lng", position.getLng())
            .build();

        JsonObject obj = Json.createObjectBuilder()
                .add("position", pos)
                .add("name", name)
                .build();

        return obj;
    }


}
