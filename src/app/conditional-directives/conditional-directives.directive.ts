import { Directive, ElementRef, Input, Renderer2} from "@angular/core";
@Directive({
    selector:'[appHighlight]',
    standalone: true,
})

export class conditionalDirectives {
    constructor(private ele: ElementRef, private renderer: Renderer2){

    }  
   @Input() set appHighlight(condition: boolean){
            if(condition){
                this.renderer.addClass(this.ele.nativeElement, 'highlight' )
            }
   }   
  }