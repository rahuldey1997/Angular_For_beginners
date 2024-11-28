import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactService } from '../services/react.service';
@Component({
  selector: 'app-react',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css',
  providers:[ReactService]
})
export class ReactComponent {
title: string='React Course';
constructor(private enrollService:ReactService){
}
OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title)
}
}
