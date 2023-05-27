package com.server.fitnessapp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.fitnessapp.models.User;
import com.server.fitnessapp.models.UserResponse;
import com.server.fitnessapp.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;

    // Check for existing before adding new user to db
    public boolean registerUser(User user) {
        // check if user is existing
        boolean exists = userRepo.checkExistingEmail(user.getEmail());
        // add user to db
        if (!exists) {
            userRepo.addUser(user);
            return true;
        } else {
            return false;
        }
    }

    // check if input password matches password in db
    public Optional<UserResponse> loginUser(String email, String password) {
        // find user with email
        String passwordDb = userRepo.getPassword(email);
        // check password
        boolean passwordMatch = userRepo.validatePassword(passwordDb, password);
        // return user if validate = true
        if (passwordMatch) {
            return Optional.of(userRepo.getUser(email));
        } else {
            return Optional.empty();
        }
    }

    public boolean removeUser(String email) {
        Integer rowsAffected = userRepo.removeUser(email);
        return (rowsAffected >= 1) ? true : false;
    }


}
