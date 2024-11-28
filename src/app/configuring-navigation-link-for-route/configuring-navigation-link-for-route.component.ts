import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configuring-navigation-link-for-route',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './configuring-navigation-link-for-route.component.html',
  styleUrl: './configuring-navigation-link-for-route.component.css'
})
export class ConfiguringNavigationLinkForRouteComponent {
title:string='Configuring Navigation Link For Route'
}
