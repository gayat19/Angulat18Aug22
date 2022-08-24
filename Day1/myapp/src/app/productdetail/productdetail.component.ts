import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pid:any;
  product:Product;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService) { 
    this.pid = this.activatedRoute.snapshot.params["pid"];
    this.product = this.productService.getProductById(this.pid)
  }

  ngOnInit(): void {
  }

}
