import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
@Directive({
    selector:'[setHighlightandcolor]',
    standalone: true,
})

export class BetterHighlightDirective  {
    constructor(private element:ElementRef, private renderer: Renderer2){
    }
    @HostBinding('style.backgroundColor') background:string='transparent';
    @HostBinding('style.border') border:string='none';
   @HostListener('mouseenter') mouseenter(){
    this.background='pink';
    this.border='red 2px solid'          
    }
    @HostListener('mouseleave') mouseleave(){
        this.background='transparent';
        this.border='none';
}
}