package com.server.fitnessapp.models.scheduledWorkout;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class ScheduledWorkout {
    String email;
    String date;
    Integer sets;
    String time;
    Location location;
    SelectedWorkout[] workouts;

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public Integer getSets() {
        return sets;
    }
    public void setSets(Integer sets) {
        this.sets = sets;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public Location getLocation() {
        return location;
    }
    public void setLocation(Location location) {
        this.location = location;
    }
    public SelectedWorkout[] getWorkouts() {
        return workouts;
    }
    public void setWorkouts(SelectedWorkout[] workouts) {
        this.workouts = workouts;
    }

    @Override
    public String toString() {
        return "ScheduledWorkout [email=" + email + ", date=" + date + ", sets=" + sets + ", time=" + time
                + ", location=" + location + ", workouts=" + workouts + "]";
    }

    public JsonObject toJson() {
        JsonArrayBuilder workoutsArray = Json.createArrayBuilder();
        
        for (int i = 0; i < workouts.length; i++) {
            JsonObjectBuilder workoutsJson = Json.createObjectBuilder()
                .add("name", workouts[i].getName())
                .add("selected", workouts[i].getSelected())
                .add("quantity", workouts[i].getQuantity());
            workoutsArray.add(workoutsJson);
        }

        JsonObjectBuilder positionJson = Json.createObjectBuilder()
            .add("lat", location.getPosition().getLat())
            .add("lng", location.getPosition().getLng());

        JsonObjectBuilder locationJson = Json.createObjectBuilder()
            .add("name", location.getName())
            .add("position", positionJson);

        return Json.createObjectBuilder()
            .add("email", email)
            .add("date", date)
            .add("sets", sets)
            .add("time", time)
            .add("location", locationJson)
            .add("workouts", workoutsArray)
            .build();
    }

    public static ScheduledWorkout create() {
        

        return null;
    }
    
    
}
