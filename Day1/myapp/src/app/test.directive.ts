import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @Input('appTest') simply

  @HostListener('click') onClick(){
    console.log('IN the click '+this.simply);
  }
  constructor() { 
    console.log(this.simply);
  }

}
