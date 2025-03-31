import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private httpClient: HttpClient,
    private router: Router
  ){}

  public register = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')
  });

  public onSubmit(){
    console.log(this.register.value);

    this.httpClient.post('http://localhost:8080/addUser',this.register.value).subscribe((data: any)=>{
      console.log(data);

      if(data == true){
        alert("registration successful");
        this.router.navigate(['/login-page']);
      } else{
      (error: any)=>{
        console.log(error);
      }
    }
    })
  }
}
