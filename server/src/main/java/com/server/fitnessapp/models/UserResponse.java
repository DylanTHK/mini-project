package com.server.fitnessapp.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class UserResponse {
    String sub = " ";
    String email;
    String name;
    String picture = " ";

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

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

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    @Override
    public String toString() {
        return "UserResponse [sub=" + sub + ", email=" + email + ", name=" + name + ", picture=" + picture + "]";
    }

    public static UserResponse toUser(JsonObject userData) {
        UserResponse u = new UserResponse();
        u.setSub(userData.getString("sub"));
        u.setEmail(userData.getString("email"));
        u.setName(userData.getString("name"));
        u.setPicture(userData.getString("picture"));
        return u;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("sub", sub)
            .add("name", name)
            .add("email", email)
            .add("picture", picture)
            .build();
    }
}
