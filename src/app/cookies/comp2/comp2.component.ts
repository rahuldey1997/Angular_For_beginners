import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp21',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
title:string="Comp2";
userId:string='';
userName:any;
constructor(private _cookie:CookieService){}
getData() {  
    this.userName=this._cookie.get("userName")
    this.userId=this.userName
    }
deleteData() {
  this._cookie.delete("Userid")
  this.userId="";
}
deleteDataAll() {
  this._cookie.deleteAll("Userid")
  this.userId="";
 }
}
