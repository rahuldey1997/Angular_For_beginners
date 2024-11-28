import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
title:string="Pipes";
Name:string="Rahul Dey";
DigitsInfo:string="{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}"
currentDate= new Date();
num:number=27;
description:string="maJMG ASDD CAMWH MNDV";
htmlCode:string="{{student.marks / fullMark | percent : '1.2-2'}}";
t:string='<t>';
MyData={
  Name:'Rahul Dey',
  Gender:'Male',
  Age:27,
}
otherData=[ { id: 1, name: 'John', gender: 'Male' }, { id: 2, name: 'Emily', gender: 'Female' }, { id: 3, name: 'Michael', gender: 'Male' }, { id: 4, name: 'Sarah', gender: 'Female' }, { id: 5, name: 'David', gender: 'Male' } ]
fullMark:number=500;
students = [
  {"id": 1, "name": "Alice", "marks": 450},
  {"id": 2, "name": "Bob", "marks": 420},
  {"id": 3, "name": "Charlie", "marks": 480},
  {"id": 4, "name": "David", "marks": 410},
  {"id": 5, "name": "Eve", "marks": 490}
]
totalStudent= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(this.students.length)
  },2000)
});

}
