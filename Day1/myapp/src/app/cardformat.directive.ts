import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCardformat]'
})
export class CardformatDirective {
@Input() appCardformat='';
myNum:string="";
@HostListener('focus') onFocus(){
  this.er.nativeElement.backgroundColor='lime'

}
@HostListener('blur') onBlur(){
  this.myNum = this.er.nativeElement.value;
  if(this.myNum.length==16)
    {
      var newNum = this.myNum.substring(0,4);
      for (let index = 4; index < 16; index=index+4) {
        newNum+="-"
      newNum += this.myNum.substring(index,index+4);
      }
      this.er.nativeElement.value = newNum;
    }
    else
    {
      alert('invalid card number')
      this.er.nativeElement.value = "";
    }
    console.log(this.appCardformat)
}
  constructor(private er:ElementRef) { 
    
    
  }

}
