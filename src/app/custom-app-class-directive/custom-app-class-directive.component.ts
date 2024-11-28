import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterHighlightForBindingDirective } from '../binding-directive-property/betterHighlightForBinding.directive';
import { BetterHighlightForCustomAppDirective } from './highlightForCustomApp.directive';
@Component({
  selector: 'app-custom-app-class-directive',
  standalone: true,
  imports: [BetterHighlightForCustomAppDirective, BetterHighlightForBindingDirective, CommonModule],
  templateUrl: './custom-app-class-directive.component.html',
  styleUrl: './custom-app-class-directive.component.css'
})
export class CustomAppClassDirectiveComponent {
title: string='Custom AppClass Directive';
}
