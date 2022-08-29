import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) {
    this.weatherService.getWeatherData().subscribe(data=>{
      console.log(data);
    },
    err=>{
      console.log(err)
    })
   }

  ngOnInit(): void {
  }

}
