import { EventEmitter } from "@angular/core"

export class UserService{
    
    users=[
        {
            name: "Alice Johnson",
            job: "Software Engineer",
            gender: "Female",
            country: "USA",
            age: 29,
            avatar: "https://example.com/avatars/alice.jpg"
        },
        {
            name: "Carlos Mendez",
            job: "Graphic Designer",
            gender: "Male",
            country: "Mexico",
            age: 35,
            avatar: "https://example.com/avatars/carlos.jpg"
        },
        {
            name: "Priya Singh",
            job: "Data Scientist",
            gender: "Female",
            country: "India",
            age: 27,
            avatar: "https://example.com/avatars/priya.jpg"
        },
        {
            name: "Liam Brown",
            job: "Marketing Manager",
            gender: "Male",
            country: "UK",
            age: 42,
            avatar: "https://example.com/avatars/liam.jpg"
        }
    ]
OnShowDetailsClicked= new EventEmitter<{ name: string,job: string,gender: string,country: string,age: number,avatar: string}>();
ShowUserDetails(user:{name: string,job: string,gender: string,country: string,age: number,avatar: string}){
    this.OnShowDetailsClicked.emit(user)
}
}