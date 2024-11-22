import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, ResourcesComponent, ReviewsComponent,ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'RedeAcademias';
}
