import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
//import { MatCardActions, MatCardContent, MatCardModule } from "@angular/material/card";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
//import { RouterLink, RouterModule } from "@angular/router";
import { RouterModule } from "@angular/router";
import { PostService } from "@app/service/post.service";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

@Component({
    selector: 'app-search-by-name',
    templateUrl: './search-by-name.component.html',
    styleUrls: ['./search-by-name.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        //RouterLink,
        MatChipsModule,
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
        // Add other Angular Material modules as needed
    ],
})

export class SearchByNameComponent{

    result:any=[];
    name:any="";
    keyword: string = '';

    constructor(private postService: PostService,
        private snackBar: MatSnackBar){}

        searchByKeyword(keyword: string) {
            this.postService.searchByKeyword(keyword).subscribe(
              res => {
                this.result = res;
                console.log(this.result);
              },
              error => {
                this.snackBar.open('Error', 'OK');
              }
            );
          }

}