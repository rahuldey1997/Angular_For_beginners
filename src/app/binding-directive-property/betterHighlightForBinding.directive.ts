import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
@Directive({
    selector:'[setHighlightBorder]',
    standalone: true,
})

export class BetterHighlightForBindingDirective implements OnInit {
    constructor(private element:ElementRef, private renderer: Renderer2){
    }
    ///For using custom property binding we decorate this with @InputDecorator
    @Input() defaultColor: string='transparent';
    @Input('setHighlightBorder') highlightColor: string='pink';
    @HostBinding('style.backgroundColor') background:string=this.defaultColor;
    @HostBinding('style.border') border:string='none';
    @HostListener('mouseenter') mouseenter(){
    this.background=this.highlightColor;
    this.border='green 2px solid'          
    }
    @HostListener('mouseleave') mouseleave(){
        this.background=this.defaultColor;
        this.border='none';
    }
    ngOnInit(){
                this.background=this.defaultColor;
    }
}
///before using ngoninit methon when the page load the default color is transparent. it is not yellow. 
///We know ngStyle and ngClass are also attribute directive.
///We wrap ngStle etc in squar bracket.
///But the selector of custom directives without any square bracket
///This is a typically use case when we have only one property to bind
///Let say the highlightcolor is our main property.
///And we want to set this highlightcolor with the selector.
///we can specify alias with the property
///now we cannot use the highlight property directly. It will throw an error
///