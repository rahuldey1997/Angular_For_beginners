import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component{
    title:string="Comp2";
userId:string='';
userName:any;
getData() {  
    this.userName=sessionStorage.getItem("userName")
    this.userId=this.userName
    }
deleteData() {
 sessionStorage.clear()
 this.userId="";
}
}