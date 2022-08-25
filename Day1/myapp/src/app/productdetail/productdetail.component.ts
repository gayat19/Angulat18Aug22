import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit,OnChanges {
  pid:any;
  product:Product;

  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService) { 
      console.log("Hello - from constructor")
    // this.pid = this.activatedRoute.snapshot.params["pid"];
    // this.product = this.productService.getProductById(this.pid)
    this.activatedRoute.params.subscribe((data)=>{
      this.pid = data['pid'];
      this.product = this.productService.getProductById(this.pid)
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Hello - from Change")
  }

  ngOnInit(): void {
    console.log("Hello - from INit")
  }

}
