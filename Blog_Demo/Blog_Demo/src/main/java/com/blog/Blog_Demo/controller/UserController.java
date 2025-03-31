package com.blog.Blog_Demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.blog.Blog_Demo.models.User;
import com.blog.Blog_Demo.service.UserService;

import Requests.LoginRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/addUser")
    @CrossOrigin("*")
    public User addUser(@RequestBody User user) {
    	return userService.addUsers(user);
    }
    
    @PostMapping("/loginUser")
    @CrossOrigin("*")
    public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
    	return userService.loginUser(loginRequest);
    }
  
    
}    
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody User user) {
//        try {
//            User newUser = userService.saveUser(user);
//            return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//        }
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody User user) {
//        User existingUser = userService.findByUsername(user.getUsername());
//        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
//            return ResponseEntity.ok(existingUser);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
//        }
//    }
//
//    @GetMapping("/user/{id}")
//    public ResponseEntity<?> getUserById(@PathVariable Long id) {
//        User user = userService.findById(id);
//        if (user != null) {	
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        }
//    }
    
    

