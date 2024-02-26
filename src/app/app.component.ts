import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MainBodyComponent } from './components/main-body/main-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LeftSidebarComponent, MainBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20240226_youtube_angular';
}
