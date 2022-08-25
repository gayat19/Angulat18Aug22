
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  dob:Date;
  @Input() product:Product =new Product();
  @Output() buyPizzaEvent = new EventEmitter<number>();
  constructor(private cartService:CartService,private productService:ProductService) { 
    this.dob = new Date("2001-09-19");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change triggered")
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('init')
  }
  checkQuanity(){
    if(this.product != undefined)
      return this.product.quantity??0;
    return 0;
  }
  buyPizza(){
      
      var myProd = new Product();
      myProd.quantity =1;
      myProd.price = this.product.price??0;
      myProd.pic = this.product.pic;
      myProd.name = this.product.name;
      myProd.id =this.product.id;
      console.log(myProd)
      this.cartService.addToCart(myProd);
      this.product.quantity = this.product.quantity?this.product.quantity-1:0;
  }

}
