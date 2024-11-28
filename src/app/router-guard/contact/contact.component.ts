import { Component, inject } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactRouteComponent {
  title:string='Contact';
  Allcontacts:any;
  constructor(private contactService:ContactService, private route:ActivatedRoute){}

  ngOnInit(): void {
   this.Allcontacts= this.route.snapshot.data['contacts']
    }
}
