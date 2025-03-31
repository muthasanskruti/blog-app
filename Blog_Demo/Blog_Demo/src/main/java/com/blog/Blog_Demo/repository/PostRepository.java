package com.blog.Blog_Demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.Blog_Demo.models.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

	    List<Post> findAllByNameContainingOrContentContaining(String name, String content);
	    List<Post> findByPostedBy(String postedBy);

	        //List<Post> findByUserId(String userId);
	    
}
