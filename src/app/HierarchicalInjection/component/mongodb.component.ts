import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MongoDbService } from '../serviceHierarchical/enrolelmongodb.service';
@Component({
  selector: 'app-mongodb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mongodb.component.html',
  styleUrl: './mongodb.component.css',
//   providers:[MongoDbService] using this in the parent component
})
export class MongoDbComponent {

title: string='MongoDb Course';
constructor(private enrollService:MongoDbService){
}
OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title)
}
}