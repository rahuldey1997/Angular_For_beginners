import { FormControl, AbstractControl } from "@angular/forms";
export class UserNameValidators{
    static checkUsername(control:AbstractControl):Promise<any>{
        return userNameAllowed(control.value);
    }
}
function userNameAllowed(username:string){
    const takenUserNames=['rahul', 'rahuldey','rahuldey06408', 'rahul06408'];
    return new Promise((res,rej)=>{
            setTimeout(()=>{
            if(takenUserNames.includes(username)){
                res({checkUsername: true})
            }
            else{
                res(null)
            }
            },2000);
    });
}