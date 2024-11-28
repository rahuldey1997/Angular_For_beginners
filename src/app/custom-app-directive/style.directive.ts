import { Directive, ElementRef, Input, Renderer2} from "@angular/core";
@Directive({
    selector:'[appStyle]',
    standalone: true,
})

export class StyleDirectives {
     constructor(private ele: ElementRef, private renderer: Renderer2){
     }
@Input('appStyle') set setStyle(styles: object){
   let entries=  Object.entries(styles);
   for(let entry of entries){
    this.renderer.setStyle(this.ele.nativeElement,entry[0],entry[1]);
   }
}
}