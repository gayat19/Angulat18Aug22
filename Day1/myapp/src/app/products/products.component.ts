import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductService) { 
    this.products = this.productService.getProducts();
  }
  change(){
    this.products[0] = new Product(103,"asjkdfha",20,90,'./assets/images/Pizza1.jpg')
  }
  ngOnInit(): void {
  }

}
