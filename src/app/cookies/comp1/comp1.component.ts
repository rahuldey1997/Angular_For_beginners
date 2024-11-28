import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp11',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

title:string="Comp1";
constructor(private _cookie:CookieService){}
setData(userId:string){
  this._cookie.set("userName",JSON.stringify(userId))
}  
}
