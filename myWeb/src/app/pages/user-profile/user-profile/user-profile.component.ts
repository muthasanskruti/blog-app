import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterLink } from '@angular/router';
import { AuthServiceService } from '@app/service/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  imports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterLink
  ]
})
export class UserProfileComponent implements OnInit {
  isLoggedIn = false;
  //private subscription: Subscription;
  private subscription!: Subscription;

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    this.isLoggedIn = true;
    this.subscription = this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      //this.isLoggedIn=true;
    {
    this.authService.logout();
    //this.isLoggedIn = true;
  }
}
}


}