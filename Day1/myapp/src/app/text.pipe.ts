import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var myData:string ="";
    if(value){
      myData = value as string;
      if(args[0])
      {
        var num = args[0] as number;
        myData = myData.substring(0,num) +"...."
      }
      else
        myData = myData.substring(0,5) +"...."
    }
    return myData;
  }

}
