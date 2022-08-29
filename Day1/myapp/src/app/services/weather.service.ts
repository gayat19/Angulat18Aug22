import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService{
    constructor(private http:HttpClient){

    }
    getWeatherData(){
        var httpOptions = {
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJyYW11IiwibmJmIjoxNjYxNzY2Mjc5LCJleHAiOjE2NjIzNzEwNzksImlhdCI6MTY2MTc2NjI3OX0.y3kqm8cChl_I6o-jo6I52KcYxIgVbnm33TNrHXDDOd1gGMV7BZeHn2snEs85gkLV-gIMZfhm1W2wSU86uuCbHw'
            })
        }
        return this.http.get("http://localhost:5461/WeatherForecast",httpOptions)
    }
}