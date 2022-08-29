import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { ValidatePassword } from './validatepass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  encodedPass:string;
  user:User;
  rePassStr:string;
  registerForm:FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password:new FormControl(null,ValidatePassword.validatePassword()),
      rePass:new FormControl(null,Validators.required)
    })
   }
   encodePass(){
    console.log(this.password)
    this.encodedPass = btoa(this.password.value)
    console.log(this.encodedPass);
    
   }
   public get username()  {
    return this.registerForm.get('username');
   }
   public get password()  {
    return this.registerForm.get('password');
   }
   public get rePass()  {
    return this.registerForm.get('rePass');
   }
   
  ngOnInit(): void {
  }
  register(){
    this.user = new User();
    this.user.username = this.username.value;
    this.user.password = atob(this.encodedPass) 
    localStorage.setItem('un',this.user.username);
    console.log(this.user)
    console.log(this.registerForm);
  }

}
