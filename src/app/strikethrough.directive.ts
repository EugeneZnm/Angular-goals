// HostListener responsible for capturing events occurring on the host element
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
// ElementRef used to define the property(Element in which directive is hosted on) in the Constructor
  constructor(private elem: ElementRef) {
    // this.elem.nativeElement.style.textDecoration = 'line-through';
   }
   // HostListener annotation function listening to singleclicks
   @HostListener ('click') onClicks() {
     // user clicks host element once
    this.textDeco ('line-through');
    // (addition of strikethrough) textDeco function is called and line-through is passed an argument
  }
  // HostListener annotation function listening to doubleclicks
  @HostListener('dblclick') onDoubleClicks() {
    // user doubleclicks host element
    this.textDeco('None');
    // (removal of strikethrough )textDeco function is called and None is passed as an argument
  }

   // Function textDeco targeting element reference and takes in CSS style attribute as argument
   private textDeco(action: string ) {
    this.elem.nativeElement.style.textDecoration = action;

  }
}
