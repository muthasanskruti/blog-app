import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthServiceService } from '@app/service/auth-service.service';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.scss'],
  imports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule
  ]
})
export class MainnavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
  }
}