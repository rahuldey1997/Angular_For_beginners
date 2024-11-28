import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-switch-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch-directive.component.html',
  styleUrl: './ng-switch-directive.component.css'
})
export class NgSwitchDirectiveComponent {
title:string='ngSwitch Directive';
occupation:string='teacher';
}
