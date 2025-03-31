package com.blog.Blog_Demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.Blog_Demo.models.Comment;
import com.blog.Blog_Demo.models.Post;
import com.blog.Blog_Demo.repository.CommentRepository;
import com.blog.Blog_Demo.repository.PostRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CommentServiceImp implements CommentService {

	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private PostRepository postRepository;
	
	public Comment createComment(String postId, String postedBy, String content) {
		int Id = Integer.parseInt(postId);
		Optional<Post> optionalPost=postRepository.findById((long) Id);
		if(optionalPost.isPresent()) {
			Comment comment=new Comment();

			
			comment.setPost(optionalPost.get());
			comment.setContent(content);
			comment.setPostedBy(postedBy);
			comment.setCreatedAt(new Date());
			
			return commentRepository.save(comment);
		} throw new EntityNotFoundException("Post Not Found");
	}
	
//	@Override
//    public Comment createComment(Comment comment) { // Accept a Comment object
//        Optional<Post> optionalPost = postRepository.findById(comment.getPost().getId());
//        if (optionalPost.isPresent()) {
//            comment.setPost(optionalPost.get());
//            comment.setCreatedAt(new Date());
//            return commentRepository.save(comment);
//        } else {
//            throw new EntityNotFoundException("Post Not Found");
//        }
//    }
	
//	 @Override
//	    public Comment createComment(Long postId, Comment comment) { // Accept postId and Comment object
//	        Optional<Post> optionalPost = postRepository.findById(postId);
//	        if (optionalPost.isPresent()) {
//	            comment.setPost(optionalPost.get());
//	            comment.setCreatedAt(new Date());
//	            return commentRepository.save(comment);
//	        } else {
//	            throw new EntityNotFoundException("Post Not Found");
//	        }
//	    }
	
	@Override
	public List<Comment> getCommentByPostId(Long postId){
		return commentRepository.findByPostId(postId);
	}
}
