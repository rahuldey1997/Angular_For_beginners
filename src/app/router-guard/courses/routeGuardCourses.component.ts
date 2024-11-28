import { Component, OnInit } from '@angular/core';
import { RouteGuardCoursesService } from '../service/routeguardcourse.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-routeGuardCourses',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './routeGuardCourses.component.html',
  styleUrl: './routeGuardCourses.component.css',
  providers:[RouteGuardCoursesService],
  
})
export class RouterGuardCoursesComponent implements OnInit{

title:string='Courses';
courses:any;
constructor(private courseService:RouteGuardCoursesService, private route:Router){
}
  ngOnInit(): void {
    this.courses=this.courseService.courses
  }
  logOut() {
    this.route.navigateByUrl("/router-guard/router-guard/LogIn")
  }
}