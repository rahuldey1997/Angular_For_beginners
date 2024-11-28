import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-routing-in-angular',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './routing-in-angular.component.html',
  styleUrl: './routing-in-angular.component.css'
})
export class RoutingInAngularComponent implements OnInit{

title:string='Routing in Angular';
pathUrl:string=""
constructor(private router:Router, private route: ActivatedRoute){

}
ngOnInit() {
  this.logPath()
}
NavigateToCourses() {
 this.router.navigate(['routing-in-angular','courses']);
}
NavigateToContact() {
  this.router.navigateByUrl('routing-in-angular/contact');
}
logPath(): void {
  this.route.url.subscribe((urlSegments: UrlSegment[]) => {
    const path = urlSegments.map(segment => segment.path).join('/');
    this.pathUrl=path
  });
}
}
