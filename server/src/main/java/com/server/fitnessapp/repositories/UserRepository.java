package com.server.fitnessapp.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.server.fitnessapp.models.User;

@Repository
public class UserRepository {
    
    private final String SQL_INSERT_USER = "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)";
    private final String SQL_GET_USER_BY_EMAIL = "SELECT * FROM users WHERE email = ?";

    private final String SQL_DELETE_USER_BY_EMAIL = "DELETE FROM users WHERE email = ?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // returns 1 if successfully inserted, 0 if not
    public Integer addUser(User user) {
        return jdbcTemplate.update(SQL_INSERT_USER, user.getName(), user.getEmail(), user.getPassword());
    }

    public boolean checkExistingEmail(String email) {
        SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_GET_USER_BY_EMAIL, email);
        return rs.next();
    }


    // get user from db
    public User getUser(String email) {
        SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_GET_USER_BY_EMAIL, email);
        User u = new User();
        while(rs.next()) {
            u.setName(rs.getString("name"));
            u.setEmail(rs.getString("email"));
            u.setPassword(rs.getString("password_hash"));
        }
        return u;
    }

    // validate password of user
    public boolean validatePassword(String dbPassword, String inputPassword) {
        System.out.println("input password: " + inputPassword);
        System.out.println("DB password: " + dbPassword);
        if (dbPassword.equals(inputPassword)) {
            System.out.println("Password Matches!");
        } else {
            System.out.println("Password Dont Match!");
        }

        return dbPassword.equals(inputPassword);
    }

    public Integer removeUser(String email) {
        return jdbcTemplate.update(SQL_DELETE_USER_BY_EMAIL, email);
    }

}
