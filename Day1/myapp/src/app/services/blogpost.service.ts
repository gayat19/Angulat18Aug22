import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BlogPostService{
    constructor(private httpClient:HttpClient){

    }
    getPostData(){
        return this.httpClient.get('https://my-json-server.typicode.com/typicode/demo/posts')
    }
}