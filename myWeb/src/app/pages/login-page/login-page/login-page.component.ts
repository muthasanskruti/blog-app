import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from '@app/app.routes';
import { AuthServiceService } from '@app/service/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports:[FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class LoginPageComponent {
  // loginForm: FormGroup;

  // constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService) {
  //   this.loginForm = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const { username, password } = this.loginForm.value;
  //     this.authService.login({ username, password }).subscribe(
  //       (res: any) => {
  //         console.log('Login successful');
  //         this.router.navigate(['/user-profile']);
  //       },
  //       (err: any) => {
  //         console.log('Invalid username or password');
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  constructor(private httpClient: HttpClient,
    private router: Router
  ){}

  public data = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl('')
  });

  public onSubmit(){
    console.log(this.data.value);

    this.httpClient.post('http://localhost:8080/loginUser',this.data.value).subscribe((data: any)=>{
      console.log(data);

      if(data == true){
        alert("login successful");
        this.router.navigate(['/user-profile']);
      }else{
      (error: any)=>{
        console.log(error);
      }
    }
    })
  }

}