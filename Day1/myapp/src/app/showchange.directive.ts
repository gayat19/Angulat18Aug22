import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowchange]'
})
export class ShowchangeDirective {

  constructor(private er:ElementRef) { 
    this.er.nativeElement.style.backgroundColor='orange';
  }

}
