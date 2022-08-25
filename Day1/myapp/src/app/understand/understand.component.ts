import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-understand',
  templateUrl: './understand.component.html',
  styleUrls: ['./understand.component.css']
})
export class UnderstandComponent implements OnInit,OnDestroy {
mySubscriber;
  constructor() {
    
   }
  ngOnDestroy(): void {
   this.mySubscriber.unsubscribe();
  }

  ngOnInit(): void {
    // this.mySubscriber = interval(1000).subscribe((cnt=>{
    //   console.log(cnt);
    // }))
    // const customObservable = Observable.create(observer=>{
    //   let count=100;
    //   setInterval(handler=>{
    //     observer.next(count);
    //     count = count+10;
    //   },1000);
    // });
    const customObservable = new Observable(observer=>{
        let count=100;
        setInterval(handler=>{
            if(count%7==0)
              observer.error("There was an error "+count)
            if(count==200)
              observer.complete();
          observer.next(count);
          count = count+10;
        },1000);
       
          
      })
    // this.mySubscriber = customObservable.subscribe((data)=>{
    //   console.log(data);
    // },
    // (error)=>{
    //   console.log("msg from error ")
    //   console.log(error)
    //   console.log("Encountered error in the observer")
    // },
    // ()=>{
    //     console.log("All done and dusted")
    // })
    this.mySubscriber = customObservable.subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        console.log("msg from error ")
      console.log(err)
      console.log("Encountered error in the observer")
      },
      complete:()=>{
        console.log("All done and dusted")
      }
  })

    
  }

}
