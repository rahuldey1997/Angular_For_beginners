import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInjectingServiceToAnotherService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addUser.component.html',
  styleUrl: './addUser.component.css',
})
export class AddUserInjectingServicesToAnotherServiceComponent  {
    username: string='';
    status:string='active';
    constructor(private userService:UserInjectingServiceToAnotherService){

    }
    AddUser(){
        this.userService.AddNewUser(this.username, this.status)
    }
}
