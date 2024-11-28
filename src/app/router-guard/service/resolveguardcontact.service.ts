
import { ContactService } from "./contact.service";
import { inject } from "@angular/core";

export const resolve=()=>{
    const contactService=inject(ContactService)
    return contactService.getAllcontact();
}
