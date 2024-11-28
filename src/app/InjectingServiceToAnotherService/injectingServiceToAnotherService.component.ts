import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInjectingServiceToAnotherService } from './service/user.service';
import { AddUserInjectingServicesToAnotherServiceComponent } from "./addUser/adduser.component";
import { LoggerService } from './service/logger.service';
@Component({
    selector: 'app-injecting-service-to-another-service',
    standalone: true,
    imports: [CommonModule, AddUserInjectingServicesToAnotherServiceComponent],
    templateUrl: './injectingServiceToAnotherService.component.html',
    styleUrl: './injectingServiceToAnotherService.component.css',
    providers: [UserInjectingServiceToAnotherService,LoggerService],
})
export class InjectingServiceToAnotherServiceComponent implements OnInit{

title: string='Injecting Service To Another Service'
users:{name:string, status: string}[]=[];
constructor(private userService:UserInjectingServiceToAnotherService, private LoggerService: LoggerService){
}
ngOnInit(): void {
  this.users=this.userService.users
}
}

