import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsComponent } from './services-main/js/js.component';
import { AngularComponent } from './services-main/angular/angular.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, JsComponent, AngularComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
title: string='Services'
}

