package com.blog.Blog_Demo.service;

import java.util.List;

import com.blog.Blog_Demo.models.Post;

public interface PostService {

	Post savePost(Post post);

	List<Post> getAllPosts();

	Post getPostById(Long postId);

	Post likePost(Long postId);

	List<Post> searchByKeyword(String keyword);
	
	//void incrementViewCount(Long postId);
	
	//List<Post> getPostsByUserId(String userId);
	
	List<Post> getPostsByUser(String postedBy);
}
