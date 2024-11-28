import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';


@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [],
  templateUrl: './waysOfCreatingObservable.component.html',
  styleUrl: './waysOfCreatingObservable.component.css'
})
export class DifferentWaysOfCreatingObservableComponent implements OnInit {

title: string='Different Ways Of Creating Observable';
// myObservable=Observable.create((observer: { next: (arg0: string) => void; })=>{
//      console.log('Observable Starts');
//      setTimeout(()=>{observer.next('A')},1000)
//      setTimeout(()=>{observer.next('B')},2000)
//      setTimeout(()=>{observer.next('C')},3000)
// });
array1=[1,2,6,7,8];
array2=['A','B','C','D'];
// myObservable=of(this.array1,this.array2);
// myObservable= from(this.array1);
ngOnInit(): void {
  // this.myObservable.subscribe((val: any)=>{
  //           console.log(val)
  //   },(error: { message: any; })=>{
  //       alert(error.message)
  //   },()=>{
  //       alert('Observable has competed emiting all values')
  //   })
  //   }
}}
