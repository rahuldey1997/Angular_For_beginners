import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
title:string="Comp1";
setData(userId:string){
    sessionStorage.setItem("userName",JSON.stringify(userId))
}
}