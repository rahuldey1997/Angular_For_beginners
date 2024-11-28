import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-set-value-and-patch-value-methods',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './set-value-and-patch-value-methods.component.html',
  styleUrl: './set-value-and-patch-value-methods.component.css'
})
export class SetValueAndPatchValueMethodsComponent {
title:string="setValue() & patchValue()"
dob:string='';
back:string="{";
front:string="}";
firstName:string='';
email:string='';
lastName:string='';
defaultCountry:string='India';
IsAgreed: boolean=false;
genders=[{id :'check-male', value:'male', display: 'Male'},
          {id :'check-female', value:'female', display: 'Female'},
          {id :'check-other', value:'other', display: 'Other'}];
        @ViewChild('myForm') form:NgForm;
        onSubmit() {
        console.log(this.form);
        console.log(this.form.value.firstname);
        console.log(this.form.controls['lastname'].value);
        console.log(this.form.value.email);
        console.log(this.form.valid);
        this.IsAgreed=this.form.value.agreement;
      }
      generateUserName(){
        let username="";
        if(this.firstName.length>=3){
          username+=this.firstName.slice(0,3);
        }else
        {
          username+=this.firstName;
        }
        if(this.lastName.length>=3){
          username+=this.lastName.slice(0,3);
        }else
        {
          username+=this.lastName;
        }
        let datetime=new Date(this.dob)
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
          address:{
            country:'japan',
          }
        })
      }      
}
