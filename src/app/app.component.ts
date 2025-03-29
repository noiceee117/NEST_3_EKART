import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { FooterComponent } from "./UI/footer/footer.component";
import { CardComponent } from './UI/card/card.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ekart';
}