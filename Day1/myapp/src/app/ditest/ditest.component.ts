import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-ditest',
  templateUrl: './ditest.component.html',
  styleUrls: ['./ditest.component.css']
})
export class DitestComponent implements OnInit {


  check:string;
  constructor() { 
    this.check="hello";
  }

  ngOnInit(): void {
  }

}
