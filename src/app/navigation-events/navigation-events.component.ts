import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink,Router ,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
@Component({
  selector: 'app-navigation-events',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation-events.component.html',
  styleUrl: './navigation-events.component.css'
})
export class NavigationEventComponent{
  title:string='Navigation Events'
  showLoader:boolean=false
 constructor(private router:Router){ }
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
       this.showLoader=true;   
      }
      if(routerEvent instanceof NavigationEnd|| routerEvent instanceof NavigationCancel||routerEvent instanceof NavigationError){
        this.showLoader=false;
      }
    })
  }  
  }
