import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { Section2Component } from './components/section2/section2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, Section2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'RedeAcademias';
}
