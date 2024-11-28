import { Directive, Input, TemplateRef, ViewContainerRef, input} from "@angular/core";
@Directive({
    selector:'[appIf]',
    standalone: true,
})

export class IfDirectives {
     constructor(private template: TemplateRef<any>,private viewContainer:ViewContainerRef){  ///this template is the view on which we have used our structral directive
                    ///This viewContainer is the container inside which the view will be added or removed and the template parameter is the view itself
                ///templete is the what to add or remove and viewContainer is the where to add or remove
                }
// @Input('appIf') set displayView(condition:boolean){
    @Input() set appIf(condition:boolean){  ///We can use passing alies also
        if(condition){
            this.viewContainer.createEmbeddedView(this.template);
        }
        else{
            this.viewContainer.clear();
        }
}
}
