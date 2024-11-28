import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SetbackgroundDirective } from './setbackground.directives';
@Component({
  selector: 'app-customAttributeDirective',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SetbackgroundDirective],
  templateUrl: './customAttributeDirective.component.html',
  styleUrl:'./customAttributeDirective.component.css'
})
export class CustomAttributeDirectiveComponent {
title: string='Custom Attribute Directive';
}