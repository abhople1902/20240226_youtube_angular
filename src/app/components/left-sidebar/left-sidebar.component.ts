import { Component } from '@angular/core';
import { SubscribedComponent } from '../subscribed/subscribed.component';
import { GoHomeComponent } from '../go-home/go-home.component';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [SubscribedComponent, GoHomeComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

}
