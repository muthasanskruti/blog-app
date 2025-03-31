package com.blog.Blog_Demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages="com.blog.Blog_Demo.models")
public class BlogDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogDemoApplication.class, args);
	}

}
