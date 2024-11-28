import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from './validators/noSpaceAllowed.validator';
import {  UserNameValidators } from './validators/userName.validator';
//  import { noSpaceAllowed } from './validators/noSpaceAllowed.validator';


@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit{
first:string='@angular/forms in the Module file'
second:string="gender:new FormControl('male')"
formStatus:string='';
reactiveForm:FormGroup;
ngOnInit() {
  this.reactiveForm=new FormGroup({
    firstName: new FormControl(null, [Validators.required, CustomValidator.noSpaceAllowed]),
    lastName: new FormControl(null,[Validators.required, CustomValidator.noSpaceAllowed]),
    // firstName: new FormControl(null, [Validators.required, CustomValidator]),
    // lastName: new FormControl(null,[Validators.required, noSpaceAllowed]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    username: new FormControl(null, Validators.required, UserNameValidators.checkUsername),
    dob: new FormControl(null),
    gender:new FormControl('male'),
    address: new FormGroup({
    country: new FormControl('India', Validators.required),
    street: new FormControl(null, Validators.required), 
    city: new FormControl(null),
    postal: new FormControl(null, Validators.required),
    }),
    skills: new FormArray([
      new FormControl(null, Validators.required),
    ]),
    experience: new FormArray([])
  })
  // this.reactiveForm.get('firstName').valueChanges.subscribe((value)=>{
  //     console.log(value)
  // })
  // this.reactiveForm.valueChanges.subscribe((data)=>{
  //   console.log(data)                       ///this will be executed all offer the reactive form.
  // })
//   this.reactiveForm.get('email').statusChanges.subscribe((status)=>{
//      console.log(status)
//   })
//   this.reactiveForm.get('username').statusChanges.subscribe((status)=>{
//     console.log(status)
//  })
this.reactiveForm.statusChanges.subscribe((status)=>{
  console.log(status)  ///when all is valid then valid else invalid
    this.formStatus=status;
})
}
generateUsername(){

}
onSubmit(){
  console.log(this.reactiveForm)
  console.log(this.reactiveForm.value.address.country)
  console.log(this.reactiveForm.controls['gender'].value)
}
AddSkills(){
  (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
}
DeleteSkills(index:number){
 const skillarry= (<FormArray>this.reactiveForm.get('skills'));
  skillarry.removeAt(index);
}
AddExperience() {
  const frmgroup= new FormGroup({
    company: new FormControl(null),
    position: new FormControl(null),
    jobprofile: new FormControl(null),
    startdate: new FormControl(null),
    enddate: new FormControl(null),  
 });
  (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }
  DeleteExperience(index: number) {
    const frmArry= (<FormArray>this.reactiveForm.get('experience'));
    frmArry.removeAt(index);
  }
}
