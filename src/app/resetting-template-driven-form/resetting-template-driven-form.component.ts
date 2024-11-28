import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-resetting-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resetting-template-driven-form.component.html',
  styleUrl: './resetting-template-driven-form.component.css'
})
export class ResettingTemplateDrivenFormComponent {
  title:string="Resetting Template Driven Form"
  dob:string='';
  back:string="{";
  front:string="}";
  firstName:string='';
  email:string='';
  lastName:string='';
  Country:string='';
  gen:string='';
  city:string='';
  postal:number;
  userName:string;
  IsAgreed: boolean=false;
  genders=[{id :'check-male', value:'male', display: 'Male'},
          {id :'check-female', value:'female', display: 'Female'},
          {id :'check-other', value:'other', display: 'Other'}];
          @ViewChild('myForm') form:NgForm;
          onSubmit() {
          console.log(this.form);
          console.log(this.form.value.firstname);
          console.log(this.form.value.country);
          console.log(this.form.value.email);
          console.log(this.form.valid);
          this.firstName=this.form.value.firstname
          this.lastName=this.form.value.lastname
          this.gen=this.form.value.gender
          this.email=this.form.value.email
          this.Country=this.form.value.address.country
          this.city=this.form.value.address.city
          this.postal=this.form.value.address.pin
          this.userName=this.form.value.username
          this.IsAgreed=this.form.value.agreement;
          console.log(this.lastName)
          this.form.reset();
          this.form.form.patchValue({
            gender:'Male',
            address:{
              country:'India'
            }
          })
        }
        generateUserName(){
          let username="";
          if(this.form.value.firstname.length>=3){
            username+=this.form.value.firstname.slice(0,3);
          }else
          {
            username+=this.form.value.firstname;
          }
          if(this.form.value.lastname.length>=3){
            username+=this.form.value.lastname.slice(0,3);
          }else
          {
            username+=this.form.value.lastname;
          }
          let datetime=new Date(this.form.value.dob)
          username+=datetime.getFullYear();
          username=username.toLocaleLowerCase();
          console.log(username)  
          // this.form.setValue({
          //   firstname:this.form.value.firstname,
          //   lastname:this.form.value.lastname,
          //   dob:this.form.value.dob,
          //   email:this.form.value.email,
          //   gender:this.form.value.gender,
          //   hobbies:this.form.value.hobbies,
          //   username:username,
          //   address:{
          //     streetadress:this.form.value.address.streetadress,
          //     streetadress2:this.form.value.address.streetadress2,
          //     city:this.form.value.address.city,
          //     pin:this.form.value.address.pin,
          //     country:this.form.value.address.country,
          //   }
          // })
          this.form.form.patchValue({
            username:username,
          //   address:{
          //     country:'',
          //   }
          })
        } 
}
