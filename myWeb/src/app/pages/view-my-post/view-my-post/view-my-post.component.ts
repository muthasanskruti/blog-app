import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardActions, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';
import { PostService } from '@app/service/post.service';
import { AuthServiceService } from '@app/service/auth-service.service'; // Import AuthServiceService
//import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app.routes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-my-post',
  imports: [
    CommonModule,
    MatCardModule,
   // MatCardHeader,
   // MatCardTitle,
   // MatCardSubtitle,
    //MatCardActions,
    FormsModule,
    ReactiveFormsModule,
    //RouterLink,
    //BrowserModule,
    //AppRoutingModule,
    RouterModule
  ],
  templateUrl: './view-my-post.component.html',
  styleUrls: ['./view-my-post.component.scss'] 
})
export class ViewMyPostComponent implements OnInit {
   item: any[] = [];
   //userId: number | null = null;
   userId!: number;
   postedBy: any;

   constructor(
     private postService: PostService,
     private authService: AuthServiceService,
     private snackBar: MatSnackBar
   ) {}

   ngOnInit(): void {
     this.authService.isLoggedIn.subscribe((status: boolean) => {
       if (status) {
         this.postedBy = this.authService.getCurrentUserId();
         if (this.userId !== null) {
           this.loadUserPosts();
         } else {
           console.error('User ID is undefined');
         }
       }
     });
   }

   loadUserPosts(): void {
     if (this.postedBy !== null) {
       this.postService.getMyPosts(this.postedBy).subscribe(
         (data: any[]) => {
           this.item = data;
           console.log(data);
         },
         (error: any) => {
           console.error('Error fetching posts:', error);
         }
       );
     } else {
       console.error('User ID is undefined');
     }
   }
}