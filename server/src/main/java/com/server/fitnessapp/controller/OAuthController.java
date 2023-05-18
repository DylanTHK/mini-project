package com.server.fitnessapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/oauth")
public class OAuthController {
    

    // ===== TOKEN =====
    // TODO:
    @GetMapping("/token")
    public ResponseEntity<String> getToken() {
        
        return null;
    }

    // TODO:
    @PostMapping("/token")
    public ResponseEntity<String> updateToken() {
        
        return null;
    }
}
