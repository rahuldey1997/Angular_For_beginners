import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './renderer.component.html',
  styleUrl: './renderer.component.css'
})
export class RendererComponent {
title: string='Renderer';
}

