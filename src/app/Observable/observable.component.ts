import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit{

title: string='Observable';
myObservable= new Observable((observer)=>{
    // console.log('Observable Starts');
    // setTimeout(()=>{observer.next('1')},1000)
    // setTimeout(()=>{observer.next('2')},2000)
    // setTimeout(()=>{observer.next('3')},3000)
    // //  setTimeout(()=>{observer.error(new Error('Please try again later'))},1000)
    //  setTimeout(()=>{observer.next('4')},4000)
    //  setTimeout(()=>{observer.complete()},5000)
    // observer.next('3')
    // observer.next('2')
    // observer.next('1') 
      
})
ngOnInit(): void {
    // this.myObservable.subscribe(next,error,complete)
    // this.myObservable.subscribe((val)=>{
    //         console.log(val)
    // },(error)=>{
    //     alert(error.message)
    // },()=>{
    //     alert('Observable has competed emiting all values')
    // })
    // }
}
}
