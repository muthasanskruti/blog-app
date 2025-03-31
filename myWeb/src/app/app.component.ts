import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './AngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NavbarComponent } from './pages/navbar/navbar.component';
import { MainnavbarComponent } from './pages/mainnavbar/mainnavbar/mainnavbar.component';
//import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { AdminInComponent } from './pages/admin/admin-in/admin-in.component';
//import { AppRoutingModule } from './app.routes';
//import { ViewMyPostComponent } from './pages/view-my-post/view-my-post/view-my-post.component';
//import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    //NavbarComponent,
    MainnavbarComponent,
    //LoginPageComponent,
   // UserProfileComponent
   AdminInComponent,
  // ViewMyPostComponent,
  //AppRoutingModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myWeb';
}
