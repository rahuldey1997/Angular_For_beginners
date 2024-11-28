import { Component, OnInit } from '@angular/core';
import { CoursesDemoService } from './service/courses.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-passing-query-parameter-to-routes',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './passing-query-parameter-to-routes.component.html',
  styleUrl: './passing-query-parameter-to-routes.component.css',
  providers:[CoursesDemoService]
})
export class PassingQueryParameterToRoutesComponent implements OnInit {
title:string='Passing Query Parameter To Routes';
courses:any;
constructor(private courseService:CoursesDemoService){
}
  ngOnInit(): void {
    this.courses=this.courseService.courses
  }
}
