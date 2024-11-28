import {  ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { RegistrationComponent } from "../registration/registration.component";


export const authDeactivateGuard:CanDeactivateFn<RegistrationComponent> = (component: RegistrationComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)=>{
return component.canExit();
}