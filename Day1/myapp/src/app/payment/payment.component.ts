import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myForm:FormGroup;
  constructor() { 
    this.myForm = new FormGroup({
      cname:new FormControl(null,Validators.required),
      cnumber:new FormControl(null,Validators.required)
    })
  }

  
  public get cname() : any {
    return this.myForm.get('cname');
  }

  public get cnumber() : any {
    return this.myForm.get('cnumber');
  }
  
buy(){
  console.log(this.myForm);
  if(this.myForm.valid){
    alert('success. order placed');
  }
  else
    alert('Please check teh values')
}
  ngOnInit(): void {
  }

}
