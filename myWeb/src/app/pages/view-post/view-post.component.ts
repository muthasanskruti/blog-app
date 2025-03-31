import { Component, SimpleChange, SimpleChanges } from "@angular/core";
//import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../service/post.service";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Commentservice } from '../../service/comment.service';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
//import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatChip, MatChipSet, MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
    selector: 'app-view-post',
    templateUrl: './view-post.component.html',
    styleUrls: ['./view-post.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        //MatIcon,
        //MatChip,
        //MatChipSet,
        //RouterModule,
        //RouterLink,
        MatChipsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatSelectModule,
        //MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatMenuModule,
        MatRadioModule,MatDividerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatTableModule,
        MatGridListModule,
        // Add other Angular Material modules as needed
    ],
})

export class ViewPostComponent{

    
    postId;
    postData:any;
    comments:any;
    
    commentForm!: FormGroup;
    //commentService: any;

    constructor(private postService: PostService,
        private activatedRoute: ActivatedRoute,
        private matSnackBar: MatSnackBar,
        private fb: FormBuilder,
        private commentService: Commentservice) {
        this.postId = this.activatedRoute.snapshot.params['id'];
}

    ngOnInit(){
        console.log(this.postId);
        this.getPostById();

        this.commentForm=this.fb.group({
             postedBy:[null, Validators.required],
             content:[null, Validators.required],
        })
    }


    publishComment(){
        const postedBy= this.commentForm.get('postedBy')?.value;
        const content= this.commentForm.get('content')?.value;

        this.commentService.createComment(this.postId, postedBy, content).subscribe((res: any)=>{
            console.info('Comment',res);
             this.matSnackBar.open("Comment Posted","OK");
             this.getCommentsByPost();
        }, (error: any)=>{
            this.matSnackBar.open("Error", "OK");
        });
    }


    getCommentsByPost(){
        this.commentService.getAllCommentBypost(this.postId).subscribe((res: any)=>{
            this.comments=res;
        }, (error: any)=>{
            this.matSnackBar.open("Error", "OK");
        });
    }

    getPostById(){
        this.postService.getPostById(this.postId).subscribe(res=>{
            this.postData=res;
            console.log('RESPONSE',res);
            this.getCommentsByPost();
    }, (error: any)=>{
        this.matSnackBar.open("Error","OK");
    });
    }

    likePost(){
        this.postService.likePost(this.postId).subscribe((response)=>{
            console.log('Like',response);
            this.matSnackBar.open("Post Liked", "OK");
            this.postData.likeCount += 1;
            //this.getPostById();
        }, (error: any)=>{
            this.matSnackBar.open("Error","OK");
        });
    }
}