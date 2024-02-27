import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {
  thumbnails = [
    {
      thumbnail1:"../../../assets/thumbnail1.jpg",
      vidname:"F1 Singapore Qualifying Highlights by Ayush Bhople",
      channel:"Ayush Bhople's creation",
      
    }
  ]
}
