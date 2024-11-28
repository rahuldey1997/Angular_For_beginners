import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from "./UserDetail/userDetail.component";
import { AllUsersComponent } from './AllUsersComponentInteractionWithServices/alluserscomponentinteraction.component';
import { UserService } from './services/user.service';


@Component({
    selector: 'app-component-interaction-with-services',
    standalone: true,
    templateUrl: './componentInteractionWithServices.component.html',
    styleUrl: './componentInteractionWithServices.component.css',
    imports: [CommonModule,UserDetailComponent,AllUsersComponent],
    providers:[UserService]  
})
export class ComponentInteractionWithServices {
title: string='Component Interaction With Service';
constructor(private userService: UserService){}
}