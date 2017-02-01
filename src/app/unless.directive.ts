import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {

  // TemplateRef: The reference to the template the directive sits on after ng2 desugars it
  // ViewContainerRef: The position where the element should be rendered
  @Input('dirUnless') set unless(condition: boolean) {
    if (!condition) {
      // if the condition is false, we want to show our element
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }
}
