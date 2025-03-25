import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PhotoGalaryComponent } from "./photo-galary/photo-galary.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, PhotoGalaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PMSolarPump';
}
