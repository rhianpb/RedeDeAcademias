import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';


@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-resources></app-resources>
    <app-reviews></app-reviews>
    <app-contact></app-contact>
    <app-about></app-about>
  `,
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    ResourcesComponent,
    ReviewsComponent,
    ContactComponent,
    AboutComponent,
  ],
})
export class HomeComponent {}
