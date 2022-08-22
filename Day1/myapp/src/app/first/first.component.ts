import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<h1>Hello</h1>
              <h2>Welcome</h2>`,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
customer_name:string;//variable creation
chooseClass:string;
toggleStyle:string;
toggleValue:boolean;
likesCount:number;

  constructor() {
    this.customer_name = "Tim";//Assignment of value
    this.chooseClass = "mystyle";
    this.toggleStyle = "glyphicon glyphicon-heart-empty";
    this.toggleValue = false;
    this.likesCount =0;
   }

  ngOnInit(): void {
    console.log('on init of first component')
  }

  changeStyle(){
    console.log("Event triggered");
    this.chooseClass = "yourstyle";
  }
  toggle(){
    if(this.toggleValue==false)
    {
      this.toggleValue=true;
      this.toggleStyle = "glyphicon glyphicon-heart";
    }
    else
    {
      this.toggleValue=false;
      this.toggleStyle = "glyphicon glyphicon-heart-empty";
    }
    
  }
  like(){
    this.likesCount++;
  }
  changeName(custname:any){
    this.customer_name=custname;
  }
}
