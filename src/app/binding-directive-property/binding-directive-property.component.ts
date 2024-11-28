import { Component } from '@angular/core';
import { BetterHighlightDirective } from './betterHighlight.directive';
import { BetterHighlightForBindingDirective } from './betterHighlightForBinding.directive';

@Component({
  selector: 'app-binding-directive-property',
  standalone: true,
  imports: [BetterHighlightDirective, BetterHighlightForBindingDirective],
  templateUrl: './binding-directive-property.component.html',
  styleUrl: './binding-directive-property.component.css'
})
export class BindingDirectivePropertyComponent {
title: string='Binding Property Directive';
}
