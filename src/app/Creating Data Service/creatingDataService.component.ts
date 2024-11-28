import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './servicees/user.service';
import { AddUserComponent } from './addUser.component/addUser.component';
@Component({
    selector: 'app-creatingDataService',
    standalone: true,
    templateUrl: './creatingDataService.component.html',
    styleUrl: './creatingDataService.component.css',
    providers: [UserService],
    imports: [CommonModule, AddUserComponent]
})
export class CreatingDataServiceComponent implements OnInit {
title: string='Creating Data Service';
constructor(private userServices:UserService){   
}
users:{name:string, status:string}[]=[];
ngOnInit(){
       this.users= this.userServices.users;
}
}