package com.server.fitnessapp.models;

import java.util.List;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class StandardWorkout {
    String label;
    String name;
    String url;
    List<String> desc;

    public String getLabel() {
        return label;
    }
    public void setLabel(String label) {
        this.label = label;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public List<String> getDesc() {
        return desc;
    }
    public void setDesc(List<String> desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return "StandardWorkout [label=" + label + ", name=" + name + ", url=" + url + ", desc=" + desc + "]";
    }

    public JsonObject toJson() {
        JsonArray descJsonArray = Json.createArrayBuilder(desc).build();

        return Json.createObjectBuilder()
                .add("label", label)
                .add("name", name)
                .add("url", url)
                .add("desc", descJsonArray)
                .build();
    }
    
    
}
