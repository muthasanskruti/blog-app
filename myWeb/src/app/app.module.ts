import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './AngularMaterialModule';
import { AppComponent } from './app.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { Commentservice } from './service/comment.service';
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
//import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatGridList, MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainnavbarComponent } from './pages/mainnavbar/mainnavbar/mainnavbar.component';
import { AdminInComponent } from './pages/admin/admin-in/admin-in.component';
import { AuthServiceService } from './service/auth-service.service';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { ViewMyPostComponent } from './pages/view-my-post/view-my-post/view-my-post.component';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchByNameComponent,
    CreatePostComponent,
    ViewAllComponent,
    ViewPostComponent,
    MainnavbarComponent,
    AdminInComponent,
    LoginPageComponent,
    ViewMyPostComponent,
    UserProfileComponent
    // Add your other components here
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    MatFormField,
    MatGridList,
    ReactiveFormsModule,
    MatCardModule,
    MatCardContent,
    MatFormFieldModule,
    MatLabel,
    //MatIconModule,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    Date,
    MatGridListModule,
    MatGridTile,
    HttpClientModule,
    MatCardContent,
    MatCardActions,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    //AngularFireModule.initializeApp

  ],
  providers: [Commentservice,
    PostService,
    AuthServiceService
    
    //AngularFirestore
  ],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }