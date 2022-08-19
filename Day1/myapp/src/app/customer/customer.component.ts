import { Component, OnInit } from '@angular/core';
import { customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:customer;
  constructor() { 
    this.customer = new  customer(101,"Tim",21,"./assets/images/Pizza1.jpg")
  }

  ngOnInit(): void {
  }

}
