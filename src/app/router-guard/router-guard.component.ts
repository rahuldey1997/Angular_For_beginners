import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseRouteService } from './service/routeguard.service';
import { RouteGuardCoursesService } from './service/routeguardcourse.service';


@Component({
  selector: 'app-router-guard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './router-guard.component.html',
  styleUrl: './router-guard.component.css',
  providers:[RouteGuardCoursesService]
})
export class RouterGuardComponent {
  title:string='Router Guard';
  constructor(private route:Router){
    console.log("main")
  }
login() {  
}
}
