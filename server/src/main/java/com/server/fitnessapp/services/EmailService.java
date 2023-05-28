package com.server.fitnessapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.server.fitnessapp.models.ConfirmationEmail;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender emailSender;

    private String messageTemplate = """
            Confirmation Details for your workout session\n
            Date: <Date>\n
            Time: <Time>\n
            Location: <Location>\n
            Link: https://fitnessForFree.com
            """;

    public boolean sendEmail(ConfirmationEmail emailData) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(emailData.getSender());
        message.setTo(emailData.getReceiver());
        message.setSubject(emailData.getSubject());
        message.setText(insertValues(messageTemplate, emailData));
        try {
            emailSender.send(message);
            return true;
        } catch (MailException e) {
            e.printStackTrace();
            return false;
        }
    }

    public String insertValues(String template, ConfirmationEmail emailData) {
        String newTemplate = template;
        newTemplate = newTemplate.replace("<Date>", emailData.getDate());
        newTemplate = newTemplate.replace("<Time>", emailData.getTime());
        newTemplate = newTemplate.replace("<Location>", emailData.getLocation());

        return newTemplate;
    }
}
