import { Component } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
//import { Router, RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { PostService } from "../../service/post.service";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
//import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AdminInComponent } from "../admin/admin-in/admin-in.component";


@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
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
                MatRadioModule,
                MatDividerModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatDialogModule,
                MatTableModule,
                MatGridListModule,
                CommonModule,
                HttpClientModule,
                AdminInComponent
                //RouterLink
    ],
})

export class CreatePostComponent{
    postForm: any;

    constructor(private fb: FormBuilder,
        private router: Router,
        private snackbar: MatSnackBar,
        private postService: PostService){}
            ngOnInit(){
                this.postForm=this.fb.group({
                    name: [null, Validators.required],
                    content:[null,[Validators.required, Validators.maxLength(5000)]],
                    img: [null, Validators.required],
                    postedBy: [null, Validators.required]
                })
            }


            createPost(){
                const data=this.postForm.value;

                this.postService.createNewPost(data).subscribe(res=>{
                    this.snackbar.open("Post Created", "OK");
                    this.router.navigateByUrl("/");
                },error=>{
                    this.snackbar.open("Error Occured", "OK");
                }
                )
            }

            onSubmit(): void {
                if (this.postForm.valid) {
                  this.postService.createNewPost(this.postForm.value).subscribe(response => {
                    console.log('Post created successfully', response);
                  }, error => {
                    console.error('Error creating post', error);
                  });
                }
              }
    }
