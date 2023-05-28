package com.server.fitnessapp.models;

import java.io.StringReader;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class ConfirmationEmail {
    String sender;
    String receiver;
    String subject;
    String date;
    String time;
    String location;

    public String getSender() {
        return sender;
    }
    public void setSender(String sender) {
        this.sender = sender;
    }
    public String getReceiver() {
        return receiver;
    }
    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    @Override
    public String toString() {
        return "ConfirmationEmail [sender=" + sender + ", receiver=" + receiver + ", subject=" + subject + ", date="
                + date + ", time=" + time + ", location=" + location + "]";
    }

    public static ConfirmationEmail create(String sender, String receiver, String jsonString) {
        JsonObject obj = Json.createReader(new StringReader(jsonString)).readObject();
        ConfirmationEmail c = new ConfirmationEmail();
        c.setReceiver(receiver);
        c.setSender(sender);
        c.setSubject(obj.getString("subject"));
        c.setDate(obj.getString("date"));
        c.setTime(obj.getString("time"));
        c.setLocation(obj.getString("location"));
        return c;
    }
    

}
