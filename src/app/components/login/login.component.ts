import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Email is a required field' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage() {
    return this.email.hasError('required') ? 'Password is a required field' :
      '';
  }

  login() {
    console.log("Login : ", this.email.value);
  }


}
