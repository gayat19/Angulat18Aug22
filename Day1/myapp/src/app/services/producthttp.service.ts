import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable()
export class ProductHttpService{
    constructor(private httpClient:HttpClient){

    }
    getPizzas(){
        return this.httpClient.get("https://sampleapig3new.azurewebsites.net/api/Product")
    }
    addProduct(product:Product){
        return this.httpClient.post("https://sampleapig3new.azurewebsites.net/api/Product",product)
    }
    updateProduct(product:Product){
        return this.httpClient.put("https://sampleapig3new.azurewebsites.net/api/Product",product)
    }
}