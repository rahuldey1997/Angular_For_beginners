import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component implements OnInit{
    title: string='Component2';
inputText:string='';
    constructor(private dataService:DataService){}
ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((val)=>{
        this.inputText=val;
    })
}
}

