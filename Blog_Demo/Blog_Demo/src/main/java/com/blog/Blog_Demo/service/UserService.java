package com.blog.Blog_Demo.service;

import com.blog.Blog_Demo.models.User;

import Requests.LoginRequest;

public interface UserService {
//    User findByUsername(String username);
//    User saveUser(User user);
//    User findById(Long id);
	User addUsers(User user);
	Boolean loginUser(LoginRequest loginRequest);
}
