import { Component } from '@angular/core';
import { HighlightAndColorDirective } from './highlightandcolor.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [CommonModule, HighlightAndColorDirective],
  templateUrl: './hostlistner.component.html',
  styleUrl: './hostlistner.component.css'
})
export class HostListenerComponent {

title: string='Hostlistner';
}