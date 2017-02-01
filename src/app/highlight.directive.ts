import {Directive, ElementRef, Renderer} from '@angular/core';
// ElementRef tells the Angular 2 Framework: "When you create this directive, I need
// this argument of type ElementRef"

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // the nativeElement is just an HTML element, which is why we can access its style
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // The previous line is considered bad style because there is a better way

    // This is the better way: Use a renderer
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
