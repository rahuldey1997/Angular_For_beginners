import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
@Directive({
    selector:'[setHighlightandcolorbetter]',
    standalone: true,
})

export class HighlightAndColorBetterDirective  {
    constructor(private element: ElementRef, private renderer: Renderer2){

    }
    @HostBinding('style.backgroundColor') background: string='pink';
    @HostListener('mouseenter') mouseenter(){
        this.background='rgb(66, 177, 114)';
    };
    @HostListener('mouseleave') mouseleave(){
        this.background='transparent';
    };  
}

//background is property. Intially it is transparent
//When we use this directive on html element then the html element will have a style.backgroundColor property and that pro