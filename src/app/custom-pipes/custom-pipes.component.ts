import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PercentagePipe } from './percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NgxBarcode6Module } from 'ngx-barcode6';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [CommonModule, FilterPipe, PercentagePipe,FormsModule, NgxBarcode6Module],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})

export class CustomPipesComponent {
title:string="Custom Pipes";
fullMarks:number=500;
_filterText:string='';
one:string='@Pipe({';
two:string="pure=false";
three:string=')}';
filteredStudents:any;

 get filterText(){
  return this._filterText
 } 
 set filterText(value:string){
   this._filterText=value;
 }

students= [
  {"id": 1, "name": "Alice", "marks": 451, "gender":"Female"},
  {"id": 2, "name": "Bob", "marks": 422, "gender":"Male"}, 
  {"id": 3, "name": "Charlie", "marks": 489, "gender":"Male"},
  {"id": 4, "name": "David", "marks": 413, "gender":"Male"},
  {"id": 5, "name": "Eve", "marks": 490, "gender":"Female"}
]
studentAdd:boolean=false;
name:string='';
id:number=0;
marks:number=0;
gender:string=''
addStud(){
  this.studentAdd=true;
}
submit(){
  if (this.name && this.id && this.marks && this.gender) {
    this.students.push({ name: this.name, id: this.id, marks: this.marks, gender: this.gender });
    this.name 
    this.id 
    this.marks 
    this.gender 
    this.studentAdd=false;
  }
}


}