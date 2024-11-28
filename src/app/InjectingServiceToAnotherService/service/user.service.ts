import { Component, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
//in service insteed of provider we use injectable. We use injectable  on the service where we are injecting another service
@Injectable()
export class UserInjectingServiceToAnotherService{

    constructor(private Logger:LoggerService){

    }
    users=[
        {name:'Indu', status:'active'},
        {name:'Paul', status:'inactive'},
        {name:'Tom', status:'inactive'},
        {name:'Klein', status:'active'},
    ]
 AddNewUser(name:string, status:string){
 this.users.push({name:name,status:status});
 this.Logger.LoggerMessage(name, status)

    }
}