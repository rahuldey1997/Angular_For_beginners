import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
@Directive({
    selector:'[appClass]',
    standalone: true,
})

 export class BetterHighlightForCustomAppDirective {
    constructor(private ele: ElementRef, private renderer: Renderer2){

    }
    @Input() set display(value: object){  //we are setting the display into object
       let entries= Object.entries(value)  ///we are accesing the value of the key's of the object
        // for(let entry of entries){
        //     if(entry[1]==true)
        //     {
        //         this.renderer.addClass(this.ele.nativeElement,entry[0])
        //     }
        // }
        for(let [className, condition] of entries){
            if(condition){
                this.renderer.addClass(this.ele.nativeElement, className);
            }
        }
    }
}

