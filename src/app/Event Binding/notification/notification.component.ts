import { Component } from '@angular/core';
@Component({
  selector: 'app-noti',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
    displayNotification:boolean=false;
notificationClosed() {
  this.displayNotification=true;  
}
}

