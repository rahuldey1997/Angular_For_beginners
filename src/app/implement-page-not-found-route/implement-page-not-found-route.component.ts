import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-implement-page-not-found-route',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './implement-page-not-found-route.component.html',
  styleUrl: './implement-page-not-found-route.component.css'
})
export class ImplementPageNotFoundRouteComponent {
title: string='Implement Page Not Found Routes'
}
