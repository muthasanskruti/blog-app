package com.blog.Blog_Demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.Blog_Demo.models.Post;
import com.blog.Blog_Demo.service.PostService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin("*")
public class PostController {

	@Autowired
	private PostService postService;

	@PostMapping
	public ResponseEntity<?> createPost(@RequestBody Post post) {
		try {
			Post createdPost = postService.savePost(post);
			return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@GetMapping
	public ResponseEntity<List<Post>> getAllPosts(){
		try {
			return ResponseEntity.status(HttpStatus.OK).body(postService.getAllPosts());
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@GetMapping("/{postId}")
	public ResponseEntity<?> getPostById(@PathVariable Long postId){
		try {
			Post post=postService.getPostById(postId);
			return ResponseEntity.ok(post);
		}catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PutMapping("/{postId}/like")
	public ResponseEntity<?> likePost(@PathVariable Long postId){
		try {
//			String stringValue = postId.toString();
//			postService.LikePost(stringValue);
			return ResponseEntity.status(HttpStatus.CREATED).body(postService.likePost(postId));
		}catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
    @GetMapping("/search/{keyword}")
    public ResponseEntity<?> searchByKeyword(@PathVariable String keyword) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(postService.searchByKeyword(keyword));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
	
    @GetMapping("/user/posts/{postedBy}")
    public ResponseEntity<List<Post>> getPostsByUser(@PathVariable String postedBy) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(postService.getPostsByUser(postedBy));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
//    @GetMapping("/user/id/{userId}")
//    public ResponseEntity<List<Post>> getPostsByUserId(@PathVariable String userId) {
//    	try {
//        List<Post> posts = postService.getPostsByUserId(userId);
//        return ResponseEntity.status(HttpStatus.OK).body(posts);
//    	}
//    	catch(EntityNotFoundException e) {
//    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//    	}
//    }
}
