import { Component } from '@angular/core';
import { Component1Component } from "./component1/component1.component";
import { Component2Component } from "./component2/component2.component";
import { DataService } from './service/data.service';
@Component({
    selector: 'app-subject-in-rx-js',
    standalone: true,
    templateUrl: './subject-in-rx-js.component.html',
    styleUrl: './subject-in-rx-js.component.css',
    imports: [Component1Component, Component2Component],
    providers:[DataService],
})
export class SubjectInRxJSComponent {
title: string="Subject in RxJS"
constructor(private dataService:DataService){
}
}
