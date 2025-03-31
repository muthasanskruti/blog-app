package com.blog.Blog_Demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.Blog_Demo.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    //User findByUsername(String username);
    
}