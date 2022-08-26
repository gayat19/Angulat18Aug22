import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductHttpService{
    constructor(private httpClient:HttpClient){

    }
    getPizzas(){
        return this.httpClient.get("http://localhost:5054/api/Product")
    }
}