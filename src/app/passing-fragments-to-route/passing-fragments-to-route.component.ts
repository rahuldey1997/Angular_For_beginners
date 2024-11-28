import { Component, OnInit } from '@angular/core';
import { Item1Component } from "./item1/item1.component";
import { Item2Component } from "./item2/item2.component";
import { Item3Component } from "./item3/item3.component";
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-passing-fragments-to-route',
    standalone: true,
    templateUrl: './passing-fragments-to-route.component.html',
    styleUrl: './passing-fragments-to-route.component.css',
    imports: [Item1Component, Item2Component, Item3Component, RouterLink]
})
export class PassingFragmentsToRouteComponent implements OnInit {

title:string='Passing Fragments To Route';
constructor(private activatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this.activatedRoute.fragment.subscribe((value)=>{
      this.jumpTo(value)
  })
}
jumpTo(section:any){
  document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
}
}
