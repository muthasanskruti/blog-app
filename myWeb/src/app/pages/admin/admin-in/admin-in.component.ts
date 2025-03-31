import { Component, Input } from '@angular/core';
// import { CreatePostComponent } from '@app/pages/create-post/create-post.component';
// import { LoginPageComponent } from '@app/pages/login-page/login-page/login-page.component';
// import { MainnavbarComponent } from '@app/pages/mainnavbar/mainnavbar/mainnavbar.component';
// import { SearchByNameComponent } from '@app/pages/search-by-name/search-by-name';
// import { UserProfileComponent } from '@app/pages/user-profile/user-profile/user-profile.component';
// import { ViewAllComponent } from '@app/pages/view-all/view-all.component';
// import { ViewPostComponent } from '@app/pages/view-post/view-post.component';
// import { Commentservice } from '@app/service/comment.service';
// import { PostService } from '@app/service/post.service';

@Component({
  selector: 'app-admin-in',
  imports: [],
  templateUrl: './admin-in.component.html',
  styleUrl: './admin-in.component.scss'
})
export class AdminInComponent {

  @Input() createPost: any

  constructor(){}
  // constructor(private login: LoginPageComponent,
  //   private create: CreatePostComponent,
  //   private mnb: MainnavbarComponent,
  //   private sbn: SearchByNameComponent,
  //   private profile: UserProfileComponent,
  //   private viewall: ViewAllComponent,
  //   private viewpost: ViewPostComponent,
  //   private cservice: Commentservice,
  //   private pservice: PostService
  // ){}


  // shiftAll(){

  //   this.pservice.createNewPost;
  //   this.pservice.getAllPosts;
  //   this.pservice.getPostById;
  //   this.pservice.likePost;
  //   this.pservice.searchByName;
  //   this.cservice.createComment;
  //   this.cservice.getAllCommentBypost;

  // }
}
