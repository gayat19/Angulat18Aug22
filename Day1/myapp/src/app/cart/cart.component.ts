import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Product[];
  constructor(private cartService:CartService) { 
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

}
