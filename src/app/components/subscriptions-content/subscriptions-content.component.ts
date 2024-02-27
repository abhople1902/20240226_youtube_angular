import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscriptions-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriptions-content.component.html',
  styleUrl: './subscriptions-content.component.css'
})
export class SubscriptionsContentComponent {
  thumbnails = [
    {
      thumbnail1:"../../../assets/thumbnail1.jpg",
      vidname:"F1 Singapore Qualifying Highlights by Ayush Bhople",
      channel:"Ayush Bhople's creation",
      
    }
  ]
}
