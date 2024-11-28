import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit {
ngOnInit(): void {
    
}
constructor(private dataService:DataService){

}
title: string='Component1';
enteredText:string='';
onButtonClick(){
    this.dataService.raiseDataEmitterEvent(this.enteredText)
}
}

