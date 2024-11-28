import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users-component-interaction-services',
  standalone: true,
  templateUrl: './alluserscomponentinteraction.component.html',
  styleUrl: './alluserscomponentinteraction.component.css',
  imports: [CommonModule]
})
export class AllUsersComponent implements OnInit {
users: {
  name: string,
  job: string,
  gender: string,
  country: string,
  age: number,
  avatar: string
}[]=[];
constructor(private userService: UserService){}
  ngOnInit(): void {
    this.users=this.userService.users
  }
  ShowDetails(user:{name: string,job: string,gender: string,country: string,age: number,avatar: string}){
      this.userService.ShowUserDetails(user)

  }
}