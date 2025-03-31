package com.blog.Blog_Demo.service;

import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.blog.Blog_Demo.models.User;
import com.blog.Blog_Demo.repository.UserRepository;

import Requests.LoginRequest;

@Service
public class UserServiceImp implements UserService {
	
	@Autowired
    private UserRepository userRepository;
	
//	private AtomicInteger idCounter = new AtomicInteger(1);


//    @Override
//    public User findByUsername(String username) {
//        return userRepository.findByUsername(username);
//    }
//
//    @Override
//    public User saveUser(User user) {
//        return userRepository.save(user);
    
//	private AtomicInteger idCounter = new AtomicInteger(1);
//

//    @Override
//    public User findByUsername(String username) {
//        if ("sanskruti".equals(username)) {
//            User user = new User();
//            user.setId(1L); // Set ID to 1
//            user.setUsername("sanskruti");
//            user.setPassword("sansm16");
//            return user;
//        } else if ("sans".equals(username)) {
//            User user = new User();
//            user.setId(2L); // Set ID to 2
//            user.setUsername("sans");
//            user.setPassword("sans16");
//            return user;
//        }
//        return null;
//    }

//    @Override
//    public User saveUser(User user) {
//        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
//        if (existingUser.isPresent()) {
//            return existingUser.get();
//        } else {
//            if (user.getId() == null) {
//                user.setId((long) idCounter.getAndIncrement()); // Assign a unique ID if not already set
//            }
//            return userRepository.save(user);
//        }
//    }
// ///////////////////////////////////////////////////////////////////////////////////////////////////s
//	@Override
//	public com.blog.Blog_Demo.models.User findByUsername(String username) {
//		User user = userRepository.findByUsername(username);
//		return user;
//	}
//	
//    @Override
//    public User saveUser(User user) {
//        return userRepository.save(user);
//    }
//    
//    @Override
//    public User findById(Long id) {
//        return userRepository.findById(id).orElse(null);
//    }
// //////////////////////////////////////////////////////////////////////////////////////////////////////e
    
    
    public User addUsers(User user) {
    	return userRepository.save(user);
    }
    
    public Boolean loginUser(LoginRequest loginRequest) {
    	Optional<User> user=userRepository.findById(loginRequest.getUserId());
    	if(user==null) {
    		return false;
    	}
    	User user1=user.get();
    	
    	if(!user1.getPassword().equals(loginRequest.getPassword())) {
    		return false;
    	}
    	
    	return true;
    }
}
