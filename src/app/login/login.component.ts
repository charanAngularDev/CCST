import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public credentials = {};
public serverCredentials = {};
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern = '^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$';
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.pattern(this.passwordPattern)])
  });
  onSubmit() {
    this.credentials = this.loginForm.value;
    console.log(this.credentials['username']);
  }
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.getLoginDetails(this.credentials['username'], this.credentials['password']);
  }

}
