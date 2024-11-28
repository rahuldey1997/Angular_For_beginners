import { Component } from '@angular/core';
import { EnrollService } from '../service/enroll.service';
@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
title: string='Angular Course';
// OnEnroll(){
//     alert('Thank you for enrolling to'+' '+ this.title)
// }
onEnroll() {
    const enrollService= new EnrollService()
    enrollService.OnEnrollClicked(this.title)
}

}