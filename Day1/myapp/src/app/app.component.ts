import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//element's name
  templateUrl: './app.component.html',//html content
  styleUrls: ['./app.component.css']//style content
})
export class AppComponent {

  choice:string="home"
  data:string= "This will show how to create a custom pipe to alter the look"
}
