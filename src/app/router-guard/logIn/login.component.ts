import { Component, OnInit } from '@angular/core';
import { RouteGuardCoursesService } from '../service/routeguardcourse.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-logIn',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[RouteGuardCoursesService],
  
})
export class LogInComponent {
   
submit(userid:string,password:string) {
    if(userid==='rahul'&& password==='123'){
            sessionStorage.setItem("isloggedIn","true")
    }else{
        sessionStorage.setItem("isloggedIn","false")
    }
}
}