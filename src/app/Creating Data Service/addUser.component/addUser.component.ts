import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../servicees/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-Add-User',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addUser.component.html',
  styleUrl: './addUser.component.css',
})
export class AddUserComponent implements OnInit {
    username: string='';
    status:string='active';
    constructor(private userService:UserService){
    }
    ngOnInit(){
    }
    AddUser(){
        this.userService.AddNewUser(this.username, this.status)
    }
}
