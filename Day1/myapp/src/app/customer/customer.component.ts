import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer:customer;
  @Output() clickCheck:EventEmitter<string> = new EventEmitter();
  constructor() { 
    this.customer = new  customer(101,"Tim",21,"./assets/images/Pizza1.jpg")
  }

  ngOnInit(): void {
  }
  showEvent(){
    this.clickCheck.emit("You have clicked "+this.customer.id)
  }

}
