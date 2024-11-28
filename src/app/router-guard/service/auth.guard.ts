import {  CanActivateFn, Router } from "@angular/router";

export const authGuard:CanActivateFn=(route, state)=>{
    let isloggedIn=sessionStorage.getItem("isloggedIn");
    if(isloggedIn=="false"){
        alert("Please Log In")
        return false
    }
    else{
        return true;
    }   
}