import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightAndColorBetterDirective } from './betterhighlight.directive';
@Component({
  selector: 'app-hostbinding',
  standalone: true,
  imports: [CommonModule, HighlightAndColorBetterDirective],
  templateUrl: './hostbinding.component.html',
  styleUrl: './hostbinding.component.css'
})
export class HostBindingComponent {

title: string='Hostbinding';
}