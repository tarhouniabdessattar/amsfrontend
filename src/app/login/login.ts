import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  username: any;
  password: any;
  invalidLogin = false;
  
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  /*checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
     //console.log(this.username+" "+this.password)
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }*/
 checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
        (data:any) =>  { console.log(data), this.router.navigate(['/providers'])},
        (error:any)  =>  this.invalidLogin = true
    );
  }
  
}
