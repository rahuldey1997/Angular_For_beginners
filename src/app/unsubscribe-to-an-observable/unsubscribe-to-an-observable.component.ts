import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-to-an-observable',
  standalone: true,
  imports: [],
  templateUrl: './unsubscribe-to-an-observable.component.html',
  styleUrl: './unsubscribe-to-an-observable.component.css'
})
export class UnsubscribeToAnObservableComponent implements OnInit{

title: string='Unsubscribe To An Observable';
counterObservable=interval(1000);
  counterSub: Subscription = new Subscription;
  count: any;
ngOnInit(): void {
  
}
subscribe(){
  this. counterSub=this.counterObservable.subscribe((val)=>{
   this.count= val;
})
}
unsubscribe(){
  this. counterSub.unsubscribe()
}
}
