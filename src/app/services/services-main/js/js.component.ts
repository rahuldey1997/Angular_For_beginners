import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EnrollService } from '../service/enroll.service';

@Component({
  selector: 'app-js',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './js.component.html',
  styleUrl: './js.component.css'
})
export class JsComponent {
title: string='JavaScript Course';
// OnEnroll(){
//     alert('Thank you for enrolling to'+' '+ this.title)
// }
  onEnroll(){
    const enrollService= new EnrollService();
    enrollService.OnEnrollClicked(this.title)
  }
}