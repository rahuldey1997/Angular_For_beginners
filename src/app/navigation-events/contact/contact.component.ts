import { Component } from '@angular/core';
import { ContactService } from '../../router-guard/service/contact.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactNavComponent {
  title:string='Contact';
  Allcontacts:any;
  constructor(private contactService:ContactService, private route:ActivatedRoute){}

  ngOnInit(): void {
   this.Allcontacts= this.route.snapshot.data['contacts']
    }
}

