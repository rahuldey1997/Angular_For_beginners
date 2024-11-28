import { Component, OnInit } from '@angular/core';
import { RouteGuardCoursesService } from '../service/routeguardcourse.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  providers:[RouteGuardCoursesService], 
})
export class RegistrationComponent  {
    username:string='';
    password:string='';
    constructor( private route:Router){}
    isSubmitted: boolean=false;
    onSubmit() {
        return this.isSubmitted=true;
        }
    canExit(){
        if((this.username|| this.password)|| this.isSubmitted==false){
            console.log(this.isSubmitted)
            console.log(this.username)
            console.log(this.password)
            return confirm('You have Unsaved changes. Do you want to exit!')
         }else{
             return true
         } 
    }
}