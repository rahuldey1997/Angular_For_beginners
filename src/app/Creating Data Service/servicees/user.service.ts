export class UserService{
    users=[
        {name:'John', status:'active'},
        {name:'Paul', status:'inactive'},
        {name:'Tom', status:'inactive'},
        {name:'Klein', status:'active'},
    ]
  OnShowDetailsClicked: any;
 AddNewUser(name:string, status:string){
 this.users.push({name:name,status:status});
    }
}