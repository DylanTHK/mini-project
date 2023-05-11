package com.server.fitnessapp.models;

public class Position {
    double lat;
    double lng;

    public double getLat() {
        return lat;
    }
    public void setLat(double lat) {
        this.lat = lat;
    }
    public double getLng() {
        return lng;
    }
    public void setLng(double lng) {
        this.lng = lng;
    }

    @Override
    public String toString() {
        return "Position [lat=" + lat + ", lng=" + lng + "]";
    }
    
}
