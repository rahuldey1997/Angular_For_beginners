import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
@Directive({
    selector:'[setHighlightandcolor]',
    standalone: true,
})

export class HighlightAndColorDirective  {
    constructor(private element:ElementRef, private renderer: Renderer2){

    }
   @HostListener('click') onClick(){
            this.renderer.addClass(this.element.nativeElement,'change' )
    }
}