import { Component } from '@angular/core';
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cookies',
    standalone: true,
    templateUrl: './cookies.component.html',
    styleUrl: './cookies.component.css',
    imports: [Comp1Component, Comp2Component, FormsModule]
})
export class CookiesComponent {
title:string="Cookies";
version:string="@17.1.0";

}
