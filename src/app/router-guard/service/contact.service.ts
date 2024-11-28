import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
    contacts = [
        {
            name: "John Doe",
            phone: "123-456-7890",
            email: "johndoe@example.com",
            address: "123 Main St, Anytown, USA"
        },
        {
            name: "Jane Smith",
            phone: "234-567-8901",
            email: "janesmith@example.com",
            address: "456 Oak St, Somecity, USA"
        },
        {
            name: "Alice Johnson",
            phone: "345-678-9012",
            email: "alicejohnson@example.com",
            address: "789 Pine St, Anycity, USA"
        },
        {
            name: "Bob Brown",
            phone: "456-789-0123",
            email: "bobbrown@example.com",
            address: "321 Elm St, Somewhere, USA"
        },
        {
            name: "Charlie Davis",
            phone: "567-890-1234",
            email: "charliedavis@example.com",
            address: "654 Maple St, Anywhere, USA"
        },
        {
            name: "Diana Wilson",
            phone: "678-901-2345",
            email: "dianawilson@example.com",
            address: "987 Cedar St, Thisplace, USA"
        },
        {
            name: "Ethan Clark",
            phone: "789-012-3456",
            email: "ethanclark@example.com",
            address: "432 Birch St, Thatplace, USA"
        },
        {
            name: "Fiona Martinez",
            phone: "890-123-4567",
            email: "fionamartinez@example.com",
            address: "765 Spruce St, Whoville, USA"
        },
        {
            name: "George Anderson",
            phone: "901-234-5678",
            email: "georgeanderson@example.com",
            address: "210 Redwood St, Yourtown, USA"
        },
        {
            name: "Hannah Thompson",
            phone: "012-345-6789",
            email: "hannahthompson@example.com",
            address: "543 Willow St, Mytown, USA"
        }
    ];
    getAllcontact(){
       return new Observable((con)=>{
                setTimeout(()=>{
                   con.next(this.contacts)
                },5000)
        })
    }
}