import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-undestanding-operators-on-observable',
  standalone: true,
  imports: [],
  templateUrl: './undestanding-operators-on-observable.component.html',
  styleUrl: './undestanding-operators-on-observable.component.css'
})
export class UndestandingOperatorsOnObservableComponent  {
title: string='Undestanding Operators On Observable';
// array1=[1,2,6,7,8];
// array2=['A','B','C','D'];
//  myObservable= from(this.array1);
// transformObs= this.myObservable.pipe(map((val)=>{
//   return val*5;
//  }), filter((val)=>{
//   return val%2===0;
//  }))
//   ngOnInit(): void {
//   this.transformObs.subscribe((val: any)=>{
//             console.log(val)
//     },(error: { message: any; })=>{
//         alert(error.message)
//     },()=>{
//         alert('Observable has competed emiting all values')
//     })
//     }
}
