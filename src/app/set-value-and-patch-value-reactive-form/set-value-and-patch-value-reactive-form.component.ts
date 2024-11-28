import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from './validators/noSpaceAllowed.validators';
import { UserNameValidators } from './validators/userName.validator';

@Component({
  selector: 'app-set-value-and-patch-value-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './set-value-and-patch-value-reactive-form.component.html',
  styleUrl: './set-value-and-patch-value-reactive-form.component.css'
})
export class SetValueAndPatchValueReactiveFormComponent implements OnInit{
  title:string="setValue() & patchValue()"
  first:string='@angular/forms in the Module file'
  second:string="gender:new FormControl('male')"
  formStatus:string='';
  reactiveForm:FormGroup;
  ngOnInit() {
    this.reactiveForm=new FormGroup({
      firstName: new FormControl(null, [Validators.required, CustomValidator.noSpaceAllowed]),
      lastName: new FormControl(null,[Validators.required, CustomValidator.noSpaceAllowed]),
      // firstName: new FormControl(null, [Validators.required, noSpaceAllowed]),
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
   let usernames='';
   const fName: string=this.reactiveForm.get('firstName').value;
   const lName: string=this.reactiveForm.get('lastName').value;
   const dofb: string=this.reactiveForm.get('dob').value;
   if(fName.normalize.length>=3){
    usernames+=fName.slice(0,3)
   }else{
    usernames+=fName;
   }
   if(lName.normalize.length>=3){
    usernames+=lName.slice(0,3)
   }else{
    usernames+=lName;
   }
   let datetime= new Date(dofb)
   usernames+=datetime.getFullYear();
   usernames=usernames.toLowerCase()
  //  this.reactiveForm.setValue({
  //     firstName: this.reactiveForm.get('firstName').value,
  //     lastName:this.reactiveForm.get('lastName').value,
  //     email: this.reactiveForm.get('email').value,
  //     username: usernames,
  //     dob: this.reactiveForm.get('dob').value,
  //     gender:this.reactiveForm.get('gender').value,
  //     address: {
  //     country: this.reactiveForm.get('address.country').value,
  //     street: this.reactiveForm.get('address.street').value, 
  //     city: this.reactiveForm.get('address.city').value,
  //     postal: this.reactiveForm.get('address.postal').value,
  //     },
  //     skills: this.reactiveForm.get('skills').value,
  //     experience: this.reactiveForm.get('experience').value,
  //  })
  //this.reactiveForm.get('username').setValue(usernames)
  this.reactiveForm.patchValue({
    username: usernames,
    address:{
      city:'Delhi'
    }
  })
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
