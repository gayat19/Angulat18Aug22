import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Product;
  products:Product[];
  constructor(private productService:ProductService) { 
    this.product = new Product();
    this.products = this.productService.getProducts();
  }

  getProduct(id:any){
    
    this.product = this.productService.getProductById(id)??new Product();


  }
  ngOnInit(): void {
  }
  updateProduct(){
    this.productService.editProduct(this.product);
    alert("Product details updated");
  }

}
