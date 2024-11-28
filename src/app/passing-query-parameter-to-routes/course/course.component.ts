import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import { CoursesDemoService } from '../service/courses.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-course-demo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseDemoComponent {
title:string='Course';
course: any;
courseId:any;
editMode:boolean=false;
constructor(private route: ActivatedRoute, private coursesService: CoursesDemoService, private router:Router) { }
ngOnInit(): void {
this.route.paramMap.subscribe((param)=>{
  this.courseId=param.get('id');
  this.course=this.coursesService.courses.find(x=>x.id==this.courseId)
});
    this.route.queryParamMap.subscribe((param)=>{
        this.editMode=Boolean(param.get('edit'))
    })
}
appendQueryParam() {
    this.router.navigate(['/courses/course',this.courseId],{queryParams:{edit:true}})
    }
    update(){
        this.router.navigate(['/courses/course',this.courseId]);
        this.editMode=false
    }
}