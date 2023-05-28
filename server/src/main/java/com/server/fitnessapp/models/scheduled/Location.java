package com.server.fitnessapp.models.scheduled;

import java.io.StringReader;

import org.bson.Document;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

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
        l.setName(locationJson.getString("name"));
        l.setPosition(p);
        return l;
    }

    public static Location create(Document doc) {
        String jsonString = doc.toJson();
        JsonObject obj = Json.createReader(new StringReader(jsonString)).readObject();
        return Location.create(obj);
    }

    public JsonObject toJson() {
        JsonObjectBuilder positionBuilder = Json.createObjectBuilder()
            .add("lat", position.getLat())
            .add("lng", position.getLng());

        return Json.createObjectBuilder()
            .add("name", name)
            .add("position", positionBuilder)
            .build();
    }
    
    
}
