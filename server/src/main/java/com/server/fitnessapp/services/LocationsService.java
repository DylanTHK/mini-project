package com.server.fitnessapp.services;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.server.fitnessapp.models.GoogleLocation;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonReader;

@Service
public class LocationsService {
    
    @Value("${google.api.url}")
    private String LOCATION_URL;

    @Value("${google.api.key}")
    private String LOCATION_KEY;

    public List<GoogleLocation> searchNearbyLocation(String location, String radius) {
        
        List<GoogleLocation> locList = new ArrayList<>();

        String url = UriComponentsBuilder.fromUriString(LOCATION_URL)
            .queryParam("keyword", "fitness corner")
            .queryParam("radius", radius)
            .queryParam("location", location)
            .queryParam("key", LOCATION_KEY)
            .build().toString();

        RequestEntity<Void> req = RequestEntity.get(url)
            .accept(MediaType.APPLICATION_JSON)
            .build();

        RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> resp = null;
        
		try {
            resp = restTemplate.exchange(req, String.class);
        } catch(RestClientException e) {
            e.printStackTrace();
            return Collections.emptyList();
        }

        // convert response to list of Locations
        JsonReader reader = Json.createReader(new StringReader(resp.getBody()));
        JsonArray array = reader.readObject()
            .getJsonArray("results");

        // converts each jsonobject to POJO and add to list
        array.stream()
            .map(m -> m.asJsonObject())
            .forEach(m -> {
                GoogleLocation l = GoogleLocation.toLocation(m);
                locList.add(l);
            });

        return locList;
    }


}
