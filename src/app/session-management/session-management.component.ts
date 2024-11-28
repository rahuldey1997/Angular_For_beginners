import { Component } from '@angular/core';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';


@Component({
    selector: 'app-session-management',
    standalone: true,
    templateUrl: './session-management.component.html',
    styleUrl: './session-management.component.css',
    imports: [Comp1Component, Comp2Component]
})
export class SessionManagementComponent {
title:string="Session Management";
constructor(){ 
}
}
