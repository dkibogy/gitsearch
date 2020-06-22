import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseover') mouseover() {
    this.hover("underline")
  }
  @HostListener('mouseout') mouseout() {
    this.hover("none")
  }

  private hover(action: string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
