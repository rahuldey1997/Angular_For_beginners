import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-listner-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
     searchValue: string='';
    constructor(){

   }
    ngOnInit(): void {
    }
    changeSearchValue(eventData:Event){
        this.searchValue=(<HTMLInputElement>eventData.target).value;
    }


}

