import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleDirectives } from './style.directive';

@Component({
  selector: 'app-custom-app-directive',
  standalone: true,
  imports: [CommonModule, StyleDirectives],
  templateUrl: './custom-app-directive.component.html',
  styleUrl: './custom-app-directive.component.css'
})
export class CustomAppDirectiveComponent {
title: string='Custom App Style Directive';
active: boolean=true;
onclick(){
  this.active=false; 
}
}
