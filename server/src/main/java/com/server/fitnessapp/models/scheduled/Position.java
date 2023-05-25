package com.server.fitnessapp.models.scheduled;

public class Position {
    Double lat;
    Double lng;

    public Double getLat() {
        return lat;
    }
    public void setLat(Double lat) {
        this.lat = lat;
    }
    public Double getLng() {
        return lng;
    }
    public void setLng(Double lng) {
        this.lng = lng;
    }

    @Override
    public String toString() {
        return "Position [lat=" + lat + ", lng=" + lng + "]";
    }

    
}
