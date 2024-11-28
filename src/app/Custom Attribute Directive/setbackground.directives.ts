import { Directive, ElementRef, /*HostListener,*/ OnInit } from "@angular/core";
@Directive({
    selector:'[setBackground]',
    standalone: true,
})
///Now here insteed of writing the logic inside the constructor we can write it inside ngOninit method
export class SetbackgroundDirective implements OnInit {
    constructor(private element: ElementRef) {
    }
     ngOnInit(){

         this.element.nativeElement.style.backgroundColor='#C8E6C9'
     }  
      
  }
// export class SetbackgroundDirective{            ///register the selector in app module
//     constructor(element:ElementRef){
//         element.nativeElement.style.backgroundColor='#C8E6C9'
//     }
// }


//Another methods
// export class SetbackgroundDirective {
//     constructor(private ele: ElementRef) {
//     }
  
//     @HostListener('click') onClick() {
//       this.ele.nativeElement.style.color = 'red';
//     }
// }

    
     