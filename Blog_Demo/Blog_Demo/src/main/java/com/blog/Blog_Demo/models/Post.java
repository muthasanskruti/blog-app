package com.blog.Blog_Demo.models;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
//import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;

@Entity
//@Table(name="post")
public class Post implements Serializable{
	//private static final long serialVersionUID = 1L;
 
	@Id     
	@GeneratedValue(strategy=GenerationType.IDENTITY)  
	private Long id;
	private String name;
	@Column(length = 5000)  
	private String content;
	private String postedBy;
	private String img;
	private Date date;
	private int likeCount;
	private int viewCount;
	
//	@ManyToOne
//	@JoinColumn(referencedColumnName = "id")
	private String userId;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getPostedBy() {
		return postedBy;
	}
	
	public void setPostedBy(String postedBy) {
		this.postedBy=postedBy;
	}
	public String getContent() {
		return content;
	}
	public void setContentdBy(String content) {
		this.content = content;
	}
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getLikeCount() {
		return likeCount;
	}
	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}
	public int getViewCount() {
		return viewCount;
	}
	public void setViewCount(int viewCount) {
		this.viewCount = viewCount;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	private String post;
	
}
