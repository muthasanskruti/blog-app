import { Component } from "@angular/core";
import { PostService } from "../../service/post.service";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, RouterModule } from "@angular/router";
//import { RouterModule } from "@angular/router";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
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
    selector: 'app-view-all',
    templateUrl: './view-all.component.html',
    styleUrls: ['./view-all.component.scss'],
    standalone: true,
    imports: [
       // ViewPostComponent,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        RouterLink,
        MatChipsModule,
                MatButtonModule,
                MatCardModule,
                MatFormFieldModule,
                MatInputModule,
                MatToolbarModule,
                MatSelectModule,
                MatIconModule,
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
                RouterLink
        // Add other Angular Material modules as needed
    ],
})

export class ViewAllComponent{

    item: any;
    allPosts:any[]=[];

    constructor(private postService: PostService,
        private snackBar: MatSnackBar){}

        ngOnInit(): void{
            this.getAllPosts();
        }

    getAllPosts(): void{
        this.postService.getAllPosts().subscribe((res: any) =>{
            //console.log("RESPONSE",res);
            this.allPosts = res;
        }, (error: any)=>{      
            this.snackBar.open("Error", "OK");
        });
    }
}