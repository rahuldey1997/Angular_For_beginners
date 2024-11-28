import { Component } from '@angular/core';
import { ReactComponent } from './component/react.component';
@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [ReactComponent],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css'
})
export class DependencyInjectionComponent {
 title: string='Dependency Injection in Angular'
}
