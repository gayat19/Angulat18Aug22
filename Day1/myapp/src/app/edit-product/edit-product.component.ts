import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Product;
  products:Product[];
  check:boolean = false;
  constructor(private productService:ProductService,
    private  productHttpService:ProductHttpService,
    private router:Router) { 
    this.product = new Product();
    this.products = this.productService.getProducts();
  }

  getProduct(id:any){
    
    this.product = this.productService.getProductById(id)??new Product();


  }
  ngOnInit(): void {
  }
  updateProduct(){
    //console.log(this.product.name);
    // this.productService.editProduct(this.product);
    // alert("Product details updated");
    // this.router.navigate(['products']);
    // this.router.navigateByUrl('products')
    this.productHttpService.updateProduct(this.product).subscribe(updatedProduct=>{
      alert("Product details updated");
      this.router.navigate(['products']);
      this.router.navigateByUrl('products')
    })

  }

}
