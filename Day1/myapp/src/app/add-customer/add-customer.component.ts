import { Component, OnInit } from '@angular/core';
import { customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer:customer;
  //customerService:CustomerService;
  constructor(private customerService:CustomerService) {
    this.customer = new  customer();
    //this.customerService = new CustomerService();
   }

  ngOnInit(): void {
  }
  insertCustomer(cpic:any){
  
    this.customer.pic = "./assets/images/"+cpic.files[0].name;
    console.log(this.customer.pic);
    this.customerService.addCustomer(this.customer);
    this.customer = new  customer();
    alert('customer added');
  }

}
