package com.server.fitnessapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.fitnessapp.models.ConfirmationEmail;
import com.server.fitnessapp.services.EmailService;

@RestController
@RequestMapping(path="/api/email")
public class EmailController {

    @Autowired
    private EmailService emailSvc;

    @PostMapping (path="/confirmation")
    public ResponseEntity<String> sendConfirmationEmail( 
        @RequestParam String receiver,
        @RequestBody String body) {
            // fixed sender
            String sender = "fitnessforfreee@gmail.com";

            ConfirmationEmail emailData = ConfirmationEmail.create(sender, receiver, body);
            
            boolean result = emailSvc.sendEmail(emailData);

            if (result) {
                return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body("Email Sent");
            } else {
                return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body("Error sending email");
            }

    }
}
