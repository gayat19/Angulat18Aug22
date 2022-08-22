import { Product } from "../models/product";

export class CartService {
  cart:Product[];
  constructor() { 
    this.cart= [];
  }
  
  addToCart(product:Product){
    var flag:boolean = false;
    for (let index = 0; index < this.cart.length; index++) {
     if(this.cart[index].id==product.id)
     {
        flag=true;
        this.cart[index].quantity = (this.cart[index].quantity??0)+1;
     }
    }
    if(!flag)
      this.cart.push(product);
  }

  getCart(){
    return this.cart;
  }
}
