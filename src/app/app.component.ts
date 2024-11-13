import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ResourcesComponent } from "./components/resources/resources.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, ResourcesComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RedeAcademias';
}

