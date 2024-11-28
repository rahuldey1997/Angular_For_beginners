import { Component } from '@angular/core';
import { MongoDbComponent } from './component/mongodb.component';
import { MongoDbService } from './serviceHierarchical/enrolelmongodb.service';
@Component({
    selector: 'app-hierarchical-injection',
    standalone: true,
    templateUrl: './hierarchicalInjection.component.html',
    styleUrl: './hierarchicalInjection.component.css',
    imports:[MongoDbComponent],
    providers:[MongoDbService]
})
export class HierarchicalInjectionComponent {
 title: string='Hierarchical Injection in Angular';
 constructor(private enrollService:MongoDbService){
}
}