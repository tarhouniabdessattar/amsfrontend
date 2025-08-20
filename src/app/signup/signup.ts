import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  user: any = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(private http: HttpClient, private router:Router) {}

  register() {
  console.log("Form Data:", this.user);

  this.http.post(
    environment.urlSignup,
    this.user,
    { headers: { 'Content-Type': 'application/json' } }
  ).subscribe({
    next: (res) => {
      console.log("User registered successfully:", res);
      alert("Registration successful!");
      this.router.navigate(['login']);

    },
    error: (err) => {
      console.error("Error during registration:", err);
      alert("Registration failed!");
      this.router.navigate(['signup']);
    }
  });
}
}