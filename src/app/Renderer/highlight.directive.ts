import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
@Directive({
    selector:'[setHighlight]',
    standalone: true,
})
///Now here insteed of writing the logic inside the constructor we can write it inside ngOninit method
export class HighlightDirective implements OnInit{
    //private renderer: Renderer2;
    constructor( private element:ElementRef, private renderer:Renderer2){
    }
    ngOnInit(){
       // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F'); 
        this.renderer.addClass(this.element.nativeElement, 'rendererclass');    //see app component css for the class name
    }
}