package com.blog.Blog_Demo.service;

import java.util.List;

import com.blog.Blog_Demo.models.Comment;
import com.blog.Blog_Demo.models.Post;

public interface CommentService {

	Comment createComment(String postId, String postedBy, String content);
	
	//Comment createComment(Comment comment);

	//Comment saveComment(Long postId, String postedBy, String content);
	
	//Comment createComment(Long postId, Comment comment);
	List<Comment> getCommentByPostId(Long postId);
}

