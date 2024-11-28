import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from './service/courses.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-passing-parameters-to-route',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './passing-parameters-to-route.component.html',
  styleUrl: './passing-parameters-to-route.component.css',
  providers:[CoursesService]
})
export class PassingParametersToRouteComponent implements OnInit {

  title:string='Passing Parameters To Route';
  courses:any;
 constructor(private coursesservice:CoursesService) {
 }
ngOnInit(): void {
 this.courses=this.coursesservice.courses
}
}
