import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  title:string='Template Driven Form'
  one:string='<form (ngSubmit)="onSubmit()" #myForm="ngForm">';
  two:string='<input type="text" id="first-name" name="first-name" required ngModel>';
  three:string='onSubmit() {'
  four:string='console.log(this.form)}'
  five:string="@ViewChild('myForm') form:NgForm"
  six:string="this.form.value.country";
  seven:string='[disabled]="!myForm.valid"';
  back:string="{";
  front:string="}";
  firstName:string="";
  email:string="";
  lastName:string="";
  IsAgreed: boolean=false;
  genders=[{id :'check-male', value:'male', display: 'Male'},
          {id :'check-female', value:'female', display: 'Female'},
          {id :'check-other', value:'other', display: 'Other'}
]
  @ViewChild('myForm') form:NgForm;
  onSubmit() {
  console.log(this.form.controls['first-name'].value)
  console.log(this.form.value.lastname)
  console.log(this.form.valid)
  console.log(this.form)
  this.IsAgreed=this.form.value.agreement;
}

}
