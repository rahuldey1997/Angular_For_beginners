import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userDetail.component.html',
  styleUrl: './userDetail.component.css',
})
export class UserDetailComponent implements OnInit{
  // users:{name: string,job: string,gender: string,country: string,age: number,avatar: string}
  users:any;
constructor( private userService: UserService){}
  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe((data:{name: string,job: string,gender: string,country: string,age: number,avatar: string})=>{  
        this.users=data
    })
  }     
}