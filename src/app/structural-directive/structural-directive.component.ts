import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDirectives } from './if.directive';
@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,IfDirectives],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

title: string='Custom Structural Directives';
display: boolean=false;
onclick() {
this.display=true;
}
close() {
  this.display=false;
  }
display1: boolean=false;
onclick1() {
this.display1=true;
}

}
