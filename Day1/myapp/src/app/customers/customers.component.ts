import { Component, OnInit } from '@angular/core';
import { concatWith } from 'rxjs';
import { customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  //customerService:CustomerService
  customers:customer[];
  constructor(private customerService:CustomerService) { 
    //this.customerService = new CustomerService();
    this.customers = this.customerService.getCustomers();
  }

  ngOnInit(): void {
  }
  handleCheck(eventArgs:any){
    console.log(eventArgs);
  }
}
