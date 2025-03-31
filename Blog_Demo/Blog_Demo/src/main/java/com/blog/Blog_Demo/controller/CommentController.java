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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blog.Blog_Demo.models.Comment;
import com.blog.Blog_Demo.service.CommentService;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class CommentController {

	@Autowired
	private CommentService commentService;
	
//	@PostMapping("comments/create")
//	public ResponseEntity<?> createComment(@RequestParam Long postId, @RequestParam String postedBy, @RequestBody String content){
//		try {
//			Comment createdComment=commentService.saveComment(postId, postedBy, content);
//			return ResponseEntity.status(HttpStatus.CREATED).body(createdComment);
//		} catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
//		}
//	}

	
	@PostMapping("comments/create")
	public ResponseEntity<?> createComment(@RequestParam Long postId, @RequestParam String postedBy, @RequestParam String content){
		try {
			System.out.println(postId+" "+postedBy+" "+content);
			String stringValue = postId.toString();
			return ResponseEntity.status(HttpStatus.CREATED).body(commentService.createComment(stringValue,postedBy,content));
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
		}
	}
	
	
//	@PostMapping("comments/create")
//    public ResponseEntity<?> createComment(@RequestBody Comment comment) { // Use @RequestBody for the entire Comment object
//        try {
//            return ResponseEntity.status(HttpStatus.CREATED).body(commentService.createComment(comment));
//        } catch(Exception e) {
//            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
//        }
//    }
	
	@GetMapping("comments/{postId}")
	public ResponseEntity<?> getCommentsBtPostId(@PathVariable Long postId){
		try {
			return ResponseEntity.ok(commentService.getCommentByPostId(postId));
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong.");
		}
	}
}
