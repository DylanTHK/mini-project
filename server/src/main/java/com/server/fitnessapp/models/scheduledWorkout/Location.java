package com.server.fitnessapp.models.scheduledWorkout;

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
    
    
}
