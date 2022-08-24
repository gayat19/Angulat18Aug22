import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products:Product[]
  constructor(private productService:ProductService,
              private router:Router) { 
    this.products = this.productService.getProducts();
  }
  showDetails(pid){
    this.router.navigate(['list/details',pid])
  }
  ngOnInit(): void {
  }

}
