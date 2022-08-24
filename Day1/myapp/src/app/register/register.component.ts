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
    console.log(this.registerForm);
  }

}
