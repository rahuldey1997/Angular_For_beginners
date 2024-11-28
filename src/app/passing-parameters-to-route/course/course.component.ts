import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesService } from '../service/courses.service';


@Component({
  selector: 'app-passing-parameters-to-route',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  
})
export class CourseComponent implements OnInit {
  title:string='Course';
  course: any;
  courseId:any;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {
  //  this.courseId = this.route.snapshot.paramMap.get('id');
  //  this.course=this.coursesService.courses.find(x=>x.id==this.courseId)
  this.route.paramMap.subscribe((param)=>{
    this.courseId=param.get('id');
    this.course=this.coursesService.courses.find(x=>x.id==this.courseId)
  })
  }
}
