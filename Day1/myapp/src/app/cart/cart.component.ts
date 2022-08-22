import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { Horse } from '../models/horse';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  animal:Animal;
  horse:Horse;
  cart:Product[];
  constructor(private cartService:CartService) { 
    this.cart = this.cartService.getCart();
    this.animal = new Animal();
    this.horse = this.animal;
  }

  ngOnInit(): void {
  }

}
