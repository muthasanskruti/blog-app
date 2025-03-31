package com.blog.Blog_Demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	
	public User() {}
	
	public User(String email, String username, String password) {
		super();
		this.email=email;
		this.username=username;
		this.password=password;
	}
    
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @OneToMany
//	@JoinColumn(referencedColumnName = "userId")
	@Id
    private String email;
    private String username;
    private String password;

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}