import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { NotificationComponent } from "./notification/notification.component";


@Component({
    selector: 'app-event-binding',
    standalone: true,
    templateUrl: './eventbinding.component.html',
    styleUrl: './eventbinding.component.css',
    imports: [SearchComponent, NotificationComponent]
})
export class EventBindingComponent {
title: string='Event Binding';

}

