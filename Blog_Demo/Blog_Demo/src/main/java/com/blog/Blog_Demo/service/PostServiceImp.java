package com.blog.Blog_Demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.Blog_Demo.models.Post;
import com.blog.Blog_Demo.repository.PostRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PostServiceImp implements PostService {

	@Autowired
	private PostRepository postRepository;

	@Override
	public Post savePost(Post post){
	//post.setPostedBy(post.getPostedBy());
	post.setLikeCount(0);
	post.setViewCount(0);
	post.setDate(new Date());
	return postRepository.save(post);
	}

	public List<Post> getAllPosts(){
		return postRepository.findAll();
	}

	public Post getPostById(Long postId) {
		Optional<Post> optionalPost=postRepository.findById(postId);
		if(optionalPost.isPresent()) {
			Post post=optionalPost.get();
			post.setViewCount(post.getViewCount()+1);
			return postRepository.save(post);
		}else {
			throw new EntityNotFoundException("Post not found");
		}
	}
	
    public List<Post> getPostsByUser(String postedBy) {
        return postRepository.findByPostedBy(postedBy);
    }


//	public Post LikePost(String postId) {
//		int Id = Integer.parseInt(postId);
//		Optional<Post> optionalPost=postRepository.findById((long) Id);
//		//Optional<Post> optionalPost=postRepository.findById(postId);
//		if(optionalPost.isPresent()) {
//			Post post=optionalPost.get();
//			post.setLikeCount(post.getLikeCount()+1);
//			return postRepository.save(post);
//		}else {
//			throw new EntityNotFoundException("Post not found");
//		}
//	}
	
	public Post likePost(Long postId) {
		Optional<Post> optionalPost=postRepository.findById(postId);
		if(optionalPost.isPresent()) {
			Post post=optionalPost.get();
			post.setLikeCount(post.getLikeCount()+1);
			return postRepository.save(post);
		
		}else {
			throw new EntityNotFoundException("Post not found" + postId);
		}
	}

    public List<Post> searchByKeyword(String keyword) {
        return postRepository.findAllByNameContainingOrContentContaining(keyword, keyword);
    }
    
    
//    public List<Post> getPostsByUserId(Long userId) {
//  //      return postRepository.findByUserId(userId);
//    	Optional<Post> optionalPost=postRepository.findByUserId(userId);
//    	if(optionalPost.isPresent()) {
//    		return postRepository.findByUserId(userId);
//    	}else {
//    		throw new EntityNotFoundException("Post Not Found");
//    	}
//    }
	
    
//    public List<Post> getPostsByUserId(String userId) {
//        List<Post> posts = postRepository.findByUserId(userId);
//        if (!posts.isEmpty()) {
//            return posts;
//        } else {
//            throw new EntityNotFoundException("Post Not Found");
//        }
//    }


	}


